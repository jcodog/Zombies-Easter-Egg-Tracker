"use client"

import { usePathname } from "next/navigation"

import { SidebarTrigger } from "@workspace/ui/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

const pageTitles = {
  "/app": "Dashboard",
  "/app/account": "Account",
} as const

export function AppHeader() {
  const pathname = usePathname()
  const pageTitle =
    pageTitles[pathname as keyof typeof pageTitles] ?? "Workspace"

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="flex h-14 items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <SidebarTrigger className="-ml-1" />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium tracking-tight">
              {pageTitle}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              Protected workspace
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
