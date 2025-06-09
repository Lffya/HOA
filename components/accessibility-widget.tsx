"use client"

import { useState, useEffect } from "react"
import { Settings, X, Sun, Moon, Minus, Plus, RotateCcw, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface AccessibilitySettings {
  fontSize: number
  lineHeight: number
  isVisible: boolean
}

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [fontSize, setFontSize] = useState(1)
  const [lineHeight, setLineHeight] = useState(1)
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings")
    if (savedSettings) {
      const settings: AccessibilitySettings = JSON.parse(savedSettings)
      setFontSize(settings.fontSize || 1)
      setLineHeight(settings.lineHeight || 1)
      setIsVisible(settings.isVisible !== false)
    }

    applySettings()
  }, [])

  // Save settings to localStorage when they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "accessibilitySettings",
        JSON.stringify({
          fontSize,
          lineHeight,
          isVisible,
        }),
      )

      applySettings()
    }
  }, [fontSize, lineHeight, mounted])

  const applySettings = () => {
    document.documentElement.style.setProperty("--font-size-multiplier", fontSize.toString())
    document.documentElement.style.setProperty("--line-height-multiplier", lineHeight.toString())
  }

  const resetSettings = () => {
    setFontSize(1)
    setLineHeight(1)
  }

  const hideWidget = () => {
    setIsVisible(false)
    setIsOpen(false)
    localStorage.setItem(
      "accessibilitySettings",
      JSON.stringify({
        fontSize,
        lineHeight,
        isVisible: false,
      }),
    )
  }

  if (!isVisible || !mounted) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-full shadow-2xl transition-all duration-500 ease-out",
          "bg-gradient-to-br from-hoa-gold to-hoa-gold/80 hover:from-hoa-gold/90 hover:to-hoa-gold/70",
          "text-white border-2 border-white/20",
          "hover:scale-110 hover:shadow-xl",
          isOpen && "scale-110 shadow-xl",
        )}
        aria-label="Accessibility settings"
      >
        <Settings className={cn("h-6 w-6 transition-transform duration-300", isOpen && "rotate-45")} />
      </Button>

      {/* Accessibility Panel */}
      <div
        className={cn(
          "absolute bottom-20 left-0 w-80 transition-all duration-500 ease-out",
          "bg-white/95 dark:bg-hoa-charcoal/95 backdrop-blur-xl rounded-2xl shadow-2xl",
          "border border-white/20 dark:border-gray-700/50 p-6",
          isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-8 scale-95 pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Eye className="h-5 w-5 text-hoa-gold" />
            <h3 className="text-lg font-bold text-hoa-charcoal dark:text-white font-serif">Accessibility</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Close accessibility panel"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* Theme Setting */}
          <div>
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">Theme Mode</label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={resolvedTheme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
                className={cn(
                  "transition-all duration-300",
                  resolvedTheme === "light" && "bg-hoa-gold hover:bg-hoa-gold/90 text-white",
                )}
              >
                <Sun className="h-4 w-4 mr-2" /> Light
              </Button>
              <Button
                variant={resolvedTheme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={cn(
                  "transition-all duration-300",
                  resolvedTheme === "dark" && "bg-hoa-gold hover:bg-hoa-gold/90 text-white",
                )}
              >
                <Moon className="h-4 w-4 mr-2" /> Dark
              </Button>
            </div>
          </div>

          {/* Font Size Setting */}
          <div>
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              Font Size: {Math.round(fontSize * 100)}%
            </label>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFontSize(Math.max(0.8, fontSize - 0.1))}
                disabled={fontSize <= 0.8}
                className="h-10 w-10 rounded-full"
                aria-label="Decrease font size"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                  <div
                    className="bg-hoa-gold rounded-full h-2 transition-all duration-300"
                    style={{ width: `${((fontSize - 0.8) / 0.6) * 100}%` }}
                  />
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFontSize(Math.min(1.4, fontSize + 0.1))}
                disabled={fontSize >= 1.4}
                className="h-10 w-10 rounded-full"
                aria-label="Increase font size"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center mt-2">
              <Button
                variant={fontSize === 1 ? "default" : "ghost"}
                size="sm"
                onClick={() => setFontSize(1)}
                className={cn(
                  "text-xs transition-all duration-300",
                  fontSize === 1 && "bg-hoa-gold hover:bg-hoa-gold/90 text-white",
                )}
              >
                Default
              </Button>
            </div>
          </div>

          {/* Line Height Setting */}
          <div>
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              Line Height: {Math.round(lineHeight * 100)}%
            </label>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLineHeight(Math.max(0.9, lineHeight - 0.1))}
                disabled={lineHeight <= 0.9}
                className="h-10 w-10 rounded-full"
                aria-label="Decrease line height"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                  <div
                    className="bg-hoa-gold rounded-full h-2 transition-all duration-300"
                    style={{ width: `${((lineHeight - 0.9) / 0.6) * 100}%` }}
                  />
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLineHeight(Math.min(1.5, lineHeight + 0.1))}
                disabled={lineHeight >= 1.5}
                className="h-10 w-10 rounded-full"
                aria-label="Increase line height"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center mt-2">
              <Button
                variant={lineHeight === 1 ? "default" : "ghost"}
                size="sm"
                onClick={() => setLineHeight(1)}
                className={cn(
                  "text-xs transition-all duration-300",
                  lineHeight === 1 && "bg-hoa-gold hover:bg-hoa-gold/90 text-white",
                )}
              >
                Default
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              variant="outline"
              size="sm"
              onClick={resetSettings}
              className="transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <RotateCcw className="h-4 w-4 mr-2" /> Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={hideWidget}
              className="transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
            >
              <X className="h-4 w-4 mr-2" /> Hide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
