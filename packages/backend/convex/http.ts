import { httpRouter } from "convex/server"
import { registerHttpRoutes } from "./https"

const http = httpRouter()

registerHttpRoutes(http)

export default http
