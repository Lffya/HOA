import PageBanner from "@/components/page-banner"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, Leaf, Users } from "lucide-react"

export default function CSRPage() {
  const initiatives = [
    {
      icon: Heart,
      title: "Healthcare Access",
      description:
        "Providing quality healthcare services to underserved communities through mobile clinics and health awareness programs.",
    },
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description:
        "Supporting educational infrastructure and scholarship programs to empower the next generation of leaders.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Implementing sustainable practices and green technologies across all our business operations.",
    },
    {
      icon: Users,
      title: "Community Development",
      description:
        "Investing in local communities through skill development programs and economic empowerment initiatives.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal">
      <Header />
      <PageBanner title="Corporate Social Responsibility" subtitle="Creating positive impact in communities" />

      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">
              Our CSR Initiatives
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to social responsibility drives us to create positive impact in communities, environment,
              and society at large.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <initiative.icon className="w-16 h-16 mx-auto text-hoa-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-hoa-charcoal dark:text-white mb-4 font-serif">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif text-center">
                Our Impact Goals
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-hoa-gold mb-2">50,000+</div>
                  <div className="text-gray-700 dark:text-gray-300">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hoa-gold mb-2">100+</div>
                  <div className="text-gray-700 dark:text-gray-300">Communities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hoa-gold mb-2">25%</div>
                  <div className="text-gray-700 dark:text-gray-300">Carbon Footprint Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
