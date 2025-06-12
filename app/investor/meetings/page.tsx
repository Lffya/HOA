"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin, Download, Users, CheckCircle, AlertCircle } from "lucide-react"
import { getMeetings } from "@/lib/crm"

interface Meeting {
  id: number
  title: string
  date: string
  time: string
  agenda: string
  location: string
  status: "upcoming" | "completed"
  minutesUrl: string | null
  presentationUrl: string | null
}

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState<Meeting[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const data = await getMeetings()
        setMeetings(data)
      } catch (error) {
        console.error("Error fetching meetings:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMeetings()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusIcon = (status: string) => {
    return status === "completed" ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : (
      <AlertCircle className="w-5 h-5 text-blue-500" />
    )
  }

  const getStatusColor = (status: string) => {
    return status === "completed"
      ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
      : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
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
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
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
              Investor Meetings
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay informed about upcoming investor meetings, access meeting minutes, and review presentation materials
              from our corporate events.
            </p>
          </div>
        </div>
      </section>

      {/* Meetings Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {meetings.map((meeting, index) => (
              <div key={meeting.id} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hoa-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-hoa-gold" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-hoa-charcoal dark:text-white">{meeting.title}</h3>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                              meeting.status,
                            )}`}
                          >
                            {meeting.status === "completed" ? "Completed" : "Upcoming"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-300 mb-4">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(meeting.date)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{meeting.time}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{meeting.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    {getStatusIcon(meeting.status)}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-hoa-charcoal dark:text-white mb-3">Agenda</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{meeting.agenda}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      {meeting.minutesUrl && (
                        <button
                          onClick={() => window.open(meeting.minutesUrl!, "_blank")}
                          className="px-4 py-2 bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Minutes</span>
                        </button>
                      )}
                      {meeting.presentationUrl && (
                        <button
                          onClick={() => window.open(meeting.presentationUrl!, "_blank")}
                          className="px-4 py-2 border-2 border-hoa-gold text-hoa-gold hover:bg-hoa-gold hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Presentation</span>
                        </button>
                      )}
                    </div>
                    {meeting.status === "upcoming" && (
                      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                        RSVP
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Upload Placeholder */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-sm italic text-gray-500 dark:text-gray-400">
                Admin upload area will be integrated via CRM.
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                Future functionality: Schedule meetings, upload agendas, manage RSVPs, and publish meeting materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
