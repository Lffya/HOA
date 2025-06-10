export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      />

      {/* Enhanced Overlay for Dark Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoa-charcoal/90 via-hoa-charcoal/70 to-hoa-gold/30 dark:from-hoa-charcoal/95 dark:via-hoa-charcoal/85 dark:to-hoa-gold/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-serif tracking-wide">
          HOUSE OF
          <br />
          <span className="text-hoa-gold">AMARAA</span>
        </h1>

        <div className="w-24 h-1 bg-hoa-gold mx-auto mb-8" />

        <p className="text-2xl md:text-3xl text-white/95 font-light tracking-wider">Royalty. Wisdom. Legacy.</p>

        <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">
          Building tomorrow's legacy through visionary leadership and unwavering commitment to excellence
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
