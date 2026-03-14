import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    CLERK_SECRET_KEY: z.string().min(1).optional(),
    CLERK_WEBHOOK_SECRET: z.string().min(1).optional(),
    CLERK_JWT_ISSUER_DOMAIN: z.url().min(1).optional(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})

const requiredBackendEnvVars = [
  "CLERK_SECRET_KEY",
  "CLERK_WEBHOOK_SECRET",
  "CLERK_JWT_ISSUER_DOMAIN",
] as const

type RequiredBackendEnvVar = (typeof requiredBackendEnvVars)[number]

export function requireBackendEnv(name: RequiredBackendEnvVar) {
  const value = env[name]

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. Set it before running backend auth or Clerk webhook flows.`
    )
  }

  return value
}
