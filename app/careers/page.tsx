"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp, Users, Target, Heart, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CareersPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const applicationSteps = [
    {
      step: 1,
      title: "Discover Opportunities",
      description: "Explore openings across divisions like Agriculture, Security, Aviation, Automotive, IT, and more.",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Prepare Your Application",
      description:
        "Customize your resume and cover letter to the role. Highlight your values and alignment with our mission.",
      icon: "📝",
    },
    {
      step: 3,
      title: "Submit Your Application",
      description: "Apply via our online portal. Ensure details are accurate and up-to-date.",
      icon: "📤",
    },
    {
      step: 4,
      title: "The Interview Process",
      description: "Engaging and value-based interviews with competency and situational questions.",
      icon: "💬",
    },
    {
      step: 5,
      title: "Offer & Onboarding",
      description: "Once selected, we guide you through onboarding to immerse you into our culture.",
      icon: "🎉",
    },
  ]

  const faqs = [
    {
      question: "What types of jobs are available?",
      answer:
        "From agriculture to IT, we offer diverse opportunities across all our subsidiaries including Agriculture, Security, Aviation, Automotive, IT Services, Food & Beverages, and many more divisions.",
    },
    {
      question: "Can I apply for multiple positions?",
      answer:
        "Yes, you can apply for multiple positions. We encourage you to tailor your application to each specific role to highlight relevant skills and experience.",
    },
    {
      question: "What is your diversity approach?",
      answer:
        "We promote an inclusive and innovative workplace where diverse perspectives are valued. We believe unique voices make us stronger and drive innovation across all our operations.",
    },
    {
      question: "How can I stay updated on new opportunities?",
      answer:
        "Subscribe to our job alerts through our careers portal or follow us on social media platforms for the latest updates on new positions and company news.",
    },
    {
      question: "What benefits do you offer?",
      answer:
        "We offer comprehensive benefits including health insurance, professional development opportunities, flexible working arrangements, and performance-based incentives.",
    },
    {
      question: "What is the company culture like?",
      answer:
        "Our culture is built on the pillars of integrity, innovation, collaboration, and excellence. We foster an environment of continuous learning and mutual respect.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
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
              Careers at Amaraa Holding
            </h1>
            <p className="text-xl sm:text-2xl text-hoa-gold font-serif mb-8">Your Journey Begins Here</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Amaraa Holding, we believe that our people are our greatest asset. We are a family of passionate
              professionals united by our mission: to create a sustainable and prosperous future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white dark:bg-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Why Choose Amaraa Holding?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a legacy of excellence where your career becomes part of our greater story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Diverse Opportunities",
                description: "Explore careers across 21+ subsidiaries spanning multiple industries and sectors.",
                color: "from-blue-500 to-indigo-500",
              },
              {
                icon: Target,
                title: "Purpose-Driven Work",
                description: "Contribute to meaningful projects that create positive impact in communities worldwide.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Heart,
                title: "Inclusive Culture",
                description: "Thrive in an environment that values diversity, innovation, and personal growth.",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Award,
                title: "Excellence Recognition",
                description: "Be part of an award-winning organization that celebrates achievement and innovation.",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((benefit, index) => (
              <div key={benefit.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-all duration-300 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your journey to joining our family follows a thoughtful and comprehensive process
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-hoa-gold/30 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {applicationSteps.map((step, index) => (
                <div key={step.step} className={`relative animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
                  <div className={`lg:flex items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="lg:w-1/2 lg:px-8">
                      <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-hoa-gold rounded-full flex items-center justify-center text-2xl mr-6">
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-sm text-hoa-gold font-semibold mb-1">Step {step.step}</div>
                            <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2"></div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-hoa-gold rounded-full border-4 border-white dark:border-hoa-charcoal hidden lg:block top-12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about careers at Amaraa Holding
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-hoa-charcoal/80 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-hoa-charcoal dark:text-white pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-hoa-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-hoa-gold flex-shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-hoa-gold/10 to-hoa-beige/20 dark:from-hoa-gold/5 dark:to-hoa-charcoal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join our family of passionate professionals and become part of a legacy that's shaping the future.
            </p>
            <button className="px-12 py-4 bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Join Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
