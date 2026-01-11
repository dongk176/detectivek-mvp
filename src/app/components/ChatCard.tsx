"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatCard() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const [showConsultForm, setShowConsultForm] = useState(false);
  const [consultName, setConsultName] = useState("");
  const [consultPhone, setConsultPhone] = useState("");
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultError, setConsultError] = useState("");
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const hasMessages = messages.length > 0;
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const showConsultCta = messages.length >= 12;

  useEffect(() => {
    if (!bodyRef.current) return;
    requestAnimationFrame(() => {
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
    });
  }, [messages, isLoading]);

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isLoading || showConsultCta) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await response.json();
      const reply =
        response.ok && data.reply
          ? data.reply
          : "잠시 후 다시 시도해주세요.";

      setMessages([...nextMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages([
        ...nextMessages,
        { role: "assistant", content: "네트워크 오류가 발생했습니다." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    setInput("");
    setIsLoading(false);
    setShowConsultForm(false);
    setConsultName("");
    setConsultPhone("");
    setConsultSubmitted(false);
    setConsultError("");
    setShowSuccessOverlay(false);
  };

  const handleConsultSubmit = () => {
    if (!consultName.trim() || !consultPhone.trim()) {
      setConsultError("성함과 전화번호를 모두 입력해주세요.");
      return;
    }

    setConsultSubmitted(true);
    setConsultError("");
    setShowConsultForm(false);
    setShowSuccessOverlay(true);
  };


  return (
    <div className="chat-shell">
      <div className="hero-card chat-card">
        <div className="chat-content">
          <div className="chat-header">
            <h2>실시간 상담</h2>
            <button className="chat-clear-btn" type="button" onClick={handleClear}>
              대화 내용 삭제
            </button>
          </div>
        {hasMessages ? (
          <>
            <div className="chat-body" aria-live="polite" ref={bodyRef}>
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`chat-bubble ${
                    message.role === "user" ? "outbound" : "inbound"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isLoading ? (
                <div className="chat-bubble inbound typing" aria-label="응답 중">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : null}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder={
                  showConsultCta ? "지금 무료로 상담 받아보세요." : "메시지를 입력하세요"
                }
                value={input}
                disabled={showConsultCta}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !isComposing) {
                    event.preventDefault();
                    sendMessage(input);
                  }
                }}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
              />
              <button
                className="cta small"
                type="button"
                disabled={showConsultCta}
                onClick={() => sendMessage(input)}
              >
                보내기
              </button>
            </div>
          </>
        ) : (
          <div className="chat-empty">
            <p>AI와 함께 익명으로 안전하게 상담받아보세요.</p>
            <span>대화내용은 절대 저장되지 않습니다.</span>
            <div className="chat-quick">
              {[
                "가격 안내",
                "외도 의심",
                "스토킹·협박",
                "사기 의심",
                "조사 가능 범위",
                "증거 수집 문의",
                "상담 절차 안내",
                "익명 상담 가능?",
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="chat-chip"
                  onClick={() => sendMessage(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
      {showConsultCta ? (
        <div className="chat-consult">
          <div className="chat-consult-actions">
            <button
              className="cta"
              type="button"
              onClick={() => setShowConsultForm(true)}
            >
              무료 상담 신청하기
            </button>
            <button className="ghost" type="button" onClick={handleClear}>
              대화 내용 삭제
            </button>
          </div>
          {showConsultForm ? (
            <div className="consult-overlay" role="dialog" aria-modal="true">
              <div className="consult-modal">
                <div className="consult-modal-header">
                  <strong>상담 신청 정보 입력</strong>
                  <button
                    className="ghost"
                    type="button"
                    onClick={() => setShowConsultForm(false)}
                  >
                    닫기
                  </button>
                </div>
                <form
                  className={`consult-form ${
                    consultSubmitted ? "is-submitted" : ""
                  }`}
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleConsultSubmit();
                  }}
                >
                  <label>
                    성함
                    <input
                      type="text"
                      value={consultName}
                      onChange={(event) => setConsultName(event.target.value)}
                      placeholder="이름을 입력하세요"
                      disabled={consultSubmitted}
                    />
                  </label>
                  <label>
                    전화번호
                    <input
                      type="tel"
                      value={consultPhone}
                      onChange={(event) => setConsultPhone(event.target.value)}
                      placeholder="010-0000-0000"
                      disabled={consultSubmitted}
                    />
                  </label>
                  {consultError ? (
                    <p className="consult-error">{consultError}</p>
                  ) : null}
                  <button className="cta" type="submit" disabled={consultSubmitted}>
                    상담 신청하기
                  </button>
                  {consultSubmitted ? (
                    <div className="consult-success">
                      <strong>신청이 완료되었습니다.</strong>
                      <span>
                        입력하신 번호로 담당자가 확인 후 24시간 이내에 연락드립니다.
                      </span>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          ) : null}
          {showSuccessOverlay ? (
            <div className="consult-overlay" role="dialog" aria-modal="true">
              <div className="consult-modal">
                <div className="consult-modal-header">
                  <strong>신청이 완료되었습니다.</strong>
                </div>
                <p className="consult-success">
                  입력하신 번호로 담당자가 확인 후 24시간 이내에 연락드립니다.
                </p>
                <button
                  className="cta"
                  type="button"
                  onClick={() => setShowSuccessOverlay(false)}
                >
                  확인
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
