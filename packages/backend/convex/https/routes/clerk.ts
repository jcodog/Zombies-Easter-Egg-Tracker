import { httpAction } from "../../_generated/server"
import { internal } from "../../_generated/api"
import { Webhook } from "svix"
import { env } from "../../../src/lib/env"

export const clerkWebhook = httpAction(async (ctx, request) => {
  const secret = env.CLERK_WEBHOOK_SECRET
  if (!secret) {
    return new Response("Missing webhook secret", { status: 500 })
  }

  const svixId = request.headers.get("svix-id")
  const svixTimestamp = request.headers.get("svix-timestamp")
  const svixSignature = request.headers.get("svix-signature")

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 })
  }

  const payload = await request.text()

  let event: unknown

  try {
    const wh = new Webhook(secret)
    event = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    })
  } catch {
    return new Response("Invalid signature", { status: 400 })
  }

  const evt = event as {
    type: string
    data: {
      id: string
      username?: string | null
      first_name?: string | null
      last_name?: string | null
      primary_email_address_id?: string | null
      email_addresses?: Array<{
        id: string
        email_address: string
      }>
      image_url?: string | null
    }
  }

  switch (evt.type) {
    case "user.created":
    case "user.updated": {
      const primaryEmail =
        evt.data.email_addresses?.find(
          (email) => email.id === evt.data.primary_email_address_id
        )?.email_address ?? null

      await ctx.runMutation(internal.users.mutations.upsertFromClerkWebhook, {
        clerkId: evt.data.id,
        username: evt.data.username ?? null,
        email: primaryEmail,
        imageUrl: evt.data.image_url ?? null,
        firstName: evt.data.first_name ?? null,
        lastName: evt.data.last_name ?? null,
      })

      break
    }

    case "user.deleted": {
      await ctx.runMutation(internal.users.mutations.deleteFromClerkWebhook, {
        clerkId: evt.data.id,
      })

      break
    }

    default:
      break
  }

  return new Response("OK", { status: 200 })
})
