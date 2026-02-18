import type { IntakeForm } from "./intakeSchema";

export type PackageTier = "베이직" | "스탠다드" | "프리미엄";

export interface PackageEstimate {
  name: PackageTier;
  min: number;
  max: number;
  unit: "case" | "week";
  description: string;
  features: string[];
}

export interface IntakeEstimate {
  referenceId: string;
  weeks: number;
  packages: PackageEstimate[];
  recommended: PackageTier;
  disclaimer: string;
}

const PERSONAL_PACKAGES: Omit<PackageEstimate, "min" | "max" | "unit">[] = [
  {
    name: "베이직",
    description: "간단한 사실 확인을 위한 기본 패키지",
    features: ["공공 기록 조회", "기본 배경 확인", "구두 보고"],
  },
  {
    name: "스탠다드",
    description: "대부분의 개인 사건에 맞춘 표준 조사",
    features: [
      "현장 조사 2일",
      "디지털 흔적 분석",
      "표준 PDF 보고서",
    ],
  },
  {
    name: "프리미엄",
    description: "복잡한 사건을 위한 심층 조사",
    features: ["전담 조사팀", "법률 연계 지원", "증거 패키지 제공"],
  },
];

const CORPORATE_PACKAGES: Omit<PackageEstimate, "min" | "max" | "unit">[] = [
  {
    name: "베이직",
    description: "단순 증거 수집 및 일일 보고",
    features: ["기본 증빙 확보", "일일 요약 리포트", "현장 잠복 제외"],
  },
  {
    name: "스탠다드",
    description: "전담 잠복 + 배경 조사 포함",
    features: ["전담 잠복 조사", "사진 증거 수집", "실시간 지원"],
  },
  {
    name: "프리미엄",
    description: "고난도 기업 리스크 조사",
    features: ["3인 전담팀", "법률 자문 포함", "우선 처리"],
  },
];

export function estimatePackages(form: IntakeForm): IntakeEstimate {
  const weeks = Math.max(1, estimateWeeks(form));
  const isCorporate = false;

  const baseRanges = isCorporate
    ? [
        { min: 1500000, max: 2000000 },
        { min: 3200000, max: 4200000 },
        { min: 5000000, max: 6500000 },
      ]
    : [
        { min: 250000, max: 490000 },
        { min: 790000, max: 1500000 },
        { min: 2000000, max: 3500000 },
      ];

  const multiplier = isCorporate ? weeks : Math.max(1, Math.round(weeks));
  const packages = (isCorporate ? CORPORATE_PACKAGES : PERSONAL_PACKAGES).map(
    (pkg, index) => ({
      ...pkg,
      min: baseRanges[index].min * multiplier,
      max: baseRanges[index].max * multiplier,
      unit: isCorporate ? "week" : "case",
    })
  );

  const recommended: PackageTier = weeks >= 2 ? "스탠다드" : "베이직";

  return {
    referenceId: `DK-${Math.floor(1000 + Math.random() * 9000)}`,
    weeks,
    packages,
    recommended,
    disclaimer:
      "최종 가격은 세부 범위 확정 후 변동될 수 있습니다.",
  };
}

export function formatRange(min: number, max: number) {
  const formatter = new Intl.NumberFormat("ko-KR");
  return `₩${formatter.format(min)} ~ ₩${formatter.format(max)}`;
}

export function parseDurationToWeeks(duration: string) {
  const normalized = duration.replace(/\n/g, " ").toLowerCase();
  const numberMatch = normalized.match(/(\d+(?:\.\d+)?)/);
  const value = numberMatch ? Number(numberMatch[1]) : 1;

  if (normalized.includes("일")) {
    return Math.max(1, Math.ceil(value / 7));
  }

  if (normalized.includes("개월") || normalized.includes("달")) {
    return Math.max(1, Math.ceil(value * 4));
  }

  return Math.max(1, Math.ceil(value));
}

export function estimateWeeks(form: IntakeForm) {
  const durationText = form.duration?.trim();
  if (durationText) {
    return parseDurationToWeeks(durationText);
  }

  const summary = form.summary ?? "";
  const normalized = summary.replace(/\n/g, " ").toLowerCase();
  const numberMatch = normalized.match(/(\d+(?:\.\d+)?)/);
  const value = numberMatch ? Number(numberMatch[1]) : undefined;

  if (value) {
    if (normalized.includes("일")) {
      return Math.max(1, Math.ceil(value / 7));
    }
    if (normalized.includes("개월") || normalized.includes("달")) {
      return Math.max(1, Math.ceil(value * 4));
    }
    if (normalized.includes("주")) {
      return Math.max(1, Math.ceil(value));
    }
  }

  return 1;
}

export function formatWeeks(weeks: number) {
  return `약 ${weeks}주`;
}
