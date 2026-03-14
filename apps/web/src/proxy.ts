import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

function normalizeAuthPath(value: string | undefined, fallback: string) {
  if (!value) {
    return fallback
  }

  const trimmed = value.trim()

  if (!trimmed) {
    return fallback
  }

  try {
    if (/^https?:\/\//i.test(trimmed)) {
      return new URL(trimmed).pathname || fallback
    }
  } catch {
    return fallback
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`
}

const signInPath = normalizeAuthPath(
  process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  "/sign-in"
)
const signUpPath = normalizeAuthPath(
  process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  "/sign-up"
)

export const PUBLIC_ROUTE_PATTERNS = [
  "/",
  `${signInPath}(.*)`,
  `${signUpPath}(.*)`,
]

export const isPublicRoute = createRouteMatcher(PUBLIC_ROUTE_PATTERNS)

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
