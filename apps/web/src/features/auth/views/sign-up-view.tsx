import { SignUp } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import {
  AuthPanel,
  authPanelAppearance,
} from "@/features/auth/components/auth-panel"
import { env } from "@/lib/env"

export async function SignUpView() {
  const { userId } = await auth()
  const signUpUrl = env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up"
  const signUpFallbackRedirectUrl =
    env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL ?? "/app"

  if (userId) {
    redirect(
      env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL ??
        signUpFallbackRedirectUrl
    )
  }

  return (
    <AuthPanel>
      <SignUp
        appearance={authPanelAppearance}
        fallbackRedirectUrl={signUpFallbackRedirectUrl}
        forceRedirectUrl={env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL}
        path={signUpUrl}
        routing="path"
        signInUrl={env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/sign-in"}
      />
    </AuthPanel>
  )
}
