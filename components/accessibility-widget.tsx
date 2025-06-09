"use client"

import { useState, useEffect } from "react"
import { Settings, X, Sun, Moon, Minus, Plus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [fontSize, setFontSize] = useState(1)
  const [lineHeight, setLineHeight] = useState(1)
  const { setTheme, theme } = useTheme()

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings")
    if (savedSettings) {
      const settings = JSON.parse(savedSettings)
      setFontSize(settings.fontSize || 1)
      setLineHeight(settings.lineHeight || 1)
      setIsVisible(settings.isVisible !== false)
    }

    // Apply font size and line height
    applySettings()
  }, [])

  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem(
      "accessibilitySettings",
      JSON.stringify({
        fontSize,
        lineHeight,
        isVisible,
      }),
    )

    applySettings()
  }, [fontSize, lineHeight])

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

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Accessibility Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-hoa-gold hover:bg-hoa-gold/90 text-white shadow-lg"
        aria-label="Accessibility settings"
      >
        <Settings className="h-6 w-6" />
      </Button>

      {/* Accessibility Panel */}
      <div
        className={cn(
          "absolute bottom-16 left-0 w-72 bg-white dark:bg-hoa-charcoal rounded-lg shadow-xl p-4 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-hoa-charcoal dark:text-white">Accessibility Settings</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close accessibility panel">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {/* Theme Setting */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Theme</label>
            <div className="flex space-x-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
                className="flex-1"
              >
                <Sun className="h-4 w-4 mr-2" /> Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
                className="flex-1"
              >
                <Moon className="h-4 w-4 mr-2" /> Dark
              </Button>
            </div>
          </div>

          {/* Font Size Setting */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Font Size</label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFontSize(Math.max(0.8, fontSize - 0.1))}
                disabled={fontSize <= 0.8}
                aria-label="Decrease font size"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center">
                <Button
                  variant={fontSize === 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFontSize(1)}
                  className="min-w-20"
                >
                  Default
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setFontSize(Math.min(1.4, fontSize + 0.1))}
                disabled={fontSize >= 1.4}
                aria-label="Increase font size"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Line Height Setting */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Line Height</label>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLineHeight(Math.max(0.9, lineHeight - 0.1))}
                disabled={lineHeight <= 0.9}
                aria-label="Decrease line height"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center">
                <Button
                  variant={lineHeight === 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setLineHeight(1)}
                  className="min-w-20"
                >
                  Default
                </Button>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLineHeight(Math.min(1.5, lineHeight + 0.1))}
                disabled={lineHeight >= 1.5}
                aria-label="Increase line height"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2 pt-2">
            <Button variant="outline" size="sm" onClick={resetSettings} className="flex-1">
              <RotateCcw className="h-4 w-4 mr-2" /> Reset
            </Button>
            <Button variant="outline" size="sm" onClick={hideWidget} className="flex-1">
              <X className="h-4 w-4 mr-2" /> Hide Widget
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
