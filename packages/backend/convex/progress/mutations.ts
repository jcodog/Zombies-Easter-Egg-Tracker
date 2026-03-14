import { v } from "convex/values"
import { mutation } from "../_generated/server"

export const completeStep = mutation({
  args: {
    runId: v.id("runs"),
    stepId: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("runSteps")
      .withIndex("by_run_id_step_id", (q) =>
        q.eq("runId", args.runId).eq("stepId", args.stepId)
      )
      .unique()

    if (existing) {
      await ctx.db.patch(existing._id, {
        status: "completed",
        completedAt: Date.now(),
      })
      return existing._id
    }

    return await ctx.db.insert("runSteps", {
      runId: args.runId,
      stepId: args.stepId,
      status: "completed",
      completedAt: Date.now(),
    })
  },
})
