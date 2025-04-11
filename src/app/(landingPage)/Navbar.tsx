"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
  ]

  const pathname = usePathname()

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto p-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="ProCLean Logo"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <nav className="flex items-center font-extrabold space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-xl rounded-full ${
                  pathname === link.href
                    ? "primary"
                    : "text-black"
                } font-extrabold`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <Link href="/login" className="px-8 py-3 rounded-md bg-primary text-white font-bold
             text-sm shadow-md">
              Get A Quote
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="ProClean Logo"
              width={130}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-2 border-b-4 border-[#ea464b]">
            {
              navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-6 py-2 mb-4 rounded-full ${
                    pathname === link.href
                      ? "primary"
                      : "text-black"
                  } text-sm font-bold`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))
            }
            <Link href="/login" className="px-8 py-3 rounded-md primary text-white font-bold
             text-sm shadow-md">
              Get A Quote
            </Link>
            </div>
        )}
      </div>
    </div>
  )
}
