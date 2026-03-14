import type { HttpRouter } from "convex/server"
import { clerkWebhook } from "./routes/clerk"

export const registerHttpRoutes = (http: HttpRouter) => {
  http.route({
    path: "/clerk-users-webhook",
    method: "POST",
    handler: clerkWebhook,
  })
}
