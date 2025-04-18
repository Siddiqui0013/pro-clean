import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Star } from "lucide-react";

export default function page() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

    {/* Office Cleaning Card */}
    <div className="bg-gray-50 overflow-hidden ">
      <div className="aspect-[4/3] relative">
        <Image
          src="/team1.png"
          alt="Office cleaning service with professionals cleaning a kitchen counter"
          width={400}
          height={300}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold  mb-4">Erik Smith</h3>
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
            </div>
        <p className=" mb-6">
        She is an expert cleaning staff member who provides thorough cleaning with precision,
        </p>
        <div className="flex items-center space-x-3 mb-4">
          <Facebook className="h-6 w-6  " />
          <Instagram className="h-6 w-6  " />
          <Twitter className="h-6 w-6  " />
          <Linkedin className="h-6 w-6  " />
        </div>
      </div>
    </div>

    <div className="bg-gray-50 overflow-hidden">
      <div className="aspect-[4/3] relative">
        <Image
          src="/team2.png"
          alt="Office cleaning service with professionals cleaning a kitchen counter"
          width={400}
          height={300}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold   mb-4">John Doe</h3>
        <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
            </div>            <p className="text-gray-700 mb-6">
        He is an expert cleaning staff member who provides thorough cleaning with precision,
        </p>
        <div className="flex items-center space-x-3 mb-4">
          <Facebook className="h-6 w-6  " />
          <Instagram className="h-6 w-6  " />
          <Twitter className="h-6 w-6  " />
          <Linkedin className="h-6 w-6  " />
        </div>
      </div>
    </div>

    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <div className="aspect-[4/3] relative">
        <Image
          src="/team3.png"
          alt="Office cleaning service with professionals cleaning a kitchen counter"
          width={400}
          height={300}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold   mb-4">Erik Smith</h3>
        <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
              <Star className="h-6 w-6 text-yellow-500" fill="#fbbf24" />
            </div>
        <p className="text-gray-700 mb-6">
        He is an expert cleaning staff member who provides thorough cleaning with precision,
        </p>
        <div className="flex items-center mb-4 space-x-3">
          <Facebook className="h-6 w-6  " />
          <Instagram className="h-6 w-6  " />
          <Twitter className="h-6 w-6  " />
          <Linkedin className="h-6 w-6  " />
        </div>
      </div>
    </div>

  </div>
  )
}
