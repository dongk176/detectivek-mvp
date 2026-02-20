"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import styles from "./variant-one.module.css";

type VariantOneClientProps = {
  consultationCount: number;
};

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "베이직 플랜",
    subtitle: "기초 사실 확인 및 단순 조사",
    price: "250,000원",
    unit: "/ 건",
    features: ["기초 데이터 조회", "1일 이내 결과 통보", "전화 상담 지원"],
  },
  {
    name: "스탠다드 플랜",
    subtitle: "심층 분석 및 현장 조사",
    price: "490,000원",
    unit: "/ 건",
    features: [
      "전담 요원 2인 배정",
      "현장 채증 및 보고서",
      "법률 자문 1회 포함",
      "3일 집중 케어",
    ],
    popular: true,
  },
  {
    name: "프리미엄 플랜",
    subtitle: "기업형 리스크 관리 및 장기 프로젝트",
    price: "790,000원",
    unit: "/ 건",
    features: ["VIP 전담팀 구성", "디지털 포렌식 정밀 분석", "24시간 실시간 모니터링"],
  },
];

const PROCESS_STEPS = [
  {
    icon: "description",
    title: "상담 신청",
    body: "익명성이 보장된 채널을 통해 초기 상담을 진행합니다.",
  },
  {
    icon: "gavel",
    title: "분석 및 계약",
    body: "상황 분석 후 적합한 솔루션 제안 및 정식 계약을 체결합니다.",
  },
  {
    icon: "badge",
    title: "전담팀 배정",
    body: "해당 분야 전문 탐정으로 구성된 전담 TF팀을 배정합니다.",
  },
  {
    icon: "search",
    title: "정밀 조사 착수",
    body: "현장 탐문, 정보 수집, 디지털 포렌식 등 실무 조사를 시작합니다.",
  },
  {
    icon: "photo_camera",
    title: "증거 확보",
    body: "법적 효력이 있는 핵심 증거와 자료를 체계적으로 채증합니다.",
  },
  {
    icon: "assignment",
    title: "결과 보고",
    body: "최종 결과 보고서를 전달하고 사후 법적 대응 자문을 제공합니다.",
  },
] as const;

export default function VariantOneClient({ consultationCount }: VariantOneClientProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sampleToast, setSampleToast] = useState(false);

  const openModal = useMemo(() => selectedPlan !== null, [selectedPlan]);
  const displayCount = new Intl.NumberFormat("ko-KR").format(consultationCount);

  useEffect(() => {
    if (!openModal) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [openModal]);

  useEffect(() => {
    if (!sampleToast) return;
    const t = window.setTimeout(() => setSampleToast(false), 2200);
    return () => window.clearTimeout(t);
  }, [sampleToast]);

  const closeModal = () => {
    setSelectedPlan(null);
    setPhone("");
    setSituation("");
    setSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <span className="material-symbols-outlined">policy</span>
              <strong>탐정케이</strong>
            </div>
            <nav className={styles.nav}>
              <a href="#process">진행 방식</a>
              <a href="#services">패키지</a>
              <a href="#pricing">가격</a>
              <a href="#legality">합법 기준</a>
            </nav>
            <div className={styles.headerActions}>
              <Link href="/consultation" className={styles.primaryBtn}>
                익명 상담 시작
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.wrap}>
            <div className={styles.heroGrid}>
              <div className={styles.heroIntro}>
                <div className={styles.badge}>
                  <span className="material-symbols-outlined">verified_user</span>
                  공인 탐정 면허 보유 · 법적 효력 보장
                </div>
                <h1>
                  합법 절차로, <br />
                  <span>익명 상담부터 시작</span>
                </h1>
                <p>
                  투명한 가격과 합법 기준으로 조사를 진행합니다.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/consultation" className={styles.primaryBtnLarge}>
                    익명 상담 시작
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <button
                    type="button"
                    className={styles.ghostBtnLarge}
                    onClick={() => setSampleToast(true)}
                  >
                    보고서 샘플 보기
                    <span className="material-symbols-outlined">description</span>
                  </button>
                </div>
                {sampleToast ? <div className={styles.toast}>상담 후 확인하실 수 있습니다</div> : null}
              </div>
              <div className={styles.metricStack}>
                <article className={styles.metricCard}>
                  <div className={styles.metricIconBlue}>
                    <span className="material-symbols-outlined">forum</span>
                  </div>
                  <div>
                    <p>누적 상담 건수</p>
                    <h3>{displayCount}건+</h3>
                  </div>
                </article>
                <article className={styles.metricCard}>
                  <div className={styles.metricIconGreen}>
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <div>
                    <p>법률 파트너</p>
                    <h3>법률사무소 현명</h3>
                  </div>
                </article>
                <article className={styles.metricCard}>
                  <div className={styles.metricIconPurple}>
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p>신속 착수</p>
                    <h3>24시간 내 시작</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.toneDark}`} id="services">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>업계의 문제를 해결합니다</h2>
              <p>
                기존 조사 서비스의 불투명함을 걷어내고, 예측 가능한 절차와 합법 기준으로
                다시 설계했습니다.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {[
                ["sell", "고정 요금제", "숨겨진 비용 없이 패키지 기준으로 명확하게 안내합니다."],
                ["center_focus_strong", "명확한 범위", "조사 범위와 목표를 사전에 합의하여 추가 비용과 혼선을 줄입니다."],
                ["policy", "100% 합법", "법원에서 인정되는 절차만 준수해 증거를 확보합니다."],
                ["visibility", "전 과정 투명", "보안 포털을 통해 진행 상황을 실시간으로 공유합니다."],
              ].map(([icon, title, desc]) => (
                <article className={styles.card} key={title}>
                  <div className={styles.cardIcon}>
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.sectionWhite} ${styles.toneMid}`} id="process">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>6단계 정밀 프로세스</h2>
            </div>
            <div className={styles.processTimeline}>
              <div className={styles.processLine} aria-hidden="true" />
              {PROCESS_STEPS.map((step, index) => (
                <article
                  className={styles.processStep}
                  key={step.title}
                  style={{ "--step-delay": `${index * 0.6}s` } as CSSProperties}
                >
                  <div className={styles.processMarker} aria-hidden="true">
                    <div className={styles.processDot}>{index + 1}</div>
                  </div>
                  <div className={styles.processContent}>
                    <div className={styles.processHeading}>
                      <div className={styles.processIcon}>
                        <span className="material-symbols-outlined">{step.icon}</span>
                      </div>
                      <h3>{step.title}</h3>
                    </div>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.toneDarkAlt}`} id="pricing">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>투명한 정찰제 가격</h2>
              <p>추가 비용 없는 정직한 견적으로 신뢰를 더합니다.</p>
            </div>
            <div className={styles.pricingGrid}>
              {PLANS.map((plan) => (
                <article className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`} key={plan.name}>
                  {plan.popular ? <span className={styles.popularTag}>인기 상품</span> : null}
                  <h3>{plan.name}</h3>
                  <p className={styles.planSub}>{plan.subtitle}</p>
                  <p className={styles.planPrice}>
                    {plan.price}
                    <small>{plan.unit}</small>
                  </p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="material-symbols-outlined">check</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={plan.popular ? styles.primaryWide : styles.outlineWide}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    견적 요청하기
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.legalSection} id="legality">
          <div className={styles.wrap}>
            <div className={styles.legalCard}>
              <div>
                <h2>완벽한 비밀 보장 및 안전한 보고서</h2>
                <p>
                  탐정케이의 모든 보고서는 군사 등급의 암호화 기술로 보호됩니다. 의뢰인
                  본인 외에는 누구도 열람할 수 없으며, 전달 후 데이터는 영구 삭제됩니다.
                </p>
                <ul>
                  <li>AES-256 비트 암호화 보고서</li>
                  <li>열람 후 자동 파기 시스템</li>
                  <li>위변조 방지 디지털 서명</li>
                </ul>
              </div>
              <div className={styles.fileMock}>
                <strong>보안 보고서.pdf</strong>
                <p>CONFIDENTIAL</p>
                <button type="button">열람하기</button>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.toneMidAlt}`}>
          <div className={styles.faqWrap}>
            <h2>자주 묻는 질문 (FAQ)</h2>
            <div className={styles.faq}>
              {[
                [
                  "상담 내용은 정말 100% 비밀이 보장되나요?",
                  "네, 절대적으로 보장됩니다. 탐정케이는 의뢰인의 익명성을 최우선으로 하며 상담 기록은 요청 시 즉시 파기됩니다.",
                ],
                [
                  "조사 비용은 어떻게 산정되나요?",
                  "투입 인원, 소요 시간, 장비 사용 여부를 종합해 산정하며 사전 협의 없이 추가 비용을 청구하지 않습니다.",
                ],
                [
                  "증거 자료는 법적 효력이 있나요?",
                  "합법적 절차로 수집된 증거는 법적 효력을 가질 수 있으며 법률 전문가와 함께 적법성을 점검합니다.",
                ],
                [
                  "조사 기간은 얼마나 걸리나요?",
                  "간단한 사안은 3~5일, 심층 조사는 1~2주가 일반적입니다.",
                ],
              ].map(([q, a], index) => (
                <details key={q} open={index === 0}>
                  <summary>
                    {q}
                    <span className="material-symbols-outlined">expand_more</span>
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.wrap}>
            <h2>안전한 일상을 되찾으세요</h2>
            <p>보안이 유지되는 안전한 서버로 연결됩니다.</p>
            <div className={styles.ctaActions}>
              <Link href="/consultation" className={styles.ctaLight}>
                지금 바로 상담 예약
              </Link>
              <button type="button" className={styles.ctaGhost}>
                카카오톡 문의하기
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.brand}>
                <span className="material-symbols-outlined">policy</span>
                <strong>탐정케이</strong>
              </div>
              <p>합법적인 절차와 기술로 고객의 권익을 보호합니다.</p>
            </div>
            <div>
              <h5>서비스 안내</h5>
              <a href="#">가정 문제 해결</a>
              <a href="#">기업 보안 솔루션</a>
              <a href="#">디지털 포렌식</a>
            </div>
            <div>
              <h5>고객 지원</h5>
              <a href="#">자주 묻는 질문</a>
              <a href="#">비밀 보장 정책</a>
              <a href="#">개인정보처리방침</a>
            </div>
            <div>
              <h5>24시 상담 센터</h5>
              <p>02-1234-5678</p>
              <p>help@detectivek.kr</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 탐정케이. All rights reserved.</p>
            <div>
              <a href="#">이용약관</a>
              <a href="#">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>

      <Link href="/consultation" className={styles.floatingConsultBtn} aria-label="상담 요청 페이지로 이동">
        <span className={`material-symbols-outlined ${styles.floatingConsultIcon}`}>support_agent</span>
        <span className={styles.floatingConsultText}>
          <strong>상담 요청</strong>
          <small>24시간 빠른 연결</small>
        </span>
      </Link>

      {openModal ? (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.overlayBack} onClick={closeModal} />
          <div className={styles.modal}>
            <div className={styles.modalHead}>
              <h3>{selectedPlan} 견적 요청</h3>
              <button type="button" onClick={closeModal}>
                닫기
              </button>
            </div>
            {!submitted ? (
              <div className={styles.modalBody}>
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
                  className={styles.primaryWide}
                  disabled={!phone.trim() || !situation.trim()}
                  onClick={() => setSubmitted(true)}
                >
                  문의 남기기
                </button>
              </div>
            ) : (
              <div className={styles.modalDone}>
                <strong>문의가 접수되었습니다.</strong>
                <p>남겨주신 연락처로 빠르게 안내드리겠습니다.</p>
                <button type="button" className={styles.primaryWide} onClick={closeModal}>
                  확인
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
