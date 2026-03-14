import { AuthAside } from "@/features/auth/components/auth-aside"
import { AuthNav } from "@/features/auth/components/auth-nav"

interface AuthShellProps {
  children: React.ReactNode
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="relative min-h-svh bg-background">
      <AuthNav />

      <div className="grid min-h-svh pt-16 lg:grid-cols-2">
        <div className="order-2 min-h-96 lg:order-1 lg:min-h-full">
          <AuthAside />
        </div>

        <div className="order-1 flex items-center justify-center px-6 py-8 sm:px-10 sm:py-10 lg:order-2 lg:border-l lg:border-border/70 lg:px-14 lg:py-12">
          <div className="w-full max-w-[30rem]">{children}</div>
        </div>
      </div>
    </div>
  )
}
