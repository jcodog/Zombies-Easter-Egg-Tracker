import { SignUp } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function SignUpView() {
  const { userId } = await auth()

  if (userId) {
    redirect("/app")
  }

  return (
    <SignUp
      fallbackRedirectUrl="/app"
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
    />
  )
}
