"use client";

import { useState } from "react";

const tabs = [
  {
    id: "step-1",
    title: "01 상담/비밀계약",
    body: "의뢰 목적과 필요 범위를 정의하고 계약서에 명시합니다.",
  },
  {
    id: "step-2",
    title: "02 조사 설계",
    body: "합법 범위 내에서 최적의 접근과 일정을 설계합니다.",
  },
  {
    id: "step-3",
    title: "03 현장 실행",
    body: "팀별로 책임을 나누어 진행하고 중간 결과를 공유합니다.",
  },
  {
    id: "step-4",
    title: "04 증빙 전달",
    body: "증거를 정리해 전달하고 안전한 보관/폐기를 진행합니다.",
  },
];

export default function ProcessTabs() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  return (
    <div className="process-tabs">
      <div className="tab-list" role="tablist" aria-label="진행 방식">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={tab.id === activeId}
            className={tab.id === activeId ? "tab active" : "tab"}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        <h3>{activeTab.title}</h3>
        <p>{activeTab.body}</p>
      </div>
    </div>
  );
}
