import Link from "next/link"
import { IconArrowRight } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

import { LandingNav } from "@/features/marketing/components/landing-nav"
import { MarketingPreview } from "@/features/marketing/components/marketing-preview"
import { MarketingValueStrip } from "@/features/marketing/components/marketing-value-strip"
import { ProductMark } from "@/features/marketing/components/product-mark"

export function LandingView() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background">
      <LandingNav />

      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_34%,rgba(255,255,255,0.03)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.018)_0%,transparent_30%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[22px_22px] opacity-30" />
        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-border/70 lg:block" />
        <div className="absolute top-[16%] left-[9%] h-28 w-28 bg-primary/10 blur-3xl" />
        <div className="absolute top-[28%] right-[12%] h-24 w-24 bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[14%] left-[34%] h-px w-40 bg-linear-to-r from-primary/70 to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-svh max-w-7xl gap-10 px-6 pb-6 pt-20 sm:px-10 sm:pb-8 sm:pt-24 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:items-center lg:gap-10 lg:px-14 lg:pb-8 lg:pt-20">
          <section className="flex flex-col gap-6 lg:pr-8">
            <ProductMark />

            <div className="flex max-w-[44rem] flex-col gap-5 border-l border-border/80 pl-5 sm:pl-7">
              <div className="flex flex-col gap-3">
                <h1 className="max-w-[42rem] text-4xl font-medium tracking-tight text-pretty sm:text-5xl lg:text-[4.6rem] lg:leading-[0.96]">
                  Keep the Easter egg route readable while the run is live.
                </h1>
                <p className="max-w-[38rem] text-base leading-6 text-muted-foreground sm:text-[1.02rem]">
                  Zombies Easter Egg Tracker gives every attempt a clean run
                  board for phase order, checkpoint progress, and the route
                  notes that usually get lost between setup and the final clear.
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
            </div>

            <MarketingValueStrip />
          </section>

          <section className="flex items-center lg:justify-end">
            <MarketingPreview />
          </section>
      </div>
    </main>
  )
}
