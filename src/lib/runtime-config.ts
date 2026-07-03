function readEnv(value: string | undefined): string | undefined {
  return value && value.trim().length > 0 ? value : undefined;
}

function readBooleanEnv(value: string | undefined, fallback = false): boolean {
  const clean = readEnv(value)?.toLowerCase();
  if (!clean) return fallback;
  return ["1", "true", "yes", "on"].includes(clean);
}

function readNumberEnv(value: string | undefined, fallback: number): number {
  const clean = readEnv(value);
  if (!clean) return fallback;
  const parsed = Number(clean);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export const runtimeConfig = {
  analyticsId: readEnv(process.env.NEXT_PUBLIC_ANALYTICS_ID)
};
