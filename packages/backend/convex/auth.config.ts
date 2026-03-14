import { AuthConfig } from "convex/server"
import { env } from "../src/lib/env"

export default {
  providers: [
    {
      domain: env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "zombies-ee-tracker-convex",
    },
  ],
} satisfies AuthConfig
