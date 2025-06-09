import PageBanner from "@/components/page-banner"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal">
      <Header />
      <PageBanner title="About Us" subtitle="Our story, vision, and values" />

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-6 font-serif">Our Story</h2>
            <p>
              House of Amaraa stands as a testament to visionary leadership and unwavering commitment to excellence.
              Founded on the principles of royalty, wisdom, and legacy, we have built a diversified portfolio that spans
              across multiple industries.
            </p>
            <p>
              Our journey is marked by strategic growth, innovative thinking, and a deep-rooted belief in creating value
              that transcends generations. We don't just build businesses; we craft legacies.
            </p>

            <h2 className="text-3xl font-bold text-hoa-charcoal dark:text-white mt-12 mb-6 font-serif">
              Vision & Mission
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-hoa-gold mb-3">Vision</h3>
              <p className="mb-6">
                To be the most respected and admired conglomerate, setting benchmarks in every industry we operate,
                while creating sustainable value for all stakeholders.
              </p>

              <h3 className="text-xl font-semibold text-hoa-gold mb-3">Mission</h3>
              <p>
                To leverage our collective wisdom and resources to build businesses that embody excellence, innovation,
                and social responsibility, leaving a lasting legacy for future generations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-hoa-charcoal dark:text-white mt-12 mb-6 font-serif">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800/30 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-hoa-gold mb-3">Royalty</h3>
                <p>We conduct ourselves with dignity and honor, treating everyone with respect and fairness.</p>
              </div>
              <div className="bg-white dark:bg-gray-800/30 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-hoa-gold mb-3">Wisdom</h3>
                <p>We make thoughtful decisions based on experience, knowledge, and foresight.</p>
              </div>
              <div className="bg-white dark:bg-gray-800/30 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-hoa-gold mb-3">Legacy</h3>
                <p>We build for the future, creating lasting value that extends beyond our time.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
