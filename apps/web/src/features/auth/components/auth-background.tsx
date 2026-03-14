import { AuthBeams } from "@/features/auth/components/auth-beams"

export function AuthBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <AuthBeams />
    </div>
  )
}
