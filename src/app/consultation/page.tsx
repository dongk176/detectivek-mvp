import ConsultationClient from "./consultation-client";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ConsultationPage() {
  try {
    await prisma.consultationVisit.create({
      data: {},
    });
  } catch (error) {
    console.error("[consultation/page] visit count failed:", error);
  }

  return <ConsultationClient />;
}
