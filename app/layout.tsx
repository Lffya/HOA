import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AccessibilityWidget from "@/components/accessibility-widget"

export const metadata: Metadata = {
  title: "House of Amaraa",
  description: "Royalty. Wisdom. Legacy.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <AccessibilityWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
