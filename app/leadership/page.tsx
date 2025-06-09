import PageBanner from "@/components/page-banner"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Rajesh Mehra",
      title: "Chairperson",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 30 years of experience in global business leadership, Rajesh has guided House of Amaraa through strategic growth and diversification.",
    },
    {
      name: "Anita Kapoor",
      title: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Anita brings innovative vision and operational excellence to HOA, driving sustainable growth across all business verticals.",
    },
    {
      name: "Vikram Singh",
      title: "Chief Financial Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Vikram oversees the financial strategy and operations, ensuring robust financial health and strategic investments.",
    },
    {
      name: "Priya Sharma",
      title: "Chief Operating Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Priya leads operational excellence across all business units, optimizing processes and driving efficiency.",
    },
    {
      name: "Arjun Patel",
      title: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Arjun spearheads technological innovation and digital transformation initiatives across the organization.",
    },
    {
      name: "Meera Gupta",
      title: "Chief Human Resources Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Meera develops and implements people strategies that align with our values and business objectives.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal">
      <Header />
      <PageBanner title="Leadership Team" subtitle="The visionaries guiding our journey" />

      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">
              Executive Leadership
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience, visionary thinking, and unwavering commitment
              to excellence across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800/30"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-hoa-gold/20 group-hover:border-hoa-gold transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-hoa-charcoal dark:text-white mb-2 font-serif">
                    {leader.name}
                  </h3>
                  <p className="text-hoa-gold font-semibold text-lg mb-4">{leader.title}</p>
                  <p className="text-gray-600 dark:text-gray-300">{leader.bio}</p>
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
