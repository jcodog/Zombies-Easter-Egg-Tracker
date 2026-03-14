import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export async function SignInView() {
  const { userId } = await auth()

  if (userId) {
    redirect("/app")
  }

  return (
    <SignIn
      fallbackRedirectUrl="/app"
      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      withSignUp={false}
    />
  )
}
