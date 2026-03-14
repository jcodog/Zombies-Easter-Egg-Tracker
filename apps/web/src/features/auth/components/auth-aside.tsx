import { AuthBackground } from "@/features/auth/components/auth-background"

export function AuthAside() {
  return (
    <aside className="relative isolate h-full overflow-hidden bg-black">
      <AuthBackground />
    </aside>
  )
}
