export type InvestigationPurpose =
  | "법정 제출용"
  | "관계 회복 목적"
  | "사실 확인"
  | "기타";

export type IntakeStep = 1 | 2 | 3 | 4;

export interface IntakeForm {
  purpose: InvestigationPurpose | "";
  region: string;
  duration?: string;
  startPreference?: string;
  summary: string;
}

export interface IntakeValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof IntakeForm, string>>;
}

export const ILLEGAL_KEYWORDS = [
  "해킹",
  "위치 추적",
  "gps",
  "도청",
  "감청",
  "몰래",
  "불법",
  "계정 탈취",
  "카톡",
  "메시지 해킹",
  "휴대폰 해킹",
  "침입",
];

export function isIllegalRequest(text: string) {
  const lowered = text.toLowerCase();
  return ILLEGAL_KEYWORDS.some((keyword) => lowered.includes(keyword));
}

export function validateIntake(form: IntakeForm): IntakeValidationResult {
  const errors: IntakeValidationResult["errors"] = {};

  if (!form.purpose) {
    errors.purpose = "조사 목적을 선택해 주세요.";
  }

  if (!form.region.trim()) {
    errors.region = "지역을 입력해 주세요.";
  }

  if (!form.summary.trim()) {
    errors.summary = "상황 요약을 입력해 주세요.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
