"use client"

import { ClerkProvider as ImportedProvider } from "@clerk/nextjs"
import { dark, shadcn } from "@clerk/themes"
import { useTheme } from "next-themes"

import { env } from "@/lib/env"

interface ClerkProviderProps {
  children: React.ReactNode
}

export const ClerkProvider = ({ children }: ClerkProviderProps) => {
  const { resolvedTheme } = useTheme()

  return (
    <ImportedProvider
      afterSignOutUrl={env.NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL ?? "/"}
      appearance={{
        cssLayerName: "clerk",
        theme: resolvedTheme === "dark" ? [dark, shadcn] : [shadcn],
      }}
      signInFallbackRedirectUrl={
        env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL ?? "/app"
      }
      signInForceRedirectUrl={env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL}
      signInUrl={env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"}
      signUpFallbackRedirectUrl={
        env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL ?? "/app"
      }
      signUpForceRedirectUrl={env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL}
      signUpUrl={env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"}
    >
      {children}
    </ImportedProvider>
  )
}
