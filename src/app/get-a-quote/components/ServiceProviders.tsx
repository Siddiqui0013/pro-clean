import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Star, MapPin, DollarSign } from 'lucide-react'

// Mock data for service providers
const serviceProviders = [
  {
    id: 1,
    name: "Emily Johnson",
    rating: 4.8,
    location: "Downtown",
    estimatedPrice: 89,
    specialties: ["Deep Cleaning", "Move-out Cleaning"],
    experience: 5,
    availability: "Next 2 days"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    rating: 4.6,
    location: "Midtown",
    estimatedPrice: 79,
    specialties: ["Standard Cleaning", "Post-Construction"],
    experience: 3,
    availability: "Next 3 days"
  },
  {
    id: 3,
    name: "Sarah Kim",
    rating: 4.9,
    location: "Uptown",
    estimatedPrice: 95,
    specialties: ["Deep Cleaning", "Pet-Friendly"],
    experience: 7,
    availability: "Next day"
  }
]

interface ServiceProvidersProps {
  onReset: () => void;
}

interface ServiceProvidersProps {
  formData: {
    fullName: string,
    phoneNumber: string,
    address: string,
    apartmentSize: string,
    cleaningType: string,
    preferredDate: string,
    addOns: string,
    petsInHome: string,
    specialRequests: string,
  }
  onReset: () => void;
}

// export default function ServiceProviders({ onReset }: ServiceProvidersProps) {
export default function ServiceProviders({ formData, onReset }: ServiceProvidersProps) {
  const [selectedProvider, setSelectedProvider] = useState<typeof serviceProviders[number] | null>(null)

  const handleBookNow = (provider: typeof serviceProviders[number]) => {
    setSelectedProvider(provider)
    // You could add additional booking logic here
  }

  console.log(selectedProvider);
  console.log(formData);

  return (
    <div 
      className="min-h-screen mt-20 bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/quoteBg.png')` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-black">Your Perfect </span>
            <span className="text-teal-700">Cleaning Match</span>
          </h1>
          <p className="text-xl text-gray-800">Based on your requirements</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceProviders.map((provider) => (
            <div 
              key={provider.id} 
              className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-teal-700">{provider.name}</h2>
                <div className="flex items-center text-yellow-500">
                  <Star className="mr-1" fill="currentColor" />
                  <span>{provider.rating}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-2 text-teal-600" size={20} />
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="mr-2 text-green-600" size={20} />
                  <span>Estimated Price: ${provider.estimatedPrice}</span>
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Experience:</strong> {provider.experience} years
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Specialties:</strong> {provider.specialties.join(", ")}
                </div>
                <div className="text-sm text-gray-500">
                  <strong>Availability:</strong> {provider.availability}
                </div>
              </div>

              <Button 
                onClick={() => handleBookNow(provider)}
                className="w-full bg-teal-700 hover:bg-teal-800 text-white"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={onReset} 
            variant="outline" 
            className="border-teal-700 text-teal-700 hover:bg-teal-50"
          >
            Modify Search
          </Button>
        </div>
      </div>
    </div>
  )
}