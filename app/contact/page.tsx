"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, MapPin, Send, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      email: "info@amaraaholding.com",
      description: "For general questions about our services and operations",
    },
    {
      icon: Mail,
      title: "Careers",
      email: "careers@amaraaholding.com",
      description: "Join our team and explore exciting career opportunities",
    },
    {
      icon: Mail,
      title: "Media Inquiries",
      email: "media@amaraaholding.com",
      description: "Press releases, media kits, and interview requests",
    },
    {
      icon: Mail,
      title: "Feedback & Suggestions",
      email: "feedback@amaraaholding.com",
      description: "Share your thoughts and help us improve our services",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      email: "visit@amaraaholding.com",
      description: "To schedule a meeting, email us to arrange your visit",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
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
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every connection is a chapter in our shared journey of innovation and impact. We value every message,
              inquiry, and collaboration that comes our way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={method.title} className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-hoa-gold rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-hoa-charcoal dark:text-white">{method.title}</h3>
                  </div>
                  <a
                    href={`mailto:${method.email}`}
                    className="text-hoa-gold hover:text-hoa-gold/80 font-semibold text-lg mb-4 block transition-colors duration-200"
                  >
                    {method.email}
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Social Media */}
      <section className="py-16 bg-gradient-to-br from-hoa-beige/50 to-white dark:from-hoa-charcoal/30 dark:to-hoa-charcoal/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-serif font-bold text-hoa-charcoal dark:text-white mb-8">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-hoa-charcoal text-hoa-charcoal dark:text-white focus:border-hoa-gold focus:ring-hoa-gold"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="media">Media Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-hoa-charcoal dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-gray-300 dark:border-gray-600 focus:border-hoa-gold focus:ring-hoa-gold"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hoa-gold hover:bg-hoa-gold/80 text-white font-semibold py-3 text-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Social Media and Additional Info */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="space-y-8">
                {/* Social Media */}
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">
                    Connect With Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Follow our journey and stay updated with the latest news, insights, and opportunities from Amaraa
                    Holding.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 hover:scale-110`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-white dark:bg-hoa-charcoal/80 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-serif font-bold text-hoa-charcoal dark:text-white mb-6">Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Monday - Friday</span>
                      <span className="text-hoa-charcoal dark:text-white font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Saturday</span>
                      <span className="text-hoa-charcoal dark:text-white font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Sunday</span>
                      <span className="text-hoa-charcoal dark:text-white font-semibold">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    *Times are in local timezone. For urgent matters outside office hours, please email us.
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-hoa-gold/10 to-hoa-beige/20 dark:from-hoa-gold/5 dark:to-hoa-charcoal/10 p-8 rounded-2xl border border-hoa-gold/20">
                  <h3 className="text-2xl font-serif font-bold text-hoa-charcoal dark:text-white mb-4">
                    Response Commitment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We value your time and strive to respond to all inquiries within 24 hours during business days. For
                    urgent matters, please call our main office line.
                  </p>
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
