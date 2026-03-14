import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"

import { cn } from "@workspace/ui/lib/utils"
import { ClerkProvider } from "@/components/providers/ClerkProvider"
import { ConvexClientProvider } from "@/components/providers/ConvexProviderWithClerk"
import { TanstackQueryProvider } from "@/components/providers/TanstackQueryProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { TooltipProvider } from "@workspace/ui/components/tooltip"

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })

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
      className={cn("antialiased", fontSans.variable, fontMono.variable)}
    >
      <body className="min-h-svh bg-background font-sans text-foreground">
        <ThemeProvider>
          <ClerkProvider>
            <ConvexClientProvider>
              <TanstackQueryProvider>
                <TooltipProvider>{children}</TooltipProvider>
              </TanstackQueryProvider>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
