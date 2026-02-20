import { prisma } from "@/lib/prisma";
import VariantOneClient from "./variant-one-client";

export const dynamic = "force-dynamic";

export default async function VariantOnePage() {
  let consultationVisitorCount = 12540;

  try {
    consultationVisitorCount = await prisma.consultationVisit.count();
  } catch {
    consultationVisitorCount = 12540;
  }

  return <VariantOneClient consultationCount={Math.max(1, consultationVisitorCount)} />;
}
