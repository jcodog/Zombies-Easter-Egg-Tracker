import { AuthConfig } from "convex/server"
import { requireBackendEnv } from "../src/lib/env"

export default {
  providers: [
    {
      domain: requireBackendEnv("CLERK_JWT_ISSUER_DOMAIN"),
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig
