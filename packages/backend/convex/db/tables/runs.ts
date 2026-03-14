import { defineTable } from "convex/server"
import { v } from "convex/values"

export const runs = defineTable({
  userId: v.id("users"),
  mapId: v.string(),
  questId: v.string(),
  routeId: v.string(),
  status: v.union(
    v.literal("active"),
    v.literal("completed"),
    v.literal("abandoned"),
    v.literal("failed")
  ),
  currentPhaseId: v.optional(v.string()),
  currentStepId: v.optional(v.string()),
  startedAt: v.number(),
  updatedAt: v.number(),
  completedAt: v.optional(v.number()),
}).index("by_user_id", ["userId"])
