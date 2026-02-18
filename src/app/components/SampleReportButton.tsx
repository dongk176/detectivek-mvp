"use client";

import { useEffect, useState } from "react";

type SampleReportButtonProps = {
  className?: string;
};

export default function SampleReportButton({ className }: SampleReportButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setOpen(false), 2200);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <div className="sample-report-wrap">
      <button
        className={className}
        type="button"
        onClick={() => setOpen(true)}
      >
        샘플 보고서 보기
      </button>
      {open && (
        <div className="sample-report-toast" role="status" aria-live="polite">
          상담 후 확인하실 수 있습니다
        </div>
      )}
    </div>
  );
}
