import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const userAgent = request.headers.get("user-agent");
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

    await prisma.consultationVisit.create({
      data: {
        userAgent: userAgent ?? undefined,
        ipAddress: ipAddress ?? undefined,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/consultation-visit] failed:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "방문 기록 저장에 실패했습니다.",
      },
      { status: 500 }
    );
  }
}
