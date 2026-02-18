"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ConsultationLinkProps = {
  className?: string;
  children: ReactNode;
};

export default function ConsultationLink({
  className,
  children,
}: ConsultationLinkProps) {
  return <Link className={className} href="/consultation">{children}</Link>;
}
