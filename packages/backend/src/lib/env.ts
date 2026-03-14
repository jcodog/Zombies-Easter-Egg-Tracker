import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    CLERK_WEBHOOK_SECRET: z.string().min(1),
    CLERK_JWT_ISSUER_DOMAIN: z.url().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
