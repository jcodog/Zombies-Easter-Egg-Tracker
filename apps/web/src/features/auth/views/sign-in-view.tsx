import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import {
  AuthPanel,
  authPanelAppearance,
} from "@/features/auth/components/auth-panel"
import { env } from "@/lib/env"

export async function SignInView() {
  const { userId } = await auth()
  const signInUrl = env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"
  const signInFallbackRedirectUrl =
    env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL ?? "/app"

  if (userId) {
    redirect(
      env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL ??
        signInFallbackRedirectUrl
    )
  }

  return (
    <AuthPanel>
      <SignIn
        appearance={authPanelAppearance}
        fallbackRedirectUrl={signInFallbackRedirectUrl}
        forceRedirectUrl={env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL}
        path={signInUrl}
        routing="path"
        signUpUrl={env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"}
        withSignUp={false}
      />
    </AuthPanel>
  )
}
