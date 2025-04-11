"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - you can add your logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", source: "" })
    // Show success message
    alert("Thank you for contacting us! We'll get back to you soon.")
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Find us */}
        <div>
          <h2 className="text-4xl font-bold mb-12">Find us</h2>

          <div className="space-y-8">
            {/* Call Us */}
            <div className="flex items-start">
              <div className="bg-[#0a6259] text-white p-4 rounded-full mr-6">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-600">+(08) 255 201 888</p>
              </div>
            </div>

            {/* Email Now */}
            <div className="flex items-start">
              <div className="bg-[#0a6259] text-white p-4 rounded-full mr-6">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email Now</h3>
                <p className="text-gray-600">Hello@procleaning.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <div className="bg-[#0a6259] text-white p-4 rounded-full mr-6">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-600">7510, Brand Tower, New York, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Get in Touch */}
        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-[#0a6259]">Touch</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit
            netus.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a6259]"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a6259]"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a6259]"
              />
            </div>

            <div className="relative">
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                defaultValue={""}
                className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#0a6259]"
              >
                <option value="" disabled selected>
                  How did you find us?
                </option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend Referral</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a6259] text-white py-4 rounded-md font-semibold hover:bg-[#085449] transition-colors uppercase"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}