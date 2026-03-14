"use client"

import Link from "next/link"
import { IconLayoutDashboard, IconSettings2 } from "@tabler/icons-react"
import { usePathname } from "next/navigation"

import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar"

const navigationItems = [
  {
    href: "/app",
    label: "Dashboard",
    icon: IconLayoutDashboard,
    matches: (pathname: string) => pathname === "/app",
  },
] as const

export function AppNavigation() {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()

  return (
    <SidebarContent className="px-3 py-4">
      <SidebarGroup className="p-0">
        <SidebarMenu>
          {navigationItems.map((item) => {
            const Icon = item.icon

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={item.matches(pathname)}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (isMobile) {
                        setOpenMobile(false)
                      }
                    }}
                  >
                    <Icon data-icon="inline-start" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  )
}
