"use client"

import Link from "next/link"
import { IconLayoutDashboard } from "@tabler/icons-react"
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
    <SidebarContent className="px-2 py-3">
      <SidebarGroup className="p-0">
        <SidebarMenu>
          {navigationItems.map((item) => {
            const Icon = item.icon

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className="group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0!"
                  isActive={item.matches(pathname)}
                  tooltip={item.label}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (isMobile) {
                        setOpenMobile(false)
                      }
                    }}
                  >
                    <Icon data-icon="inline-start" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {item.label}
                    </span>
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
