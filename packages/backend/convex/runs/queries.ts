import { v } from "convex/values"
import { query } from "../_generated/server"

export const getRun = query({
  args: { runId: v.id("runs") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.runId)
  },
})
