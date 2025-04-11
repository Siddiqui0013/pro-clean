"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    title: "Business Man",
    rating: 5,
    text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Homeowner",
    rating: 5,
    text: "I've tried several cleaning services before, but ProClean is by far the best. Their attention to detail is impressive, and they're always consistent. My house has never looked better!",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Office Manager",
    rating: 5,
    text: "We hired ProClean for our office space, and the results were outstanding. The team is professional, efficient, and thorough. Our employees love coming to a clean workspace every day.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Heading and description */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Feedback About Their Experience With Us</h2>
          <p className="text-gray-700 text-lg">
            Read testimonials from our satisfied clients. See how our cleaning services have made a difference in their
            lives and homes
          </p>
          <div className="flex space-x-4 pt-4">
            <button
              onClick={goToPrevious}
              className="p-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-4 bg-[#0a6259] text-white rounded-md hover:bg-[#085449] transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right side - Testimonial card */}
        <div className="relative border-t-8 border-r-8 border-b-1 border-l-1 border-[#0a6259] rounded-lg p-6 bg-white">
          <div className="absolute top-4 right-4 bg-[#0a6259] text-white p-2 rounded">
            <Quote className="h-6 w-6" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{currentTestimonial.name}</h3>
                <p className="text-gray-600">{currentTestimonial.title}</p>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < currentTestimonial.rating ? "#FF9800" : "#e6e6e6"}
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{currentTestimonial.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}