"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Download, FileText, Calendar, TrendingUp } from "lucide-react"
import { getFinancials } from "@/lib/crm"

interface Financial {
  id: number
  title: string
  date: string
  type: string
  fileSize: string
  downloadUrl: string
}

export default function FinancialsPage() {
  const [financials, setFinancials] = useState<Financial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFinancials = async () => {
      try {
        const data = await getFinancials()
        setFinancials(data)
      } catch (error) {
        console.error("Error fetching financials:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFinancials()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Annual Report":
        return <TrendingUp className="w-5 h-5 text-hoa-gold" />
      case "Quarterly Report":
        return <Calendar className="w-5 h-5 text-hoa-gold" />
      default:
        return <FileText className="w-5 h-5 text-hoa-gold" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Annual Report":
        return "bg-hoa-gold/10 text-hoa-gold border-hoa-gold/20"
      case "Quarterly Report":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hoa-gold/20 via-hoa-beige/30 to-white dark:from-hoa-gold/10 dark:via-hoa-charcoal/20 dark:to-hoa-charcoal"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Investor Financials
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Access comprehensive financial reports, earnings statements, and performance data that showcase our
              commitment to transparency and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Financials Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {financials.map((financial, index) => (
              <div key={financial.id} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-hoa-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {getTypeIcon(financial.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-hoa-charcoal dark:text-white group-hover:text-hoa-gold transition-colors">
                            {financial.title}
                          </h3>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${getTypeColor(
                              financial.type,
                            )}`}
                          >
                            {financial.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(financial.date)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <FileText className="w-4 h-4" />
                            <span>{financial.fileSize}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(financial.downloadUrl, "_blank")}
                      className="px-6 py-3 bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Upload Placeholder */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-sm italic text-gray-500 dark:text-gray-400">
                Admin upload area will be integrated via CRM.
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                Future functionality: Upload financial documents, set publication dates, and manage investor access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
