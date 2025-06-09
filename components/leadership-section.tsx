import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Rajesh Mehra",
      title: "Chairperson",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Anita Kapoor",
      title: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vikram Singh",
      title: "Chief Financial Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Sharma",
      title: "Chief Operating Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Arjun Patel",
      title: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Meera Gupta",
      title: "Chief Human Resources Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section id="leadership" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-hoa-charcoal mb-8 font-serif">
            Leadership <span className="text-hoa-gold">Team</span>
          </h2>
          <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our leadership team brings together decades of experience, visionary thinking, and unwavering commitment to
            excellence across diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-hoa-gold/20 group-hover:border-hoa-gold transition-colors duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-hoa-charcoal mb-2 font-serif">{leader.name}</h3>
                <p className="text-hoa-gold font-semibold text-lg">{leader.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
