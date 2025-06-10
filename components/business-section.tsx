import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Factory,
  Truck,
  Zap,
  Home,
  Briefcase,
  Utensils,
  Plane,
  Shield,
  Heart,
  GraduationCap,
  Leaf,
  Smartphone,
  Wrench,
} from "lucide-react"

export default function BusinessSection() {
  const businesses = [
    { name: "Real Estate Development", icon: Building2 },
    { name: "Manufacturing", icon: Factory },
    { name: "Logistics & Supply Chain", icon: Truck },
    { name: "Energy & Utilities", icon: Zap },
    { name: "Hospitality", icon: Home },
    { name: "Financial Services", icon: Briefcase },
    { name: "Food & Beverages", icon: Utensils },
    { name: "Aviation", icon: Plane },
    { name: "Insurance", icon: Shield },
    { name: "Healthcare", icon: Heart },
    { name: "Education", icon: GraduationCap },
    { name: "Sustainability", icon: Leaf },
    { name: "Technology", icon: Smartphone },
    { name: "Engineering Services", icon: Wrench },
  ]

  return (
    <section id="businesses" className="py-24 bg-white dark:bg-hoa-charcoal transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
            Business <span className="text-hoa-gold">Verticals</span>
          </h2>
          <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diversified portfolio spans across 14 key industries, each contributing to our vision of sustainable
            growth and excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {businesses.map((business, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-hoa-gold/30 dark:hover:border-hoa-gold/30 bg-white dark:bg-hoa-charcoal/50"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <business.icon className="w-12 h-12 mx-auto text-hoa-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-hoa-charcoal dark:text-white leading-tight">
                  {business.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
