import { ProtectedShell } from "@/features/app-shell/components/protected-shell"

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ProtectedShell>{children}</ProtectedShell>
}
