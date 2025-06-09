import PageBanner from "@/components/page-banner"
import Footer from "@/components/footer"
import Header from "@/components/header"
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

export default function BusinessesPage() {
  const businesses = [
    {
      name: "Real Estate Development",
      icon: Building2,
      description:
        "Developing premium residential and commercial properties with a focus on sustainability and innovation.",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description:
        "State-of-the-art manufacturing facilities producing high-quality goods for domestic and international markets.",
    },
    {
      name: "Logistics & Supply Chain",
      icon: Truck,
      description: "End-to-end logistics solutions ensuring efficient movement of goods across the globe.",
    },
    {
      name: "Energy & Utilities",
      icon: Zap,
      description: "Investing in renewable energy and sustainable utility solutions for a greener future.",
    },
    {
      name: "Hospitality",
      icon: Home,
      description: "Luxury hospitality experiences that blend traditional values with modern comforts.",
    },
    {
      name: "Financial Services",
      icon: Briefcase,
      description: "Comprehensive financial solutions for businesses and individuals, focusing on long-term growth.",
    },
    {
      name: "Food & Beverages",
      icon: Utensils,
      description: "Quality food products and innovative culinary experiences that celebrate diverse flavors.",
    },
    {
      name: "Aviation",
      icon: Plane,
      description: "Premium aviation services and solutions for corporate and private clients.",
    },
    {
      name: "Insurance",
      icon: Shield,
      description: "Reliable insurance products designed to protect what matters most to our clients.",
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Advanced healthcare facilities and services focused on patient-centered care and wellness.",
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Educational institutions and programs that nurture future leaders and innovators.",
    },
    {
      name: "Sustainability",
      icon: Leaf,
      description: "Initiatives and businesses dedicated to environmental conservation and sustainable practices.",
    },
    {
      name: "Technology",
      icon: Smartphone,
      description: "Cutting-edge technology solutions that drive digital transformation and innovation.",
    },
    {
      name: "Engineering Services",
      icon: Wrench,
      description: "Expert engineering services across various sectors, delivering precision and excellence.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal">
      <Header />
      <PageBanner title="Business Verticals" subtitle="Our diversified portfolio of enterprises" />

      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">Our Businesses</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our diversified portfolio spans across 14 key industries, each contributing to our vision of sustainable
              growth and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((business, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-hoa-gold/30 dark:hover:border-hoa-gold/30"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <business.icon className="w-10 h-10 text-hoa-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-hoa-charcoal dark:text-white">{business.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{business.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
