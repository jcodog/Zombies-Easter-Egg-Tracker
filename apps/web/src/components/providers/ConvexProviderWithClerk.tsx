"use client"

import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"
import { useAuth } from "@clerk/nextjs"
import { env } from "@/lib/env"

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL)

export const ConvexClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}
