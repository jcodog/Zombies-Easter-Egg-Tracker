import { defineTable } from "convex/server"
import { v } from "convex/values"

export const users = defineTable({
  clerkId: v.string(),
  username: v.optional(v.string()),
  email: v.optional(v.string()),
  createdAt: v.number(),
  updatedAt: v.number(),
}).index("by_clerk_id", ["clerkId"])
