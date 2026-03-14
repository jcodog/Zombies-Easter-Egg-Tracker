"use client"

import { UserButton } from "@clerk/nextjs"

import { useSidebar } from "@workspace/ui/components/sidebar"
import { cn } from "@workspace/ui/lib/utils"
import { env } from "@/lib/env"

export function AppSidebarUser() {
  const { state } = useSidebar()
  const isExpanded = state === "expanded"

  return (
    <div className="flex w-full items-center [&>*]:w-full [&_.cl-userButtonTrigger]:w-full">
      <UserButton
        appearance={{
          elements: {
            avatarBox: "size-8",
            userButtonBox: cn(
              "items-center gap-3",
              isExpanded
                ? "w-full flex-row-reverse justify-end"
                : "justify-center"
            ),
            userButtonOuterIdentifier: cn(
              "max-w-[9rem] truncate text-xs font-medium text-sidebar-foreground",
              !isExpanded && "hidden"
            ),
            userButtonTrigger: cn(
              "h-10 rounded-none border border-transparent bg-transparent px-2.5 text-sidebar-foreground shadow-none ring-0 outline-hidden transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring",
              isExpanded
                ? "w-full justify-start"
                : "size-10 justify-center px-0"
            ),
          },
        }}
        showName={isExpanded}
        userProfileMode="navigation"
        userProfileUrl={
          env.NEXT_PUBLIC_CLERK_USER_PROFILE_URL ?? "/app/account"
        }
      />
    </div>
  )
}
