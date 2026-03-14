import { Geist, Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"

import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { ClerkProvider } from "@/components/providers/ClerkProvider"
import { ConvexClientProvider } from "@/components/providers/ConvexProviderWithClerk"
import { TanstackQueryProvider } from "@/components/providers/TanstackQueryProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="flex h-full min-h-screen w-full min-w-full flex-col">
        <ThemeProvider>
          <ClerkProvider>
            <ConvexClientProvider>
              <TanstackQueryProvider>{children}</TanstackQueryProvider>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
