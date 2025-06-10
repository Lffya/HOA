"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>()

  const navItems = [
    {
      name: "About Us",
      href: "/about",
      subItems: [
        { name: "Our Story", href: "/about/our-story" },
        { name: "Corporate Governance", href: "/about/governance" },
        { name: "Leadership", href: "/about/leadership" },
        { name: "Values & Culture", href: "/about/values-culture" },
        { name: "CSR Initiatives", href: "/about/csr" },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
      subItems: [
        { name: "Open Positions", href: "/careers/positions" },
        { name: "Application Process", href: "/careers/process" },
        { name: "Life at Amaraa", href: "/careers/culture" },
        { name: "Benefits", href: "/careers/benefits" },
      ],
    },
    {
      name: "Subsidiaries",
      href: "/subsidiaries",
      subItems: [
        { name: "Agriculture", href: "/subsidiaries/agriculture" },
        { name: "Security", href: "/subsidiaries/security" },
        { name: "Aviation", href: "/subsidiaries/aviation" },
        { name: "Automotive", href: "/subsidiaries/automotive" },
        { name: "IT Services", href: "/subsidiaries/it" },
        { name: "Food & Beverages", href: "/subsidiaries/food" },
      ],
    },
    {
      name: "Contact Us",
      href: "/contact",
      subItems: [
        { name: "General Inquiries", href: "/contact/general" },
        { name: "Media Relations", href: "/contact/media" },
        { name: "Visit Us", href: "/contact/visit" },
        { name: "Feedback", href: "/contact/feedback" },
      ],
    },
    {
      name: "Privacy & Policy",
      href: "/privacy-policy",
      subItems: [
        { name: "Privacy Policy", href: "/privacy-policy#privacy" },
        { name: "Corporate Governance", href: "/privacy-policy#governance" },
        { name: "Terms of Service", href: "/privacy-policy#terms" },
        { name: "Data Protection", href: "/privacy-policy#data" },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/95 dark:bg-hoa-charcoal/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent backdrop-blur-sm py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-hoa-gold font-serif hover:scale-105 transition-transform duration-300"
            >
              HOUSE OF AMARAA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out",
                    "text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold",
                    "hover:bg-hoa-gold/10 dark:hover:bg-hoa-gold/10",
                    pathname.startsWith(item.href) && "text-hoa-gold bg-hoa-gold/10",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-300 ease-in-out",
                      activeDropdown === item.name && "rotate-180",
                    )}
                  />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-64 origin-top-left transition-all duration-300 ease-in-out",
                    activeDropdown === item.name
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
                  )}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white/95 dark:bg-hoa-charcoal/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                    <div className="py-2">
                      {item.subItems.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={cn(
                            "block px-4 py-3 text-sm transition-all duration-200",
                            "text-gray-700 dark:text-gray-200 hover:text-hoa-gold dark:hover:text-hoa-gold",
                            "hover:bg-hoa-gold/10 dark:hover:bg-hoa-gold/10",
                            "border-l-3 border-transparent hover:border-hoa-gold",
                            index !== item.subItems.length - 1 && "border-b border-gray-100 dark:border-gray-700/50",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors duration-300 p-2 rounded-md touch-target"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            isMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300",
                      "text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold",
                      "hover:bg-hoa-gold/10 dark:hover:bg-hoa-gold/10 touch-target",
                      pathname.startsWith(item.href) && "text-hoa-gold bg-hoa-gold/10",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 space-y-2 mb-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors duration-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50 touch-target"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
