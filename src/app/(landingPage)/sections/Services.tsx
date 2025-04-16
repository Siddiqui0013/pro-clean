import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">We Always Provide The Best Service</h2>
        </div>
        <div>
          <div className="bg-white">
            <h3 className="text-2xl font-semibold mb-4">Services</h3>
            <p className="text-gray-700">
              While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning
              services:
            </p>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-200 mb-12"></div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <button className="absolute right-0 top-[30%] translate-x-1/2 -translate-y-1/2 bg-teal-700 text-white p-4 rounded-full hidden md:flex items-center justify-center z-10">
          <ArrowRight className="h-6 w-6" />
        </button>

        {/* Office Cleaning Card */}
        <div className="bg-white overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src="/services1.png"
              alt="Office cleaning service with professionals cleaning a kitchen counter"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">Office Cleaning</h3>
            <p className="text-gray-700 mb-6">
              While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning
              services:
            </p>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-teal-700 hover:text-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium"
            >
              Book Now <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Spring Cleaning Card */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src="/services2.png"
              alt="Spring cleaning service with team of cleaners in a living room"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">Spring Cleaning</h3>
            <p className="text-gray-700 mb-6">
              While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning
              services:
            </p>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-teal-700 hover:text-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium"
            >
              Book Now <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* House Cleaning Card */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src="/services3.png"
              alt="House cleaning service with professional holding cleaning supplies"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6">
            <h3 className="text-2xl font-semibold text-teal-700 mb-4">House Cleaning</h3>
            <p className="text-gray-700 mb-6">
              While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning
              services:
            </p>
            <Link
              href="#"
              className="inline-flex items-center hover:bg-teal-700 hover:text-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium"
            >
              Book Now <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}