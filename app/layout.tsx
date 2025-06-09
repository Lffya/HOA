import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AccessibilityWidget from "@/components/accessibility-widget"
import BackToTop from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "House of Amaraa - Royalty. Wisdom. Legacy.",
  description: "Building tomorrow's legacy through visionary leadership and unwavering commitment to excellence.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="page-transition-wrapper">{children}</div>
          <AccessibilityWidget />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
