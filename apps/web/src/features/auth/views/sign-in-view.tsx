import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import {
  AuthPanel,
  authPanelAppearance,
} from "@/features/auth/components/auth-panel"

export async function SignInView() {
  const { userId } = await auth()

  if (userId) {
    redirect("/app")
  }

  return (
    <AuthPanel>
      <SignIn
        appearance={authPanelAppearance}
        fallbackRedirectUrl="/app"
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        withSignUp={false}
      />
    </AuthPanel>
  )
}
