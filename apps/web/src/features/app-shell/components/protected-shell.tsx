"use client"

import Link from "next/link"

import {
  Sidebar,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
} from "@workspace/ui/components/sidebar"

import { AppHeader } from "@/features/app-shell/components/app-header"
import { AppNavigation } from "@/features/app-shell/components/app-navigation"

interface ProtectedShellProps {
  children: React.ReactNode
}

export function ProtectedShell({ children }: ProtectedShellProps) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="gap-1 px-5 py-5">
          <Link href="/app" className="flex flex-col gap-1">
            <span className="text-sm font-medium tracking-tight">
              Zombies EE Tracker
            </span>
            <span className="text-sidebar-foreground/70">
              Runs, routes, and checkpoints in one protected workspace.
            </span>
          </Link>
        </SidebarHeader>
        <SidebarSeparator />
        <AppNavigation />
      </Sidebar>

      <SidebarInset className="min-h-svh">
        <AppHeader />
        <div className="flex flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
