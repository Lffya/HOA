import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { FileText, Users, Bell, TrendingUp, Calendar, Download } from "lucide-react"

export default function InvestorPage() {
  const investorSections = [
    {
      title: "Financial Reports",
      description: "Access comprehensive financial statements, annual reports, and quarterly earnings data.",
      icon: FileText,
      href: "/investor/financials",
      color: "from-hoa-gold to-amber-500",
      stats: "Latest: FY 2024 Annual Report",
    },
    {
      title: "Investor Meetings",
      description: "Stay informed about upcoming meetings, access agendas, and download presentation materials.",
      icon: Users,
      href: "/investor/meetings",
      color: "from-hoa-rose to-hoa-rose/70",
      stats: "Next: Q4 2024 Earnings Call",
    },
    {
      title: "Regulatory Notices",
      description: "Important announcements, dividend declarations, and regulatory filings for shareholders.",
      icon: Bell,
      href: "/investor/notices",
      color: "from-hoa-charcoal to-gray-700",
      stats: "6 Recent Notices",
    },
  ]

  const quickStats = [
    { label: "Market Cap", value: "₹25,000 Cr", icon: TrendingUp },
    { label: "Annual Revenue", value: "₹12,500 Cr", icon: FileText },
    { label: "Dividend Yield", value: "4.2%", icon: Download },
    { label: "P/E Ratio", value: "18.5x", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-hoa-beige/30 to-white dark:from-hoa-gold/10 dark:via-hoa-charcoal/20 dark:to-hoa-charcoal"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transparency, accountability, and sustainable growth. Access comprehensive financial information,
              regulatory updates, and investor communications from House of Amaraa.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white dark:bg-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">Key Metrics</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Current financial highlights and performance indicators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={stat.label} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-hoa-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-hoa-gold" />
                  </div>
                  <div className="text-2xl font-bold text-hoa-gold mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Sections */}
      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">Investor Resources</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access all the information you need to make informed investment decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {investorSections.map((section, index) => (
              <div key={section.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <Link href={section.href}>
                  <div className="group cursor-pointer">
                    <div className="bg-white dark:bg-hoa-charcoal/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className={`bg-gradient-to-br ${section.color} p-8 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative z-10">
                          <section.icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="text-2xl font-serif font-bold mb-2">{section.title}</h3>
                          <p className="text-white/90 text-sm">{section.stats}</p>
                        </div>
                      </div>
                      <div className="p-8">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{section.description}</p>
                        <div className="flex items-center text-hoa-gold font-semibold group-hover:text-hoa-gold/80 transition-colors">
                          <span>Explore</span>
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-hoa-charcoal/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Investor Relations Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Have questions about our financial performance or need additional information? Our investor relations team
              is here to help.
            </p>
            <div className="bg-gradient-to-br from-hoa-gold/10 to-hoa-beige/20 dark:from-hoa-gold/5 dark:to-hoa-charcoal/10 p-8 rounded-2xl border border-hoa-gold/20">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-bold text-hoa-charcoal dark:text-white mb-4">Investor Relations Team</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>
                      <strong>Email:</strong> investors@amaraaholding.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 22 1234 5678
                    </p>
                    <p>
                      <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hoa-charcoal dark:text-white mb-4">Mailing Address</h3>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p>House of Amaraa</p>
                    <p>715, Samarth Aishwarya</p>
                    <p>Oshiwara, Andheri West</p>
                    <p>Mumbai, Maharashtra 400053</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
