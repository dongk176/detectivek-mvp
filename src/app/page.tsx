import CountUpNumber from "./components/CountUpNumber";
import ConsultationLink from "./components/ConsultationLink";
import PricingSection from "./components/PricingSection";
import SampleReportButton from "./components/SampleReportButton";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  let consultationVisitorCount = 150;
  try {
    consultationVisitorCount = await prisma.consultationVisit.count();
  } catch {
    consultationVisitorCount = 150;
  }

  const displayCount = Math.max(1, consultationVisitorCount);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            <span className="logo-mark" aria-hidden="true">
              <span className="material-symbols-outlined">local_police</span>
            </span>
            탐정케이
          </a>
          <nav className="nav">
            <a href="#process">진행 방식</a>
            <a href="#packages">패키지</a>
            <a href="#pricing">가격</a>
            <a href="#legal">합법 기준</a>
          </nav>
          <div className="header-cta">
            <ConsultationLink className="cta-primary">
              익명 상담 시작
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </ConsultationLink>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="pulse" aria-hidden="true" />
                신규 의뢰 접수 중
              </div>
              <h1>
                합법 절차로, <br />
                <span className="hero-highlight">익명 상담부터 시작</span>
              </h1>
              <p className="hero-desc">
                투명한 가격과 합법 기준으로 조사를 진행합니다. 탐정케이는
                기록 가능한 증빙으로 진실을 지켜드립니다.
              </p>
              <div className="hero-actions">
                <ConsultationLink className="cta-primary">
                  상담 시작
                </ConsultationLink>
                <SampleReportButton className="cta-secondary" />
              </div>
              <div className="hero-trust">
                <div>
                  <span className="material-symbols-outlined">gavel</span>
                  <strong>합법 절차</strong>
                </div>
                <div>
                  <span className="material-symbols-outlined">payments</span>
                  <strong>가격 투명성</strong>
                </div>
                <div>
                  <span className="material-symbols-outlined">verified</span>
                  <strong>표준 보고서</strong>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-media-stack" aria-label="핵심 지표 카드">
                <article className="hero-metric-card">
                  <div className="hero-metric-icon blue">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div className="hero-metric-content">
                    <p>신뢰의 증거</p>
                    <h3>
                      누적 상담 고객{" "}
                      <CountUpNumber end={displayCount} suffix="명" />
                    </h3>
                  </div>
                </article>
                <article className="hero-metric-card">
                  <div className="hero-metric-icon indigo">
                    <span className="material-symbols-outlined">balance</span>
                  </div>
                  <div className="hero-metric-content">
                    <p>제휴 법무 파트너</p>
                    <h3>법률사무소 현명</h3>
                  </div>
                </article>
                <article className="hero-metric-card">
                  <div className="hero-metric-icon green">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <div className="hero-metric-content">
                    <p>신속한 착수</p>
                    <h3>계약 후 24시간 내 조사 시작</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="why-us">
          <div className="container">
            <div className="section-head center">
              <h2>업계의 문제를 해결합니다</h2>
              <p>
                기존 조사 서비스의 불투명함을 걷어내고, 예측 가능한 절차와
                합법 기준으로 다시 설계했습니다.
              </p>
            </div>
            <div className="grid cards">
              <article>
                <span className="icon-box">
                  <span className="material-symbols-outlined">sell</span>
                </span>
                <h3>고정 요금제</h3>
                <p>숨겨진 비용 없이 패키지 기준으로 명확하게 안내합니다.</p>
              </article>
              <article>
                <span className="icon-box">
                  <span className="material-symbols-outlined">ads_click</span>
                </span>
                <h3>명확한 범위</h3>
                <p>조사 범위와 목표를 사전에 합의해 혼선과 추가 비용을 줄입니다.</p>
              </article>
              <article>
                <span className="icon-box">
                  <span className="material-symbols-outlined">policy</span>
                </span>
                <h3>100% 합법</h3>
                <p>법원에서 인정되는 절차만 준수해 증거를 확보합니다.</p>
              </article>
              <article>
                <span className="icon-box">
                  <span className="material-symbols-outlined">visibility</span>
                </span>
                <h3>전 과정 투명</h3>
                <p>보안 포털을 통해 진행 상황을 실시간으로 공유합니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="section-head">
              <h2>표준화된 진행 과정</h2>
              <p>첫 익명 상담부터 최종 보고서까지 안전하게 관리합니다.</p>
            </div>
            <div className="timeline">
              <div className="timeline-line" aria-hidden="true" />
              <div className="timeline-step">
                <div className="step-circle active">1</div>
                <div>
                  <h4>상담</h4>
                  <span>익명·보안 채널</span>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-circle">2</div>
                <div>
                  <h4>전략 수립</h4>
                  <span>합법성 검토</span>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-circle">3</div>
                <div>
                  <h4>계약</h4>
                  <span>전자 서명</span>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-circle">4</div>
                <div>
                  <h4>조사</h4>
                  <span>현장·디지털</span>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-circle">5</div>
                <div>
                  <h4>분석</h4>
                  <span>증거 필터링</span>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-circle">6</div>
                <div>
                  <h4>보고</h4>
                  <span>최종 전달</span>
                </div>
              </div>
            </div>

            <div className="timeline-mobile">
              <div className="timeline-mobile-item">
                <div className="mobile-circle">1</div>
                <div>
                  <h4>상담</h4>
                  <p>익명 상담 후 보안 채널로 초기 정보 확인.</p>
                </div>
              </div>
              <div className="timeline-mobile-item">
                <div className="mobile-circle">2</div>
                <div>
                  <h4>전략 수립</h4>
                  <p>조사 범위와 합법 기준을 확정합니다.</p>
                </div>
              </div>
              <div className="timeline-mobile-item">
                <div className="mobile-circle">3</div>
                <div>
                  <h4>조사 및 보고</h4>
                  <p>계약, 조사, 분석, 보고까지 표준 절차로 관리합니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PricingSection />

        <section className="section">
          <div className="container split">
            <div>
              <h2>결과물을 직접 확인하세요</h2>
              <p>
                약속만 하지 않습니다. 법적 기준에 맞춘 전문 보고서를 제공합니다.
              </p>
              <div className="feature-list">
                <div>
                  <span className="icon-box">
                    <span className="material-symbols-outlined">description</span>
                  </span>
                  <div>
                    <h4>상세 PDF 보고서</h4>
                    <p>시간순 정리, 핵심 요약, 종합 분석 제공.</p>
                  </div>
                </div>
                <div>
                  <span className="icon-box">
                    <span className="material-symbols-outlined">folder_zip</span>
                  </span>
                  <div>
                    <h4>정리된 증거 파일</h4>
                    <p>사진, 영상, 로그를 날짜별로 정리합니다.</p>
                  </div>
                </div>
                <div>
                  <span className="icon-box">
                    <span className="material-symbols-outlined">lock_clock</span>
                  </span>
                  <div>
                    <h4>보안 전달</h4>
                    <p>암호화 링크로 제공하며 7일 후 자동 만료됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mockup">
              <div className="mockup-frame">
                <div className="mockup-header">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mockup-body">
                  <div className="line short" />
                  <div className="line" />
                  <div className="line" />
                  <div className="line medium" />
                  <div className="grid-two">
                    <div />
                    <div />
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                </div>
                <div className="mockup-lock">
                  <span className="material-symbols-outlined">visibility_off</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="faq">
          <div className="container narrow">
            <div className="section-head center">
              <h2>자주 묻는 질문</h2>
            </div>
            <div className="faq">
              <details>
                <summary>
                  사설 조사 의뢰는 합법인가요?
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <p>
                  개인정보보호법 등 관련 법령을 준수하는 범위 내에서만 진행합니다.
                  불법 수단은 사용하지 않습니다.
                </p>
              </details>
              <details>
                <summary>
                  익명성은 어떻게 보장되나요?
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <p>
                  이중 보안 프로토콜을 적용해 의뢰자 정보는 전담 매니저만
                  접근합니다. 현장 조사에는 필요한 정보만 전달됩니다.
                </p>
              </details>
              <details>
                <summary>
                  결과가 없으면 어떻게 되나요?
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <p>
                  조사 결과가 없다는 사실 또한 중요한 결론입니다. 전문 인력과
                  자원 투입 비용이 포함됩니다.
                </p>
              </details>
              <details>
                <summary>
                  보고서는 법원에서 사용할 수 있나요?
                  <span className="material-symbols-outlined">expand_more</span>
                </summary>
                <p>
                  표준/프리미엄은 증거 기준에 맞춰 작성됩니다. 최종 활용은
                  법률 대리인의 전략에 따라 결정됩니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section legal" id="legal">
          <div className="container legal-inner">
            <div>
              <h2>안전·합법 가이드</h2>
              <p>
                탐정케이는 개인정보보호법, 위치정보법 등 관련 법령을 준수합니다.
                모든 조사는 사전 동의와 법률 검토를 바탕으로 진행됩니다.
              </p>
            </div>
            <div className="legal-card">
              <h3>합법성 확인 절차</h3>
              <ol>
                <li>의뢰 목적 및 조사 범위 검토</li>
                <li>법률 파트너 사전 검수</li>
                <li>조사 중 실시간 준수 체크</li>
                <li>최종 보고서 법률 검토</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="container center">
            <h2>상황의 진실이 필요하신가요?</h2>
            <p>
              100% 익명 상담으로 시작하세요. 부담 없이 사실 확인 전략을
              안내드립니다.
            </p>
            <ConsultationLink className="cta-primary">
              익명 상담 시작
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </ConsultationLink>
            <span className="cta-note">보안 연결 · 256비트 암호화 · 기록 미보관</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <span className="logo-mark" aria-hidden="true">
                <span className="material-symbols-outlined">local_police</span>
              </span>
              탐정케이
            </div>
            <p>합법·윤리 기준을 지키는 프라이빗 조사 전문 브랜드.</p>
          </div>
          <div>
            <h4>서비스</h4>
            <ul>
              <li>개인 신원 확인</li>
              <li>기업 리스크 조사</li>
              <li>증거 확보</li>
              <li>사이버 조사</li>
            </ul>
          </div>
          <div>
            <h4>회사</h4>
            <ul>
              <li>회사 소개</li>
              <li>법률 준수</li>
              <li>채용</li>
              <li>문의하기</li>
            </ul>
          </div>
          <div>
            <h4>법적 고지</h4>
            <p>
              탐정케이는 불법 해킹, 도청, 침입을 수행하지 않습니다. 모든 서비스는
              기밀로 진행됩니다.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 탐정케이. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </footer>
    </>
  );
}
