"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const currentTheme = resolvedTheme === "dark" ? "Dark" : "Light"

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={cn(
          "h-10 w-10 rounded-full transition-all duration-300 ease-out",
          "hover:bg-hoa-gold/20 hover:scale-110",
          "border border-transparent hover:border-hoa-gold/30",
        )}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
      >
        <Sun
          className={cn(
            "h-5 w-5 transition-all duration-500 ease-out",
            resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100",
          )}
        />
        <Moon
          className={cn(
            "absolute h-5 w-5 transition-all duration-500 ease-out",
            resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0",
          )}
        />
      </Button>

      {/* Tooltip */}
      <div
        className={cn(
          "absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out",
          "bg-black/90 dark:bg-white/90 text-white dark:text-black text-xs px-3 py-2 rounded-lg",
          "before:content-[''] before:absolute before:-top-1 before:left-1/2 before:transform before:-translate-x-1/2",
          "before:border-4 before:border-transparent before:border-b-black/90 dark:before:border-b-white/90",
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none",
        )}
      >
        Theme: {currentTheme}
      </div>
    </div>
  )
}
