"use client";

import { useEffect, useState } from "react";

type CountUpNumberProps = {
  end: number;
  durationMs?: number;
  suffix?: string;
};

export default function CountUpNumber({
  end,
  durationMs = 1200,
  suffix = "",
}: CountUpNumberProps) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    let rafId = 0;
    const startValue = 1;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const next = Math.round(startValue + (end - startValue) * progress);
      setValue(next);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [end, durationMs]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
