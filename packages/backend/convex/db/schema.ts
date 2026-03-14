import { defineSchema } from "convex/server"
import { users } from "./tables/users"
import { runs } from "./tables/runs"
import { runSteps } from "./tables/runSteps"

export const schema = defineSchema({
  users,
  runs,
  runSteps,
})
