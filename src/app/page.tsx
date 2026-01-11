import ChatCard from "./components/ChatCard";
import ProcessTabs from "./components/ProcessTabs";

export default function Home() {
  return (
    <>
      <div className="bg-noise" aria-hidden="true" />
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            탐정케이
          </a>
          <nav className="nav">
            <a href="#services">서비스 소개</a>
            <a href="#pricing">가격</a>
            <a href="#process">진행 방식</a>
            <a href="#stories">사례/후기</a>
            <a href="#partners">검증된 파트너</a>
            <a href="#faq">FAQ</a>
            <a href="#legal">안전·합법 가이드</a>
          </nav>
          <div className="header-spacer" aria-hidden="true" />
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>신뢰로 시작해, 결과로 증명하는 탐정케이</h1>
              <p className="hero-desc">
                탐정케이는 사건의 복잡함보다 고객의 마음을 먼저 읽습니다. 의뢰부터
                증빙까지 한 팀이 책임지고, 매 단계에서 투명하게 공유합니다.
              </p>
              <div className="hero-actions">
                <button className="cta" type="button">
                  지금 무료 상담
                </button>
              </div>
              <div className="hero-trust">
                <div>
                  <strong>98%</strong>
                  <span>고객 재의뢰율</span>
                </div>
                <div>
                  <strong>24시간</strong>
                  <span>비밀 보호 체계</span>
                </div>
                <div>
                  <strong>국내 1,200+</strong>
                  <span>파트너 네트워크</span>
                </div>
              </div>
            </div>
            <ChatCard />
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head">
              <h2>서비스 소개</h2>
              <p>신뢰, 친근함, 그리고 증거 기반. 목적이 명확한 서비스만 제공합니다.</p>
            </div>
            <div className="grid cards">
              <article>
                <h3>기초 사실조사</h3>
                <p>배우자 동선과 기본 정황을 합법 범위 내에서 확인합니다.</p>
                <span>첫 판단을 위한 핵심 정보</span>
              </article>
              <article>
                <h3>표준 외도조사</h3>
                <p>반복 동선과 출입 여부를 확인해 정황을 명확히 정리합니다.</p>
                <span>사진/시간대 기록 제공</span>
              </article>
              <article>
                <h3>심층 외도 확증</h3>
                <p>필요 시 법률 연계까지 고려한 심층 증거 확보를 지원합니다.</p>
                <span>소송용 정리 패키지</span>
              </article>
              <article>
                <h3>안전·합법 가이드</h3>
                <p>조사 전 법적 범위를 설명하고 안전한 절차만 안내합니다.</p>
                <span>개인정보 보호 우선</span>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>가격</h2>
              <p>투명한 범위 안내, 정확한 견적은 상담 후 제안합니다.</p>
            </div>
            <div className="grid pricing">
              <article>
                <h3>패키지 A. 기초 사실조사 (BASIC)</h3>
                <p className="price">25만 ~ 49만원</p>
                <ul>
                  <li>배우자의 기본 동선 분석</li>
                  <li>주요 시간대 관찰 1회(2~3시간)</li>
                  <li>외부 촬영(공개된 장소)</li>
                  <li>차량 동승 여부 확인</li>
                  <li>기본 정황 보고서</li>
                  <li>기초 사실조사 보고서(PDF)</li>
                  <li>사진 3~5장 첨부</li>
                  <li>부정행위 의심 지표 분석</li>
                </ul>
                <button className="ghost" type="button">
                  문의하기
                </button>
              </article>
              <article className="highlight">
                <h3>패키지 B. 표준 외도조사 (STANDARD)</h3>
                <p className="price">79만 ~ 150만원</p>
                <ul>
                  <li>3일간 동선 추적 및 반복 관찰(각 2~4시간)</li>
                  <li>차량 동승, 식당/카페 출입 체크</li>
                  <li>호텔/모텔 출입 여부 확인</li>
                  <li>외도 상대 존재 여부 탐문</li>
                  <li>심층 정황 확보</li>
                  <li>카톡·결제내역 확보 가이드</li>
                  <li>전문 조사보고서 작성</li>
                  <li>외도 사실조사 보고서(사진 10~20장)</li>
                  <li>시간대별 행동기록</li>
                  <li>부정행위 가능성 분석(점수제)</li>
                  <li>위자료 소송 시 활용</li>
                </ul>
                <button className="cta" type="button">
                  가장 인기
                </button>
              </article>
              <article>
                <h3>패키지 C. 심층 외도 확증 패키지 (PREMIUM)</h3>
                <p className="price">200만 ~ 350만원</p>
                <ul>
                  <li>주 1주일 전담 배정</li>
                  <li>주요 요일 반복 미행</li>
                  <li>호텔 출입 2회 이상 확보</li>
                  <li>외도 상대 신원 파악(합법 범위 내)</li>
                  <li>증거 촬영 20~50장</li>
                  <li>통화 녹음 확보 가이드</li>
                  <li>변호사 연계(제휴 시)</li>
                  <li>진술 유도 전략 코칭</li>
                  <li>부정행위 확증 보고서(PDF + Word)</li>
                  <li>소송용 증거 정리 ZIP 파일</li>
                  <li>위자료 청구 전략 문서</li>
                  <li>법원 제출용 타임라인 제작</li>
                </ul>
                <button className="ghost" type="button">
                  문의하기
                </button>
              </article>
            </div>
            <div className="pricing-compare">
              <h3>패키지 포함 내용 비교</h3>
              <div className="compare-table" role="table" aria-label="패키지 비교">
                <div className="compare-row header" role="row">
                  <div role="columnheader">포함 항목</div>
                  <div role="columnheader">BASIC</div>
                  <div role="columnheader">STANDARD</div>
                  <div role="columnheader">PREMIUM</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">기본 동선 분석</div>
                  <div>O</div>
                  <div>O</div>
                  <div>O</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">반복 관찰(2~4시간)</div>
                  <div>X</div>
                  <div>O</div>
                  <div>O</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">호텔/모텔 출입 확인</div>
                  <div>X</div>
                  <div>O</div>
                  <div>O</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">상대 신원 파악</div>
                  <div>X</div>
                  <div>X</div>
                  <div>O</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">증거 촬영 수량</div>
                  <div>3~5장</div>
                  <div>10~20장</div>
                  <div>20~50장</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">소송용 증거 정리</div>
                  <div>X</div>
                  <div>O</div>
                  <div>O</div>
                </div>
                <div className="compare-row" role="row">
                  <div role="rowheader">법률 연계 지원</div>
                  <div>X</div>
                  <div>X</div>
                  <div>O</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="section-head">
              <h2>진행 방식</h2>
              <p>한 번에 이해되는 4단계. 모든 과정은 기록으로 남깁니다.</p>
            </div>
            <ProcessTabs />
          </div>
        </section>

        <section id="stories" className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>사례/후기</h2>
              <p>실제 의뢰인 피드백을 바탕으로 신뢰를 확인하세요.</p>
            </div>
            <div className="grid testimonials">
              <figure>
                <blockquote>
                  &quot;처음에는 걱정이 컸지만, 매일 공유되는 리포트로 마음이
                  놓였습니다. 마지막 증빙까지 깔끔했습니다.&quot;
                </blockquote>
                <figcaption>김OO / 개인 의뢰</figcaption>
              </figure>
              <figure>
                <blockquote>
                  &quot;기업 조사에 필요한 포인트를 정확히 짚어주셨고, 법무팀에서도
                  인정했습니다.&quot;
                </blockquote>
                <figcaption>박OO / 기업 담당</figcaption>
              </figure>
              <figure>
                <blockquote>
                  &quot;친절하고 빠른 대응 덕분에 상황을 정리할 수 있었습니다.&quot;
                </blockquote>
                <figcaption>이OO / 가족 의뢰</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="partners" className="section">
          <div className="container">
            <div className="section-head">
              <h2>검증된 파트너</h2>
              <p>법률, 보안, 데이터 분석 전문가가 함께합니다.</p>
            </div>
            <div className="partners">
              <div>법률 자문 파트너</div>
              <div>디지털 포렌식</div>
              <div>현장 보안</div>
              <div>데이터 분석</div>
              <div>국내 협력 네트워크</div>
            </div>
          </div>
        </section>

        <section id="faq" className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>FAQ</h2>
              <p>자주 묻는 질문을 미리 정리했습니다.</p>
            </div>
            <div className="grid faq">
              <details open>
                <summary>상담 내용은 안전하게 보호되나요?</summary>
                <p>모든 상담은 비밀 유지 계약서에 따라 진행되며 기록은 암호화됩니다.</p>
              </details>
              <details>
                <summary>합법적인 범위는 어떻게 확인하나요?</summary>
                <p>사건별 법률 자문을 통해 조사 범위를 사전에 확정합니다.</p>
              </details>
              <details>
                <summary>조사 기간은 얼마나 걸리나요?</summary>
                <p>기본 조사 7일, 집중 조사는 2~4주가 평균입니다.</p>
              </details>
            </div>
          </div>
        </section>

        <section id="legal" className="section">
          <div className="container legal">
            <div>
              <h2>안전·합법 가이드</h2>
              <p>
                탐정케이는 개인정보보호법, 위치정보법 등 관련 법령을 준수합니다. 모든
                조사는 사전 동의와 법률 검토를 바탕으로 진행됩니다.
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

        <section className="section callout">
          <div className="container callout-inner">
            <div>
              <h2>지금 바로, 조용히 시작하세요.</h2>
              <p>첫 상담은 무료입니다. 부담 없이 상황을 말씀해주세요.</p>
            </div>
            <button className="cta" type="button">
              상담 예약
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>탐정케이</strong>
            <p>서울시 강남구 · 24시간 상담 · 탐정업 등록</p>
          </div>
          <div>
            <span>CONTACT</span>
            <p>02-000-0000 · hello@detectivek.co.kr</p>
          </div>
        </div>
      </footer>
    </>
  );
}
