"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { InvestigationPurpose, IntakeForm, IntakeStep } from "@/lib/intakeSchema";
import { isIllegalRequest, validateIntake } from "@/lib/intakeSchema";
import { formatContactPhone, validateContactPhone } from "@/lib/contact";

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
}

interface PlanPackage {
  name: string;
  priceRange: string;
  unit?: string;
  description: string;
  features?: string[];
}

const PURPOSE_OPTIONS: InvestigationPurpose[] = [
  "법정 제출용",
  "관계 회복 목적",
  "사실 확인",
  "기타",
];

const INITIAL_MESSAGE: ChatMessage = {
  id: "m-1",
  role: "assistant",
  content:
    "반갑습니다. 상담을 도와드리겠습니다. 이 채팅은 암호화됩니다.\n\n조사의 목적은 무엇인가요?",
};

const EMPTY_FORM: IntakeForm = {
  purpose: "",
  region: "",
  startPreference: "",
  summary: "",
};

export default function ConsultationClient() {
  const [step, setStep] = useState<IntakeStep>(1);
  const [form, setForm] = useState<IntakeForm>(EMPTY_FORM);
  const [summaryDraft, setSummaryDraft] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [contact, setContact] = useState("");
  const [contactTouched, setContactTouched] = useState(false);
  const [reviewSummary, setReviewSummary] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);

  const illegal = useMemo(() => isIllegalRequest(summaryDraft), [summaryDraft]);
  const validation = useMemo(() => validateIntake(form), [form]);
  const contactValidation = useMemo(() => validateContactPhone(contact), [contact]);

  const progressLabel = `4단계 중 ${step}단계`;

  const appendMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  };

  const appendAssistantMessage = (content: string, delay = 2400) => {
    setTyping(true);
    window.setTimeout(() => {
      appendMessage({
        id: `a-${Date.now()}`,
        role: "assistant",
        content,
      });
      setTyping(false);
    }, delay);
  };

  const handlePurposeSelect = (purpose: InvestigationPurpose) => {
    setForm((prev) => ({ ...prev, purpose }));
    appendMessage({
      id: `u-${Date.now()}`,
      role: "user",
      content: purpose,
    });
    appendAssistantMessage(
      "알겠습니다. 진행에 필요한 기본 정보만 확인하겠습니다. 조사 진행 지역(시/구)을 알려주세요.",
      2400
    );
    setStep(2);
  };

  const handleRegionDurationNext = () => {
    if (!form.region.trim()) {
      setError("지역을 입력해 주세요.");
      return;
    }
    setError(null);
    appendMessage({
      id: `u-${Date.now()}`,
      role: "user",
      content: form.startPreference
        ? `${form.region} · ${form.startPreference}`
        : form.region,
    });
    appendAssistantMessage(
      "상황을 간략히 요약해 주세요. 실명은 제외하고 작성하시면 됩니다.",
      2400
    );
    setStep(3);
  };

  const handleSummaryNext = () => {
    if (!summaryDraft.trim()) {
      setError("상황 요약을 입력해 주세요.");
      return;
    }
    if (illegal) {
      setError("위법 소지가 있는 요청은 상담을 진행할 수 없습니다.");
      return;
    }
    setError(null);
    const summaryText = summaryDraft;
    setForm((prev) => ({ ...prev, summary: summaryText }));
    setSummaryDraft("");
    setTyping(true);
    window.setTimeout(() => {
      const supportSummary = buildSupportSummary({
        purpose: form.purpose,
        region: form.region,
        startPreference: form.startPreference,
        summary: summaryText,
      });
      setReviewSummary(supportSummary);
      setTyping(false);
      setStep(4);
    }, 2400);
  };

  const buildSupportSummary = (data: {
    purpose: string;
    region: string;
    startPreference?: string;
    summary: string;
  }) => {
    const timing = data.startPreference ? `(${data.startPreference})` : "";
    const purposeLabel = data.purpose ? `${data.purpose} 조사` : "조사";
    return [
      `${data.region} 지역의 ${purposeLabel} 요청으로 확인했습니다. ${timing}`.trim(),
      "합법 범위 내에서 동선 확인, 공개 장소 관찰, 증거 정리 및 보고서 작성으로 지원 가능합니다.",
    ].join(" ");
  };

  const handleSubmit = async () => {
    setError(null);
    setSubmitted(false);
    setContactTouched(true);
    if (!validation.valid) {
      setError("필수 정보가 누락되었습니다.");
      return;
    }
    if (!selectedPackage) {
      setError("패키지를 선택해 주세요.");
      return;
    }
    if (!contactValidation.valid) {
      setError(contactValidation.message);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: {
            ...form,
            selectedPackage,
            contact,
          },
          reviewSummary,
          messages: messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        const detail =
          typeof data?.detail === "string" && data.detail.trim().length > 0
            ? ` (${data.detail})`
            : "";
        throw new Error((data?.error ?? "상담 요청에 실패했습니다.") + detail);
      }

      if (data?.blocked) {
        setError(data?.message ?? "해당 상담은 접수할 수 없습니다.");
        return;
      }

      if (data?.fallback && data?.estimate) {
        setSubmitted(true);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "상담 요청에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="intake">
      <header className="intake-header">
        <div className="intake-container header-inner">
          <Link className="logo" href="/">
            <span className="logo-mark" aria-hidden="true">
              <span className="material-symbols-outlined">search</span>
            </span>
            탐정케이
          </Link>
          <div className="intake-security">
            <span className="material-symbols-outlined">lock</span>
            보안 및 익명 보장
          </div>
        </div>
      </header>

      <main className="intake-main">
        <div className="intake-container intake-stack">
          <div className="intake-stepper">
            <div className="intake-stepper-track">
              {[1, 2, 3, 4].map((num) => (
                <div className="intake-step" key={num}>
                  <div
                    className={`step-circle ${step >= num ? "active" : ""}`}
                  >
                    {num}
                  </div>
                  <span>
                    {num === 1
                      ? "조사 목적"
                      : num === 2
                      ? "상세 정보"
                      : num === 3
                      ? "요약"
                      : "검토"}
                  </span>
                </div>
              ))}
            </div>
            <div className="step-label">{progressLabel}</div>
          </div>

          <section className="intake-chat">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`intake-message ${message.role}`}
              >
                <div className="intake-avatar">
                  <span className="material-symbols-outlined">
                    {message.role === "assistant" ? "support_agent" : "person"}
                  </span>
                </div>
                <div className="intake-bubble">
                  {message.content.split("\n").map((line, index) => (
                    <p key={`${message.id}-${index}`}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {typing && (
              <div className="intake-message assistant">
                <div className="intake-avatar">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <div className="intake-bubble typing">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
          </section>

          {step === 1 && (
            <section className="intake-panel">
              <h3>조사 목적을 선택해 주세요.</h3>
              <div className="intake-options">
                {PURPOSE_OPTIONS.map((option) => (
                  <button
                    key={option}
                    className={`pill ${form.purpose === option ? "active" : ""}`}
                    type="button"
                    onClick={() => handlePurposeSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {validation.errors.purpose && (
                <p className="intake-error">{validation.errors.purpose}</p>
              )}
            </section>
          )}

          {step === 2 && (
            <section className="intake-panel">
              <h3>조사 진행 지역을 알려주세요.</h3>
              <div className="intake-field-grid">
                <label>
                  주요 지역 (시/구)
                  <input
                    type="text"
                    placeholder="예: 서울특별시 강남구"
                    value={form.region}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        region: event.target.value,
                      }))
                    }
                  />
                </label>
                <div>
                  <span className="intake-label">시작 희망 시점</span>
                  <div className="intake-options">
                    {["최대한 빠르게", "1주일 뒤", "2주일 뒤"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={`pill ${form.startPreference === option ? "active" : ""}`}
                        onClick={() =>
                          setForm((prev) => ({ ...prev, startPreference: option }))
                        }
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="intake-actions">
                <button className="ghost" type="button" onClick={() => setStep(1)}>
                  이전
                </button>
                <button className="cta-primary" type="button" onClick={handleRegionDurationNext}>
                  다음
                </button>
              </div>
              {error && <p className="intake-error">{error}</p>}
            </section>
          )}

          {step === 3 && (
            <section className="intake-panel">
              <h3>상황을 요약해 주세요.</h3>
              <textarea
                placeholder="구체적이되, 현재 단계에서는 실명을 제외하고 작성해 주세요."
                value={summaryDraft}
                onChange={(event) =>
                  setSummaryDraft(event.target.value)
                }
              />
              {illegal && (
                <div className="intake-warning">
                  <div>
                    <strong>해당 요청은 지원할 수 없습니다.</strong>
                    <p>
                      위치 추적, 해킹, 도청 등 불법 행위는 진행하지 않습니다.
                      합법 범위 내의 조사 방식으로 안내드릴 수 있습니다.
                    </p>
                    <span>합법적 대안: 공개 장소 기록, 법률 자문 연계</span>
                  </div>
                </div>
              )}
              <div className="intake-actions">
                <button className="ghost" type="button" onClick={() => setStep(2)}>
                  이전
                </button>
                <button
                  className="cta-primary"
                  type="button"
                  onClick={handleSummaryNext}
                  disabled={illegal}
                >
                  다음
                </button>
              </div>
              {error && <p className="intake-error">{error}</p>}
            </section>
          )}

          {step === 4 && (
            <section className="intake-panel">
              <h3>요약 내용을 확인해 주세요.</h3>
              <div className="intake-review">
                <div>
                  <span>조사 목적</span>
                  <strong>{form.purpose}</strong>
                </div>
                <div>
                  <span>지역</span>
                  <strong>{form.region}</strong>
                </div>
                {form.startPreference && (
                  <div>
                    <span>시작 희망 시점</span>
                    <strong>{form.startPreference}</strong>
                  </div>
                )}
                <div className="summary">
                  <span>요약</span>
                  <p>{reviewSummary || form.summary}</p>
                </div>
              </div>
              <div className="intake-package-grid">
                {[
                  {
                    name: "BASIC",
                    price: "25만 ~ 49만원",
                    desc: "기초 사실조사",
                    details: [
                      "기본 동선 분석 + 1회 관찰(2~3시간)",
                      "공개 장소 촬영 및 차량 동승 확인",
                      "PDF 보고서 + 사진 3~5장 요약",
                    ],
                  },
                  {
                    name: "STANDARD",
                    price: "79만 ~ 150만원",
                    desc: "표준 외도조사",
                    highlight: true,
                    details: [
                      "3일 반복 관찰(각 2~4시간)",
                      "호텔/모텔 출입 및 상대 탐문",
                      "보고서 + 행동기록/가능성 분석",
                    ],
                  },
                  {
                    name: "PREMIUM",
                    price: "200만 ~ 350만원",
                    desc: "심층 외도 확증",
                    details: [
                      "주 1주일 전담 + 주요 요일 반복 미행",
                      "호텔 출입 확보 및 상대 신원 파악",
                      "증거 촬영 20~50장 + 진술/법률 연계",
                    ],
                  },
                ].map((pkg) => (
                  <article
                    key={pkg.name}
                    className={`pricing-card ${pkg.highlight ? "highlight" : ""} ${selectedPackage === pkg.name ? "selected" : ""}`}
                  >
                    {pkg.highlight && <span className="tag">추천</span>}
                    <h4>{pkg.desc}</h4>
                    <p className="price">{pkg.price}</p>
                    <ul className="pricing-detail">
                      {pkg.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={selectedPackage === pkg.name ? "cta-primary" : "cta-outline"}
                      onClick={() => setSelectedPackage(pkg.name)}
                    >
                      {selectedPackage === pkg.name ? "선택됨" : "이 패키지 선택"}
                    </button>
                  </article>
                ))}
              </div>
              <div className="intake-contact">
                <label>
                  연락처
                  <input
                    type="text"
                    placeholder="예: 010-1234-5678"
                    value={contact}
                    onChange={(event) => {
                      setContact(formatContactPhone(event.target.value));
                      if (error) setError(null);
                    }}
                    onBlur={() => setContactTouched(true)}
                  />
                </label>
                {contactTouched && !contactValidation.valid && (
                  <p className="intake-contact-validation">
                    {contactValidation.message}
                  </p>
                )}
                <p className="intake-contact-note">
                  연락처를 남겨주시면 담당자가 빠르게 연락드립니다.
                </p>
              </div>
              <div className="intake-actions">
                <button className="ghost" type="button" onClick={() => setStep(3)}>
                  이전
                </button>
                <button
                  className="cta-primary"
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "분석 중..." : "상담 제출하기"}
                </button>
              </div>
              {submitted && (
                <p className="intake-contact-note">
                  상담이 접수되었습니다. 담당자가 빠르게 연락드립니다.
                </p>
              )}
              {error && <p className="intake-error">{error}</p>}
            </section>
          )}
        </div>
      </main>

      <footer className="intake-footer">
        © 2026 탐정케이. 개인정보는 엄격하게 보호됩니다.
      </footer>
    </div>
  );
}
