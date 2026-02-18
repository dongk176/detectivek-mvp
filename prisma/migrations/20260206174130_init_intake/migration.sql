-- CreateTable
CREATE TABLE "IntakeSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "purpose" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "startPreference" TEXT,
    "summary" TEXT NOT NULL,
    "reviewSummary" TEXT,
    "selectedPackage" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "messages" JSONB NOT NULL,
    "estimate" JSONB,
    "plan" JSONB,
    "referenceId" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT
);
