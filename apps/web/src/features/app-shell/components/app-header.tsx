"use client"

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"

import { Button } from "@workspace/ui/components/button"
import { SidebarTrigger } from "@workspace/ui/components/sidebar"

export function AppHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-14 items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <SidebarTrigger className="md:hidden" />
          <Link
            href="/app"
            className="truncate text-sm font-medium tracking-tight md:hidden"
          >
            Zombies EE Tracker
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {pathname !== "/app/account" ? (
            <Button asChild size="sm" variant="ghost">
              <Link href="/app/account">Account</Link>
            </Button>
          ) : null}
          <UserButton />
        </div>
      </div>
    </header>
  )
}
