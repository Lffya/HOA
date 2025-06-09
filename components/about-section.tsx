export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-hoa-charcoal mb-8 font-serif">
            About <span className="text-hoa-gold">House of Amaraa</span>
          </h2>

          <div className="w-24 h-1 bg-hoa-gold mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div>
              <h3 className="text-2xl font-bold text-hoa-charcoal mb-6 font-serif">Our Story</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                House of Amaraa stands as a testament to visionary leadership and unwavering commitment to excellence.
                Founded on the principles of royalty, wisdom, and legacy, we have built a diversified portfolio that
                spans across multiple industries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey is marked by strategic growth, innovative thinking, and a deep-rooted belief in creating
                value that transcends generations. We don't just build businesses; we craft legacies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-hoa-charcoal mb-6 font-serif">Vision & Mission</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-hoa-gold mb-3">Vision</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the most respected and admired conglomerate, setting benchmarks in every industry we operate,
                    while creating sustainable value for all stakeholders.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-hoa-gold mb-3">Mission</h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To leverage our collective wisdom and resources to build businesses that embody excellence,
                    innovation, and social responsibility, leaving a lasting legacy for future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
