"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Download, AlertTriangle, DollarSign, Building, FileText, Eye } from "lucide-react"
import { getNotices } from "@/lib/crm"

interface Notice {
  id: number
  title: string
  date: string
  type: string
  description: string
  priority: "high" | "medium" | "low"
  documentUrl: string
}

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>("all")

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNotices()
        setNotices(data)
      } catch (error) {
        console.error("Error fetching notices:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNotices()
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
      case "Dividend":
        return <DollarSign className="w-5 h-5 text-hoa-gold" />
      case "Regulatory":
        return <FileText className="w-5 h-5 text-blue-600" />
      case "Corporate Action":
        return <Building className="w-5 h-5 text-purple-600" />
      default:
        return <FileText className="w-5 h-5 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Dividend":
        return "bg-hoa-gold/10 text-hoa-gold border-hoa-gold/20"
      case "Regulatory":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
      case "Corporate Action":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800"
      default:
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
    }
  }

  const filteredNotices = filter === "all" ? notices : notices.filter((notice) => notice.type === filter)

  const noticeTypes = ["all", "Dividend", "Regulatory", "Corporate Action"]

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-28 bg-gray-200 dark:bg-gray-700 rounded"></div>
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
              Investor Notices
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest regulatory filings, dividend announcements, corporate actions, and important
              notices affecting our shareholders.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-hoa-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {noticeTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === type
                    ? "bg-hoa-gold text-white"
                    : "bg-white dark:bg-hoa-charcoal/80 text-gray-700 dark:text-gray-300 hover:bg-hoa-gold/10 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {type === "all" ? "All Notices" : type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Notices Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {filteredNotices.map((notice, index) => (
              <div key={notice.id} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-hoa-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {getTypeIcon(notice.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-hoa-charcoal dark:text-white group-hover:text-hoa-gold transition-colors">
                            {notice.title}
                          </h3>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${getTypeColor(
                              notice.type,
                            )}`}
                          >
                            {notice.type}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded border ${getPriorityColor(
                              notice.priority,
                            )}`}
                          >
                            {notice.priority.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300 mb-3">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(notice.date)}</span>
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{notice.description}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => window.open(notice.documentUrl, "_blank")}
                        className="px-4 py-2 bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => window.open(notice.documentUrl, "_blank")}
                        className="px-4 py-2 border-2 border-hoa-gold text-hoa-gold hover:bg-hoa-gold hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No notices found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                No notices match the selected filter. Try selecting a different category.
              </p>
            </div>
          )}

          {/* Admin Upload Placeholder */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-sm italic text-gray-500 dark:text-gray-400">
                Admin upload area will be integrated via CRM.
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                Future functionality: Create notices, set priority levels, schedule publications, and manage document
                attachments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
