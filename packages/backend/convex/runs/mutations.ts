import { v } from "convex/values"
import { mutation } from "../_generated/server"

export const createRun = mutation({
  args: {
    userId: v.id("users"),
    mapId: v.string(),
    questId: v.string(),
    routeId: v.string(),
  },
  handler: async (ctx, args) => {
    const now = Date.now()

    return await ctx.db.insert("runs", {
      userId: args.userId,
      mapId: args.mapId,
      questId: args.questId,
      routeId: args.routeId,
      status: "active",
      currentPhaseId: undefined,
      currentStepId: undefined,
      startedAt: now,
      updatedAt: now,
      completedAt: undefined,
    })
  },
})
