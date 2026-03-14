import Link from "next/link"

import { Button } from "@workspace/ui/components/button"

export function LandingNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/86 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className="relative grid size-10 shrink-0 place-items-center border border-foreground/12 bg-card/55"
          >
            <span className="absolute inset-[5px] border border-foreground/10" />
            <span className="absolute inset-x-2.5 top-1/2 h-px -translate-y-px bg-primary/40" />
            <span className="absolute inset-y-2.5 left-1/2 w-px -translate-x-px bg-primary/40" />
            <span className="size-1.5 bg-primary" />
          </span>

          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="text-sm font-medium tracking-tight">
              Zombies Easter Egg Tracker
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Tactical run memory for live easter egg clears
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="ghost">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/sign-up">Start tracking</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
