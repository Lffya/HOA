import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import LeadershipSection from "@/components/leadership-section"
import BusinessSection from "@/components/business-section"
import CSRSection from "@/components/csr-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal transition-colors duration-400">
      <Header />
      <HeroSection />
      <AboutSection />
      <LeadershipSection />
      <BusinessSection />
      <CSRSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
