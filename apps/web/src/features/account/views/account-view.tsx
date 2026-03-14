import { UserProfile } from "@clerk/nextjs"

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

      <div className="max-w-5xl border-t border-border pt-6">
        <UserProfile routing="hash" />
      </div>
    </section>
  )
}
