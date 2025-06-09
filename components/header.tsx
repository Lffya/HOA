"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      name: "About Us",
      href: "/about",
      subItems: [
        { name: "Our Story", href: "/about/story" },
        { name: "Vision & Mission", href: "/about/vision" },
        { name: "Our Values", href: "/about/values" },
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
      if (window.scrollY > 10) {
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/95 dark:bg-hoa-charcoal/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-hoa-gold font-serif">
              HOUSE OF AMARAA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors duration-300 font-medium",
                        pathname === item.href && "text-hoa-gold",
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-3 p-4">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subItem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-hoa-charcoal dark:text-white hover:text-hoa-gold dark:hover:text-hoa-gold transition-colors duration-300 font-medium flex items-center justify-between",
                      pathname === item.href && "text-hoa-gold",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </Link>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-hoa-gold dark:hover:text-hoa-gold"
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
        )}
      </div>
    </header>
  )
}
