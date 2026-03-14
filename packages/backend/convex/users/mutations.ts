import { v } from "convex/values"
import { mutation } from "../_generated/server"

export const ensureUser = mutation({
  args: {
    clerkId: v.string(),
    username: v.optional(v.string()),
    email: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique()

    if (existing) return existing._id

    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      username: args.username,
      email: args.email,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
  },
})
