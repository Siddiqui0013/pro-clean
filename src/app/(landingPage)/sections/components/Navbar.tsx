"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useUser } from "@/context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const { user } = useUser();

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Pricing", href: "pricing" },
    { name: "Testimonials", href: "testimonials" },
  ]

  // Handle smooth scrolling when clicking on nav links
  const handleScroll = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate the position to scroll to, accounting for the navbar height
      const navbarHeight = 80 // Approximate navbar height, adjust as needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {

    console.log("User" , user);
    
    const handleScrollSpy = () => {
      const sections = navLinks.map(link => document.getElementById(link.href))
      
      // Find the section that's currently in view
      const current = sections.filter(section => {
        if (!section) return false
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        return window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100
      })[0]

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    return () => {
      window.removeEventListener('scroll', handleScrollSpy)
    }
  }, [navLinks])

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
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className={`px-4 py-2 text-xl rounded-full ${
                  activeSection === link.href
                    ? "primary"
                    : "text-black"
                } font-extrabold cursor-pointer`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex-shrink-0">
            {
              user?.role ? (
                <Link href={`/dashboard/${user.role}`} className="px-8 py-3 rounded-md bg-primary text-white font-bold
                text-sm shadow-md">
                 Dashboard
             </Link>
              )
            : (
              <Link href="/login" className="px-8 py-3 rounded-md bg-primary text-white font-bold
              text-sm shadow-md">
               Get A Quote
           </Link> 
            )          
          }
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
          <div className="md:hidden mt-4 py-4 space-y-2 ">
            {
              navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className={`block w-full text-left px-6 py-2 mb-4 rounded-full ${
                    activeSection === link.href
                      ? "primary"
                      : "text-black"
                  } text-sm font-bold cursor-pointer`}
                >
                  {link.name}
                </button>
              ))
            }
            <Link href="/login" className="px-8 py-3 rounded-md bg-primary text-white font-bold
             text-sm shadow-md">
              Get A Quote
            </Link>
            </div>
        )}
      </div>
    </div>
  )
}







// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Menu, X } from "lucide-react"
// import { usePathname } from "next/navigation"

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "Services", href: "/services" },
//     { name: "About", href: "/about" },
//     { name: "Pricing", href: "/pricing" },
//     { name: "Testimonials", href: "/testimonials" },
//   ]

//   const pathname = usePathname()

//   return (
//     <div className="w-full bg-white">
//       <div className="container mx-auto p-4">
//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center justify-between">
//           <div className="flex-shrink-0">
//             <Image
//               src="/Logo.png"
//               alt="ProCLean Logo"
//               width={130}
//               height={40}
//               className="h-10 w-auto"
//             />
//           </div>

//           <nav className="flex items-center font-extrabold space-x-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`px-4 py-2 text-xl rounded-full ${
//                   pathname === link.href
//                     ? "primary"
//                     : "text-black"
//                 } font-extrabold`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex-shrink-0">
//             <Link href="/login" className="px-8 py-3 rounded-md bg-primary text-white font-bold
//              text-sm shadow-md">
//               Get A Quote
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="flex md:hidden items-center justify-between">
//           <div className="flex-shrink-0">
//             <Image
//               src="/Logo.png"
//               alt="ProClean Logo"
//               width={130}
//               height={40}
//               className="h-8 w-auto"
//             />
//           </div>

//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 py-4 space-y-2 ">
//             {
//               navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   className={`block px-6 py-2 mb-4 rounded-full ${
//                     pathname === link.href
//                       ? "primary"
//                       : "text-black"
//                   } text-sm font-bold`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))
//             }
//             <Link href="/login" className="px-8 py-3 rounded-md bg-primary text-white font-bold
//              text-sm shadow-md">
//               Get A Quote
//             </Link>
//             </div>
//         )}
//       </div>
//     </div>
//   )
// }
