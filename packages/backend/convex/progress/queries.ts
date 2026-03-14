import { v } from "convex/values"
import { query } from "../_generated/server"

export const getRunSteps = query({
  args: { runId: v.id("runs") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("runSteps")
      .withIndex("by_run_id", (q) => q.eq("runId", args.runId))
      .collect()
  },
})
