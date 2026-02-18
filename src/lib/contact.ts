function toContactString(value: unknown) {
  if (typeof value === "string") return value;
  if (value == null) return "";
  return String(value);
}

export function normalizeContactPhone(value: unknown) {
  return toContactString(value).replace(/\D/g, "").slice(0, 11);
}

export function formatContactPhone(value: unknown) {
  const digits = normalizeContactPhone(value);

  if (!digits) {
    return "";
  }

  if (digits.startsWith("02")) {
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    if (digits.length <= 9) {
      return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
    }
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

export function isValidContactPhone(value: unknown) {
  const digits = normalizeContactPhone(value);

  if (!digits) return false;

  const mobile = /^01[016789]\d{7,8}$/;
  const seoul = /^02\d{7,8}$/;
  const area = /^0[3-9]\d{8,9}$/;

  return mobile.test(digits) || seoul.test(digits) || area.test(digits);
}

export function validateContactPhone(value: unknown) {
  const trimmed = toContactString(value).trim();
  if (!trimmed) {
    return {
      valid: false,
      message: "연락처를 입력해 주세요.",
    };
  }

  if (!isValidContactPhone(trimmed)) {
    return {
      valid: false,
      message: "연락처 형식을 확인해 주세요. (예: 010-1234-5678)",
    };
  }

  return {
    valid: true,
    message: "",
  };
}
