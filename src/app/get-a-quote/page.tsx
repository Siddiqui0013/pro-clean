"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import ServiceProviders from "./components/ServiceProviders"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    apartmentSize: "",
    cleaningType: "Standard Cleaning",
    preferredDate: "",
    addOns: "NO",
    petsInHome: "NO",
    specialRequests: "",
  })

  const [showProviders, setShowProviders] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Basic form validation
    if (!formData.fullName || !formData.phoneNumber || !formData.address || !formData.apartmentSize) {
      alert("Please fill out all required fields")
      return
    }
    setShowProviders(true)
  }

  const handleReset = () => {
    setShowProviders(false)
  }

  if (showProviders) {
    return <ServiceProviders formData={formData} onReset={handleReset} />
  }


  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 mt-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/quoteBg.png')` }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-black">Book Your </span>
            <span className="text-teal-700">Sparkling Clean</span>
            <br />
            <span className="text-teal-700">Home </span>
            <span className="text-black">in Minutes!</span>
          </h1>
          <p className="text-xl text-gray-800">Let our AI match you with the perfect cleaner at the best price</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-teal-700 mb-8">Step-by-Step Booking Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Step 1: Client Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="apartmentSize" className="block w-full text-sm font-medium text-gray-700 mb-1">
                    Apartment / House Size
                  </label>
                  <Select
                    value={formData.apartmentSize}
                    onValueChange={(value) => handleSelectChange("apartmentSize", value)}
                  >
                    <SelectTrigger>
                      <SelectValue 
                      placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1bedroom">1 Bedroom</SelectItem>
                      <SelectItem value="2bedroom">2 Bedroom</SelectItem>
                      <SelectItem value="3bedroom">3 Bedroom</SelectItem>
                      <SelectItem value="4bedroom">4+ Bedroom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="cleaningType" className="block text-sm font-medium text-gray-700 mb-1">
                    Cleaning Type
                  </label>
                  <Select
                    value={formData.cleaningType}
                    onValueChange={(value) => handleSelectChange("cleaningType", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select cleaning type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Standard Cleaning">Standard Cleaning</SelectItem>
                      <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
                      <SelectItem value="Move-in/Move-out">Move-in/Move-out</SelectItem>
                      <SelectItem value="Post-Construction">Post-Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date & Time
                  </label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Step 2: Extra Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="addOns" className="block text-sm font-medium text-gray-700 mb-1">
                    Add-ons
                  </label>
                  <Select value={formData.addOns} onValueChange={(value) => handleSelectChange("addOns", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="YES/NO" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="YES">YES</SelectItem>
                      <SelectItem value="NO">NO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="petsInHome" className="block text-sm font-medium text-gray-700 mb-1">
                    Pet in home?
                  </label>
                  <Select
                    value={formData.petsInHome}
                    onValueChange={(value) => handleSelectChange("petsInHome", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="YES/NO" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="YES">YES</SelectItem>
                      <SelectItem value="NO">NO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requests
                  </label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Any special instructions..."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-2 rounded-md text-lg">
                Find
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}