import { httpRouter } from "convex/server"
import { clerkWebhook } from "./https/routes/clerk"
import { registerHttpRoutes } from "./https"

const http = httpRouter()

registerHttpRoutes(http)

export default http
