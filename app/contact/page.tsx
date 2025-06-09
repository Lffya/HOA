"use client"

import type React from "react"

import { useState } from "react"
import PageBanner from "@/components/page-banner"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-hoa-charcoal">
      <Header />
      <PageBanner title="Contact Us" subtitle="Get in touch with our team" />

      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
                Contact Information
              </h3>

              <div className="space-y-6">
                <Card className="border-0 shadow-sm bg-white dark:bg-gray-800/30">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-hoa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-2">Address</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        715, Samarth Aishwarya,
                        <br />
                        Oshiwara, Andheri West,
                        <br />
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white dark:bg-gray-800/30">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-hoa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-2">Phone</h4>
                      <p className="text-gray-700 dark:text-gray-300">+91 22 1234 5678</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-white dark:bg-gray-800/30">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-hoa-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-hoa-charcoal dark:text-white mb-2">Email</h4>
                      <p className="text-gray-700 dark:text-gray-300">info@houseofamaraa.com</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg bg-white dark:bg-gray-800/30">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-hoa-charcoal dark:text-white mb-8 font-serif">
                    Send us a Message
                  </h3>

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
                      className="w-full bg-hoa-gold hover:bg-hoa-gold/90 text-white font-semibold py-3 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
