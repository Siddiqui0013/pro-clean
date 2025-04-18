import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function About() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Images */}
          <div className="rounded-lg overflow-hidden">
              <div className="col-span-2">
                <Image
                  src="/about.png"
                  alt="Professional cleaning team in green aprons"
                  width={500}
                  height={500}
                  // className="w-full h-full object-cover"/
                />
              </div>
            
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome To <span className="text-[#29766e]">Our Pro-cleaning</span> Company!
          </h1>

          <p className="text-gray-700 text-lg">
            We make your space shine! Professional and reliable cleaning service company providing top-notch solutions
            for homes and businesses. Satisfaction guaranteed!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <div className="bg-[#29766e] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Vetted professionals</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <div className="bg-[#29766e] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Affordable Prices</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <div className="bg-[#29766e] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Next day availability</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <div className="bg-[#29766e] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Best Quality</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <div className="bg-[#29766e] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Standard cleaning tasks</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
              <div className="bg-[#29766e] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span>Affordable Prices</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/book"
              className="bg-transparent border-primary hover:bg-[#0a6259] px-4 md:px-8 py-2 md:py-4 rounded-md text-[#0a6259] hover:text-white"
            >
              Book Now
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-primary hover:bg-[#0a6259] px-4 md:px-8 py-2 md:py-4 rounded-md text-[#0a6259] hover:text-white"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}