import { NextResponse } from "next/server";
import { isIllegalRequest, validateIntake } from "@/lib/intakeSchema";
import { estimatePackages, formatRange, formatWeeks } from "@/lib/intakePricing";
import { validateContactPhone } from "@/lib/contact";

const OPENAI_API_URL = "https://api.openai.com/v1/responses";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const form = payload?.form ?? payload?.intake ?? payload;
    const reviewSummary = payload?.reviewSummary ?? null;
    const messages = Array.isArray(payload?.messages) ? payload.messages : [];

    const validation = validateIntake(form);
    if (!validation.valid) {
      return NextResponse.json(
        { error: "필수 정보가 부족합니다.", details: validation.errors },
        { status: 400 }
      );
    }
    if (!form.selectedPackage || !form.contact) {
      return NextResponse.json(
        { error: "패키지와 연락처가 필요합니다." },
        { status: 400 }
      );
    }
    const contactValidation = validateContactPhone(form.contact);
    if (!contactValidation.valid) {
      return NextResponse.json(
        { error: contactValidation.message },
        { status: 400 }
      );
    }

    if (isIllegalRequest(form.summary)) {
      return NextResponse.json({
        blocked: true,
        message:
          "요청하신 내용은 관련 법령에 따라 지원할 수 없습니다. 합법 범위 내에서 가능한 조사 방식으로 안내드릴 수 있습니다.",
        alternatives: [
          "공개 장소에서의 사실 확인",
          "법률 자문 연계",
          "증거 정리 및 진술 전략 코칭",
        ],
      });
    }

    const estimate = estimatePackages(form);
    const estimatedDuration = formatWeeks(estimate.weeks);

    const userAgent = request.headers.get("user-agent");
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      const { prisma } = await import("@/lib/prisma");
      await prisma.intakeSubmission.create({
        data: {
          purpose: form.purpose,
          region: form.region,
          startPreference: form.startPreference ?? null,
          summary: form.summary,
          reviewSummary,
          selectedPackage: form.selectedPackage,
          contact: form.contact,
          messages,
          estimate,
          referenceId: estimate.referenceId,
          userAgent: userAgent ?? undefined,
          ipAddress: ipAddress ?? undefined,
        },
      });

      return NextResponse.json({
        fallback: true,
        estimate,
      });
    }

    const systemPrompt =
      "너는 탐정케이의 상담 플래너다. 사용자의 상황에 대해 짧게 공감한 뒤 안내한다. " +
      "아래 제공된 추정 가격 범위를 사용해 최종 안내 문구와 패키지 요약을 만든다. " +
      "불법 요청은 거절하고 합법적 대안을 제시한다. " +
      "출력은 반드시 JSON 하나로만 반환한다. " +
      "형식: { summary, recommendation, packages: [{ name, priceRange, unit, description, features }], disclaimer }. " +
      "summary는 2~3문장 한국어로 간결하게 작성한다.";

    const userContent = `조사 목적: ${form.purpose}\n지역: ${form.region}\n예상 기간: ${estimatedDuration}\n요약: ${form.summary}\n\n추정 가격 범위:\n${estimate.packages
      .map((pkg) =>
        `${pkg.name}: ${formatRange(pkg.min, pkg.max)}${
          pkg.unit === "week" ? "/주" : ""
        }`
      )
      .join("\n")}\n추천 패키지: ${estimate.recommended}\n참조번호: ${estimate.referenceId}`;

    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent },
        ],
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json({ error: "OpenAI API 오류", detail }, { status: 500 });
    }

    const data = await response.json();
    const text =
      data?.output?.[0]?.content?.[0]?.text ??
      JSON.stringify({
        summary: "상담 내용을 바탕으로 예상 패키지를 정리했습니다.",
        recommendation: estimate.recommended,
        packages: estimate.packages.map((pkg) => ({
          name: pkg.name,
          priceRange: formatRange(pkg.min, pkg.max),
          unit: pkg.unit === "week" ? "/주" : "",
          description: pkg.description,
          features: pkg.features,
        })),
        disclaimer: estimate.disclaimer,
      });

    let plan;
    try {
      plan = JSON.parse(text);
    } catch {
      plan = {
        summary: text,
        recommendation: estimate.recommended,
        packages: estimate.packages.map((pkg) => ({
          name: pkg.name,
          priceRange: formatRange(pkg.min, pkg.max),
          unit: pkg.unit === "week" ? "/주" : "",
          description: pkg.description,
          features: pkg.features,
        })),
        disclaimer: estimate.disclaimer,
      };
    }

    const { prisma } = await import("@/lib/prisma");
    const saved = await prisma.intakeSubmission.create({
      data: {
        purpose: form.purpose,
        region: form.region,
        startPreference: form.startPreference ?? null,
        summary: form.summary,
        reviewSummary,
        selectedPackage: form.selectedPackage,
        contact: form.contact,
        messages,
        estimate,
        plan,
        referenceId: estimate.referenceId,
        userAgent: userAgent ?? undefined,
        ipAddress: ipAddress ?? undefined,
      },
    });

    return NextResponse.json({
      referenceId: estimate.referenceId,
      weeks: estimate.weeks,
      estimatedDuration,
      plan,
      saved: Boolean(saved?.id),
    });
  } catch (error) {
    console.error("[api/intake] submit failed:", error);
    const detail =
      error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다.", detail },
      { status: 500 }
    );
  }
}
