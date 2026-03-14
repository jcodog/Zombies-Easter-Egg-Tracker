import { defineTable } from "convex/server"
import { v } from "convex/values"

export const runSteps = defineTable({
  runId: v.id("runs"),
  stepId: v.string(),
  status: v.union(
    v.literal("pending"),
    v.literal("completed"),
    v.literal("skipped"),
    v.literal("failed")
  ),
  completedAt: v.optional(v.number()),
})
  .index("by_run_id", ["runId"])
  .index("by_run_id_step_id", ["runId", "stepId"])
