import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0a6259] text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <Image
            src="/footer.png"
            alt="Company Logo"
            width={200}
            height={200}
            // className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-0"
          />

          {/* Company links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-200 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Know More links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Know More</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-200 hover:text-white transition-colors">
                  Terms & conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Goes here"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button className="bg-white text-[#0a6259] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-600">
          <p className="text-center text-sm text-gray-300">2024 @Procleaning All Rights Received</p>
        </div>
      </div>
    </footer>
  )
}