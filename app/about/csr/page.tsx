import Header from "@/components/header"
import Footer from "@/components/footer"
import { Globe, Heart, Leaf, GraduationCap, Users, Target } from "lucide-react"

export default function CSRPage() {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "Empowering communities through quality education and skill development programs",
      impact: "50,000+ students supported",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Leading sustainable practices and environmental conservation efforts",
      impact: "Carbon neutral by 2025",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Improving healthcare accessibility and quality in underserved communities",
      impact: "100+ healthcare centers",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through infrastructure and social programs",
      impact: "200+ communities impacted",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Community Health Director",
      message:
        "House of Amaraa's healthcare initiatives have transformed our community's access to quality medical care. Their commitment goes beyond funding—they truly partner with us for lasting change.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "James Thompson",
      role: "Environmental Scientist",
      message:
        "Their environmental stewardship program is setting new standards for corporate responsibility. The impact on local ecosystems has been remarkable and measurable.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Education Coordinator",
      message:
        "The education programs have opened doors for thousands of students. House of Amaraa doesn't just provide resources—they invest in dreams and futures.",
      image: "/placeholder-user.jpg",
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
              CSR Initiatives
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Creating positive impact that extends far beyond business—building a better world for current and future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* CSR Goals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Four pillars of social responsibility that guide our commitment to positive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={initiative.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-all duration-300 group text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <initiative.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{initiative.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-hoa-gold/10 rounded-full">
                    <Target className="w-4 h-4 text-hoa-gold mr-2" />
                    <span className="text-hoa-gold font-semibold text-sm">{initiative.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Map */}
      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Global Reach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our CSR initiatives span across continents, creating positive impact in communities worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Global impact map"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hoa-gold/20 to-transparent rounded-2xl"></div>
                {/* Interactive dots could be added here */}
                <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-hoa-gold rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-hoa-gold rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-hoa-gold rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-2">
                      25+ Countries
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our initiatives reach communities across five continents, adapting to local needs while
                      maintaining global standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-2">
                      1M+ Lives Impacted
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Through our comprehensive programs, we've directly improved the lives of over one million
                      individuals worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-hoa-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-2">
                      $100M+ Invested
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our commitment to social responsibility is backed by substantial investment in sustainable
                      development projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Voices of Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from the communities and partners who have experienced the transformative power of our initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-4xl text-hoa-gold mb-4 font-serif">"</div>
                  <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                    {testimonial.message}
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-hoa-charcoal dark:text-white">{testimonial.name}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-hoa-gold/10 to-hoa-charcoal/5 dark:from-hoa-gold/5 dark:to-hoa-charcoal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Together, we can create a world where business success and social impact go hand in hand. Partner with us
              to build a legacy of positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold rounded-lg transition-colors duration-200">
                Partner With Us
              </button>
              <button className="px-8 py-4 border-2 border-hoa-gold text-hoa-gold hover:bg-hoa-gold hover:text-white font-semibold rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
