import PageBanner from "@/components/page-banner"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsPage() {
  const breadcrumbs = [{ name: "About Us" }]

  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal transition-colors duration-400">
      <Header />
      <PageBanner
        title="About Us"
        subtitle="Our story, vision, and values that define who we are"
        breadcrumbs={breadcrumbs}
      />

      <main className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Our Story Section */}
          <div className="mb-20 animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">
                Our <span className="text-hoa-gold">Story</span>
              </h2>
              <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up animation-delay-200">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  House of Amaraa stands as a testament to visionary leadership and unwavering commitment to excellence.
                  Founded on the principles of royalty, wisdom, and legacy, we have built a diversified portfolio that
                  spans across multiple industries.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our journey is marked by strategic growth, innovative thinking, and a deep-rooted belief in creating
                  value that transcends generations. We don't just build businesses; we craft legacies.
                </p>
              </div>
              <div className="animate-scale-in animation-delay-400">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="House of Amaraa Story"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission Section */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">
                Vision & <span className="text-hoa-gold">Mission</span>
              </h2>
              <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-hoa-gold/5 to-hoa-gold/10 dark:from-hoa-gold/10 dark:to-hoa-gold/5 border-hoa-gold/20 hover:shadow-xl transition-all duration-500 animate-fade-in-up animation-delay-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-hoa-gold mb-4 font-serif">Vision</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To be the most respected and admired conglomerate, setting benchmarks in every industry we operate,
                    while creating sustainable value for all stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-hoa-charcoal/5 to-hoa-charcoal/10 dark:from-gray-800/50 dark:to-gray-700/30 border-hoa-charcoal/20 dark:border-gray-600/30 hover:shadow-xl transition-all duration-500 animate-fade-in-up animation-delay-400">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-hoa-charcoal dark:text-white mb-4 font-serif">Mission</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    To leverage our collective wisdom and resources to build businesses that embody excellence,
                    innovation, and social responsibility, leaving a lasting legacy for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="animate-fade-in-up animation-delay-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">
                Our <span className="text-hoa-gold">Values</span>
              </h2>
              <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Royalty",
                  description:
                    "We conduct ourselves with dignity and honor, treating everyone with respect and fairness.",
                  delay: "animation-delay-200",
                },
                {
                  title: "Wisdom",
                  description: "We make thoughtful decisions based on experience, knowledge, and foresight.",
                  delay: "animation-delay-400",
                },
                {
                  title: "Legacy",
                  description: "We build for the future, creating lasting value that extends beyond our time.",
                  delay: "animation-delay-600",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-800/30 hover:-translate-y-2 animate-scale-in ${value.delay}`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-hoa-gold to-hoa-gold/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white font-serif">{value.title[0]}</span>
                    </div>
                    <h3 className="text-xl font-bold text-hoa-gold mb-4 font-serif">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
