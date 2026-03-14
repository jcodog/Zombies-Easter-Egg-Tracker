import { UserProfile } from "@clerk/nextjs"

const userProfileAppearance = {
  elements: {
    rootBox: "w-full",
    cardBox: "w-full shadow-none",
    card: "w-full rounded-none border-0 bg-transparent p-0 shadow-none",
  },
}

export function AccountView() {
  return (
    <section className="flex max-w-6xl flex-col gap-8">
      <div className="flex max-w-2xl flex-col gap-3">
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Account
        </h1>
        <p className="text-sm leading-7 text-muted-foreground">
          Manage profile details, connected sign-in methods, and security
          settings inside the protected shell.
        </p>
      </div>

      <div className="relative max-w-5xl overflow-hidden border border-border/70 bg-card/45 p-3 sm:p-4">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
        />
        <UserProfile appearance={userProfileAppearance} routing="hash" />
      </div>
    </section>
  )
}
