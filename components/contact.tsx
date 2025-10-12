"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#00ff88] uppercase tracking-wider">
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl font-bold text-[#00ff88]">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#00ff88] flex-shrink-0 mt-1" />
                <p className="text-[#f0f0f0]">
                  We come to you! Mobile service available throughout the metropolitan area.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                <p className="text-[#f0f0f0]">(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#00ff88] flex-shrink-0" />
                <p className="text-[#f0f0f0]">info@elitedetailing.com</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#00ff88] flex-shrink-0 mt-1" />
                <p className="text-[#f0f0f0]">Monday - Saturday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-[#1a1a1a] p-8 rounded-lg border border-[#00ff88]/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#00ff88] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#00ff88] mb-4">Thank You!</h3>
                <p className="text-[#f0f0f0]">
                  Your message has been sent successfully. We&apos;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#f0f0f0]">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    required
                    className="mt-2 bg-[#0a0a0a] border-white/10 text-[#f0f0f0] focus:border-[#00ff88]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#f0f0f0]">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-2 bg-[#0a0a0a] border-white/10 text-[#f0f0f0] focus:border-[#00ff88]"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#f0f0f0]">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-2 bg-[#0a0a0a] border-white/10 text-[#f0f0f0] focus:border-[#00ff88]"
                  />
                </div>
                <div>
                  <Label htmlFor="service" className="text-[#f0f0f0]">
                    Service Interested In
                  </Label>
                  <Input
                    id="service"
                    className="mt-2 bg-[#0a0a0a] border-white/10 text-[#f0f0f0] focus:border-[#00ff88]"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-[#f0f0f0]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 bg-[#0a0a0a] border-white/10 text-[#f0f0f0] focus:border-[#00ff88]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00cc6a] font-bold uppercase tracking-wider"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
