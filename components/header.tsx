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
      href: "/about-us",
      subItems: [
        { name: "Our Story", href: "/about-us/story" },
        { name: "Vision & Mission", href: "/about-us/vision" },
        { name: "Our Values", href: "/about-us/values" },
      ],
    },
    {
      name: "Leadership",
      href: "/leadership",
      subItems: [
        { name: "Executive Team", href: "/leadership/executive-team" },
        { name: "Board of Directors", href: "/leadership/board" },
        { name: "Management", href: "/leadership/management" },
      ],
    },
    {
      name: "Businesses",
      href: "/businesses",
      subItems: [
        { name: "Real Estate", href: "/businesses/real-estate" },
        { name: "Manufacturing", href: "/businesses/manufacturing" },
        { name: "Technology", href: "/businesses/technology" },
      ],
    },
    {
      name: "CSR",
      href: "/csr",
      subItems: [
        { name: "Initiatives", href: "/csr/initiatives" },
        { name: "Impact", href: "/csr/impact" },
        { name: "Sustainability", href: "/csr/sustainability" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      subItems: [
        { name: "Get in Touch", href: "/contact/get-in-touch" },
        { name: "Locations", href: "/contact/locations" },
        { name: "Careers", href: "/contact/careers" },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
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
          ? "bg-white/95 dark:bg-hoa-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent backdrop-blur-sm py-4",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-hoa-gold font-serif hover:scale-105 transition-transform duration-300"
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
                    "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out",
                    "text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold",
                    "hover:bg-hoa-gold/10 dark:hover:bg-hoa-gold/10",
                    pathname.startsWith(item.href) && "text-hoa-gold bg-hoa-gold/10",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-300",
                      activeDropdown === item.name && "rotate-180",
                    )}
                  />
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-56 origin-top-left transition-all duration-300 ease-out",
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
                className="text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors duration-300"
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
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                      "text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold",
                      "hover:bg-hoa-gold/10 dark:hover:bg-hoa-gold/10",
                      pathname.startsWith(item.href) && "text-hoa-gold bg-hoa-gold/10",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors duration-300"
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
