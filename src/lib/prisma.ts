import { PrismaClient } from "@/generated/prisma";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";
import { promises as fs } from "node:fs";
import path from "node:path";

type IntakeData = {
  id: string;
  [key: string]: unknown;
};

type VisitData = {
  id: string;
  createdAt: string;
  userAgent?: string;
  ipAddress?: string;
};

type LocalStore = {
  intakeSubmission: IntakeData[];
  consultationVisit: VisitData[];
};

type LocalPrisma = {
  intakeSubmission: {
    create: (args: { data: Record<string, unknown> }) => Promise<IntakeData>;
  };
  consultationVisit: {
    create: (args: { data: Record<string, unknown> }) => Promise<VisitData>;
    count: () => Promise<number>;
  };
  $disconnect: () => Promise<void>;
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | LocalPrisma | undefined;
}

const STORE_PATH = path.join(process.cwd(), ".data", "local-prisma.json");

async function readStore(): Promise<LocalStore> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as LocalStore;
    return {
      intakeSubmission: parsed.intakeSubmission ?? [],
      consultationVisit: parsed.consultationVisit ?? [],
    };
  } catch {
    return {
      intakeSubmission: [],
      consultationVisit: [],
    };
  }
}

async function writeStore(store: LocalStore) {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

let queue: Promise<void> = Promise.resolve();
function withLock<T>(task: () => Promise<T>): Promise<T> {
  const next = queue.then(task);
  queue = next.then(
    () => undefined,
    () => undefined
  );
  return next;
}

function createLocalPrisma(): LocalPrisma {
  return {
    intakeSubmission: {
      async create({ data }) {
        return withLock(async () => {
          const store = await readStore();
          const item: IntakeData = {
            id: `local_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            ...data,
          };
          store.intakeSubmission.push(item);
          await writeStore(store);
          return item;
        });
      },
    },
    consultationVisit: {
      async create({ data }) {
        return withLock(async () => {
          const store = await readStore();
          const item: VisitData = {
            id: `visit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            createdAt: new Date().toISOString(),
            userAgent:
              typeof data.userAgent === "string" ? data.userAgent : undefined,
            ipAddress:
              typeof data.ipAddress === "string" ? data.ipAddress : undefined,
          };
          store.consultationVisit.push(item);
          await writeStore(store);
          return item;
        });
      },
      async count() {
        const store = await readStore();
        return store.consultationVisit.length;
      },
    },
    async $disconnect() {
      return;
    },
  };
}

function createPrismaClient() {
  try {
    const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
    const filePath = databaseUrl.startsWith("file:")
      ? databaseUrl.replace("file:", "")
      : databaseUrl;
    const db = new Database(filePath);
    const adapter = new PrismaBetterSqlite3(db);

    return new PrismaClient({
      adapter,
      log: ["error", "warn"],
    });
  } catch (error) {
    console.warn(
      "[prisma] native sqlite adapter unavailable, fallback store enabled:",
      error
    );
    return createLocalPrisma();
  }
}

export const prisma = global.prisma || createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
