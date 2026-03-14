import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

export function LandingView() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.03)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(17,24,39,0.12)_1px,transparent_1px)] [background-size:22px_22px] dark:opacity-25 dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-y-0 left-[76%] hidden w-px bg-border lg:block" />
        <div className="absolute left-[12%] top-[18%] size-40 rounded-full bg-primary/10 blur-3xl dark:bg-primary/16" />
        <div className="absolute bottom-[18%] right-[14%] hidden h-px w-44 bg-gradient-to-r from-primary/70 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-14 lg:py-10">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-primary" />
          <span className="text-sm font-medium tracking-tight">
            Zombies EE Tracker
          </span>
        </div>

        <section className="flex max-w-3xl flex-col gap-8 pb-12 pt-16 sm:pb-16 sm:pt-24 lg:pb-20">
          <div className="flex max-w-2xl flex-col gap-5">
            <h1 className="text-pretty text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
              Keep every Easter egg run readable from first setup to final step.
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              A focused workspace for route decisions, checkpoint progress, and
              the notes that matter when a clear is still in motion.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/sign-up">
                Create account
                <IconArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
