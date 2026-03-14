import { AuthAside } from "@/features/auth/components/auth-aside"

interface AuthShellProps {
  children: React.ReactNode
}

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="bg-background">
      <div className="grid min-h-svh lg:grid-cols-[minmax(0,1fr)_minmax(24rem,30rem)]">
        <div className="order-2 min-h-[20rem] lg:order-1 lg:min-h-svh">
          <AuthAside />
        </div>

        <div className="order-1 flex items-center justify-center px-6 py-10 sm:px-8 lg:order-2 lg:min-h-svh lg:border-l lg:border-border/70 lg:px-12">
          <div className="w-full max-w-[26rem]">{children}</div>
        </div>
      </div>
    </div>
  )
}
