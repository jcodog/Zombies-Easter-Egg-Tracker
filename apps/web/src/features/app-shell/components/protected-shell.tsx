"use client"

import Link from "next/link"

import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
} from "@workspace/ui/components/sidebar"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

import { AppHeader } from "@/features/app-shell/components/app-header"
import { AppNavigation } from "@/features/app-shell/components/app-navigation"
import { AppSidebarUser } from "@/features/app-shell/components/app-sidebar-user"

interface ProtectedShellProps {
  children: React.ReactNode
}

export function ProtectedShell({ children }: ProtectedShellProps) {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen>
        <Sidebar collapsible="icon" variant="inset">
          <SidebarHeader className="px-2 py-3">
            <Link
              href="/app"
              className="flex items-start gap-3 rounded-none px-2 py-2 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0"
            >
              <span className="relative flex size-8 shrink-0 items-center justify-center border border-sidebar-border bg-sidebar/70">
                <span className="absolute inset-1 border border-sidebar-border/70" />
                <span className="absolute inset-x-2.5 top-1/2 h-px -translate-y-px bg-primary/50" />
                <span className="absolute inset-y-2.5 left-1/2 w-px -translate-x-px bg-primary/50" />
                <span className="size-1.5 bg-primary" />
              </span>
              <span className="flex min-w-0 flex-col gap-0.5 group-data-[collapsible=icon]:hidden">
                <span className="truncate text-sm font-medium tracking-tight">
                  Zombies EE Tracker
                </span>
                <span className="text-xs leading-5 text-sidebar-foreground/70">
                  Runs, routes, and checkpoints in one protected workspace.
                </span>
              </span>
            </Link>
          </SidebarHeader>
          <SidebarSeparator />
          <AppNavigation />
          <SidebarSeparator />
          <SidebarFooter className="px-2 py-3">
            <AppSidebarUser />
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="min-h-svh">
          <AppHeader />
          <div className="flex flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
