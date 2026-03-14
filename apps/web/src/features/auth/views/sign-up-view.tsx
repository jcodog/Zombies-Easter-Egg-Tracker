import { SignUp } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

import {
  AuthPanel,
  authPanelAppearance,
} from "@/features/auth/components/auth-panel"

export async function SignUpView() {
  const { userId } = await auth()

  if (userId) {
    redirect("/app")
  }

  return (
    <AuthPanel>
      <SignUp
        appearance={authPanelAppearance}
        fallbackRedirectUrl="/app"
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
      />
    </AuthPanel>
  )
}
