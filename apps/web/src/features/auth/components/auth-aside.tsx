import Link from "next/link"

import { AuthBackground } from "@/features/auth/components/auth-background"

export function AuthAside() {
  return (
    <aside className="relative isolate h-full overflow-hidden bg-[#11100f] text-white">
      <AuthBackground />

      <div className="relative z-10 flex h-full flex-col justify-between gap-12 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-[#e46e3a]" />
          <Link href="/" className="text-sm font-medium tracking-tight">
            Zombies EE Tracker
          </Link>
        </div>

        <div className="flex max-w-xl flex-col gap-5">
          <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-4xl">
            The run stays clean when every checkpoint stays visible.
          </h1>
          <p className="max-w-md text-sm leading-7 text-white/68">
            Track route order, player progress, and the notes that matter while
            a clear is still live.
          </p>
        </div>

        <div className="grid gap-4 text-sm text-white/72 sm:max-w-md">
          <p className="border-t border-white/10 pt-4">
            Keep the step order readable across repeated attempts.
          </p>
          <p className="border-t border-white/10 pt-4">
            Carry route notes forward without losing the run context.
          </p>
          <p className="border-t border-white/10 pt-4">
            Keep access ready across every session, whether the clear is solo
            or shared.
          </p>
        </div>
      </div>
    </aside>
  )
}
