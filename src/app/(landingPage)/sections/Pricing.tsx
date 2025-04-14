"use client"

import { useState } from "react"
import Link from "next/link"

export default function PricingSection() {

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-[#0a6259] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl mb-4">Our Pricing</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Choose From Our Lowest
          <br />
          Plans and Prices
        </h2>

        {/* Billing toggle */}
        <div className="inline-flex items-center bg-white rounded-full p-1 mb-16">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={
              `px-6 py-2 rounded-full text-sm font-medium transition-colors 
            ${billingCycle === "monthly" ? "bg-[#0a6259] text-white" : "bg-transparent text-[#0a6259]"}`
            }
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={
              `px-6 py-2 rounded-full text-sm font-medium transition-colors 
            ${billingCycle === "yearly" ? "bg-[#0a6259] text-white" : "bg-transparent text-[#0a6259]"}`
            }
          >
            Yearly
          </button>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Package */}
          <div className="bg-white rounded-lg overflow-hidden text-left text-gray-800">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">BASIC PACKAGE</h3>

              <div className="bg-[#0a6259] text-white p-4 rounded-md text-center mb-6">
                <span className="text-2xl">$</span>
                <span className="text-4xl font-bold">59.00</span>
                <span className="text-lg">/Monthly</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Dusting of all surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Sweeping and mopping floors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Vacuuming carpets and rugs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Cleaning of kitchen surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Cleaning of bathroom surfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Emptying trash bins</span>
                </li>
              </ul>

              <Link
                href="/book"
                className="block w-full text-black text-center border border-gray-300 py-3 rounded-md hover:bg-[#085449] hover:text-white transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white rounded-lg overflow-hidden text-left text-gray-800">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">ENTERPRISE PACKAGE</h3>

              <div className="bg-[#0a6259] text-white p-4 rounded-md text-center mb-6">
                <span className="text-2xl">$</span>
                <span className="text-4xl font-bold">69.00</span>
                <span className="text-lg">/Monthly</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>All services in the Basic Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Detailed dusting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Wiping down of kitchen appt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Cleaning inside the microwave</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Changing bed linens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Spot cleaning walls and doors</span>
                </li>
              </ul>

              <Link
                href="/book"
                className="block w-full text-black text-center border border-gray-300 py-3 rounded-md hover:bg-[#085449] hover:text-white transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-lg overflow-hidden text-left text-gray-800">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">PREMIUM PACKAGE</h3>

              <div className="bg-[#0a6259] text-white p-4 rounded-md text-center mb-6">
                <span className="text-2xl">$</span>
                <span className="text-4xl font-bold">99.00</span>
                <span className="text-lg">/Monthly</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>All services in the Clean Plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Deep cleaning of kitchen appt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>baseboards, door frames, & vents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Organization of closets pantries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Carpet, upholstery spot cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a6259] mr-2">•</span>
                  <span>Detailed bathroom cleaning</span>
                </li>
              </ul>

              <Link
                href="/book"
                className="block w-full text-black text-center border border-gray-300 py-3 rounded-md hover:bg-[#085449] hover:text-white transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}