"use client";

import { useEffect, useMemo, useState } from "react";

type PackageItem = {
  name: string;
  desc: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

const PACKAGES: PackageItem[] = [
  {
    name: "기본",
    desc: "간단한 사실 확인을 위한 필수 패키지.",
    price: "₩25만원부터",
    features: ["공공 기록 조회", "기본 배경 확인", "구두 보고"],
  },
  {
    name: "표준",
    desc: "대부분의 개인 사건에 맞춘 표준 조사.",
    price: "₩49만원부터",
    features: ["기본 패키지 포함", "현장 조사 2일", "디지털 흔적 분석", "표준 PDF 보고서"],
    highlight: true,
  },
  {
    name: "프리미엄",
    desc: "기업 혹은 복잡한 사건을 위한 맞춤 설계.",
    price: "₩79만원부터",
    features: ["표준 패키지 포함", "무제한 현장 조사", "변호사 협업 포함", "법원 제출용 증거 패키지"],
  },
];

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const open = useMemo(() => selectedPackage !== null, [selectedPackage]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeModal = () => {
    setSelectedPackage(null);
    setPhone("");
    setSituation("");
    setSubmitted(false);
  };

  return (
    <section className="section section-alt" id="packages">
      <div className="container">
        <div className="section-head center">
          <h2>투명한 패키지 구성</h2>
          <p>필요한 수준에 맞춰 합리적인 선택을 하세요.</p>
        </div>
        <div className="grid pricing" id="pricing">
          {PACKAGES.map((pkg) => (
            <article
              className={`pricing-card ${pkg.highlight ? "highlight" : ""}`}
              key={pkg.name}
            >
              {pkg.highlight && <span className="tag">가장 인기</span>}
              <h3>{pkg.name}</h3>
              <p className="pricing-desc">{pkg.desc}</p>
              <p className="price">{pkg.price}</p>
              <ul>
                {pkg.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className={pkg.highlight ? "cta-primary" : "cta-outline"}
                type="button"
                onClick={() => setSelectedPackage(pkg.name)}
              >
                견적 문의
              </button>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="pricing-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="견적 문의 입력"
        >
          <div className="pricing-overlay-backdrop" onClick={closeModal} />
          <div className="pricing-overlay-panel">
            <div className="pricing-overlay-head">
              <h3>{selectedPackage} 패키지 견적 문의</h3>
              <button type="button" className="pricing-overlay-close" onClick={closeModal}>
                닫기
              </button>
            </div>

            {!submitted ? (
              <div className="pricing-overlay-form">
                <label>
                  전화번호
                  <input
                    type="tel"
                    placeholder="예: 010-1234-5678"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </label>
                <label>
                  현재 상황
                  <textarea
                    placeholder="상황을 간단히 적어주세요."
                    value={situation}
                    onChange={(event) => setSituation(event.target.value)}
                  />
                </label>
                <button
                  type="button"
                  className="cta-primary"
                  onClick={() => setSubmitted(true)}
                  disabled={!phone.trim() || !situation.trim()}
                >
                  문의 남기기
                </button>
              </div>
            ) : (
              <div className="pricing-overlay-done">
                <strong>문의가 접수되었습니다.</strong>
                <p>남겨주신 연락처로 빠르게 안내드리겠습니다.</p>
                <button type="button" className="cta-primary" onClick={closeModal}>
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
