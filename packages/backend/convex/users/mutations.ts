import { v } from "convex/values"
import { internalMutation, mutation } from "../_generated/server"

export const ensureCurrentUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error("Unauthorized")

    const clerkId = identity.subject

    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", clerkId))
      .unique()

    if (existing) return existing

    const id = await ctx.db.insert("users", {
      clerkId,
      username: identity.nickname ?? undefined,
      email: identity.email ?? undefined,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })

    return await ctx.db.get(id)
  },
})

export const upsertFromClerkWebhook = internalMutation({
  args: {
    clerkId: v.string(),
    username: v.union(v.string(), v.null()),
    email: v.union(v.string(), v.null()),
    imageUrl: v.union(v.string(), v.null()),
    firstName: v.union(v.string(), v.null()),
    lastName: v.union(v.string(), v.null()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique()

    if (existing) {
      await ctx.db.patch(existing._id, {
        username: args.username ?? undefined,
        email: args.email ?? undefined,
        updatedAt: Date.now(),
      })
      return existing._id
    }

    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      username: args.username ?? undefined,
      email: args.email ?? undefined,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
  },
})

export const deleteFromClerkWebhook = internalMutation({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .unique()

    if (!existing) return null

    await ctx.db.delete(existing._id)
    return existing._id
  },
})
