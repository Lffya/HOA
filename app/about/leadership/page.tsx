import Header from "@/components/header"
import Footer from "@/components/footer"
import { Linkedin, Mail, Award } from "lucide-react"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Alexandra Amaraa",
      title: "Chief Executive Officer",
      image: "/placeholder-user.jpg",
      bio: "A visionary leader with over 20 years of experience in transforming organizations and creating sustainable value. Alexandra's strategic acumen and commitment to excellence have positioned House of Amaraa as an industry leader.",
      story:
        "Alexandra's journey began with a simple belief: that business should be a force for positive change. Her leadership philosophy centers on empowering others to achieve their highest potential while maintaining unwavering ethical standards.",
      achievements: ["Forbes 40 Under 40", "CEO of the Year 2023", "Sustainability Leadership Award"],
    },
    {
      name: "Marcus Chen",
      title: "Chief Financial Officer",
      image: "/placeholder-user.jpg",
      bio: "A financial strategist par excellence, Marcus brings deep expertise in corporate finance, risk management, and strategic planning. His analytical prowess has been instrumental in our sustained growth.",
      story:
        "Marcus believes that financial stewardship is about more than numbers—it's about creating pathways to prosperity for all stakeholders while maintaining fiscal responsibility and transparency.",
      achievements: ["CPA Excellence Award", "CFO Innovation Prize", "Financial Leadership Recognition"],
    },
    {
      name: "Dr. Sarah Williams",
      title: "Chief Technology Officer",
      image: "/placeholder-user.jpg",
      bio: "A technology pioneer and innovation catalyst, Dr. Williams leads our digital transformation initiatives. Her expertise in emerging technologies positions us at the forefront of industry evolution.",
      story:
        "Sarah's passion for technology stems from its power to solve complex problems and create meaningful connections. She champions innovation that serves humanity while driving business excellence.",
      achievements: ["Tech Innovator of the Year", "AI Leadership Award", "Digital Transformation Excellence"],
    },
    {
      name: "James Rodriguez",
      title: "Chief Operating Officer",
      image: "/placeholder-user.jpg",
      bio: "An operational excellence expert, James ensures seamless execution of our strategic initiatives. His focus on efficiency and quality has optimized our operations across all business units.",
      story:
        "James understands that operational excellence is the bridge between vision and reality. His methodical approach and attention to detail ensure that our ambitious goals become tangible achievements.",
      achievements: ["Operations Excellence Award", "Process Innovation Leader", "Quality Management Champion"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-transparent to-hoa-charcoal/10 dark:from-hoa-gold/10 dark:to-hoa-charcoal/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Leadership
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Visionary minds united by purpose, driven by excellence, and committed to creating a legacy that
              transcends generations.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <div key={leader.name} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  {/* Leader Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-serif font-bold mb-1">{leader.name}</h3>
                      <p className="text-hoa-gold font-medium">{leader.title}</p>
                    </div>
                  </div>

                  {/* Leader Content */}
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{leader.bio}</p>

                    {/* Personal Story */}
                    <div className="mb-6">
                      <h4 className="text-lg font-serif font-bold text-hoa-charcoal dark:text-white mb-3">
                        Leadership Philosophy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">"{leader.story}"</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-serif font-bold text-hoa-charcoal dark:text-white mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-hoa-gold" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {leader.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-hoa-gold rounded-full mr-3"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex space-x-4">
                      <button className="flex items-center justify-center w-10 h-10 bg-hoa-gold hover:bg-hoa-gold/80 rounded-full text-white transition-colors duration-200">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="flex items-center justify-center w-10 h-10 bg-gray-600 hover:bg-gray-500 rounded-full text-white transition-colors duration-200">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Our Leadership Philosophy
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Leadership at House of Amaraa is defined by our commitment to excellence, integrity, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Visionary Thinking",
                description:
                  "We see beyond the horizon, anticipating future trends and positioning our organization for sustained success.",
              },
              {
                title: "Ethical Leadership",
                description:
                  "Every decision is guided by our moral compass, ensuring that success is achieved through honorable means.",
              },
              {
                title: "Empowerment Culture",
                description:
                  "We believe in unleashing the potential of every individual, creating an environment where excellence thrives.",
              },
            ].map((principle, index) => (
              <div
                key={principle.title}
                className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 200}`}
              >
                <div className="w-16 h-16 bg-hoa-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
