import Image from "next/image"
import Link from "next/link"

export default function Blogs() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Stay Updated with Our 
          Tips & Service News!</h2>
        </div>
        <div>
          <div className="bg-white">
            <h3 className="text-2xl font-semibold mb-4">Blogs</h3>
            <p className="text-gray-700">
            Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home.            </p>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gray-200 mb-12"></div>

      <div className="grid md:grid-cols-3 gap-6 items-start justify-baseline">

        <div className="bg-gray-50 overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src="/blog1.png"
              alt="Office cleaning service with professionals cleaning a kitchen counter"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6">
            <p>Erik Hamilton</p>
            <h3 className="text-2xl font-semibold mb-4">
            The Benefits of Regular Professional Cleaning</h3>
            <p className="text-gray-700 mb-6">
            Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...
            </p>
            <Link
            className="flex items-center justify-center rounded-md border-t border-gray-300 hover:bg-[#0A6259] hover:text-white"
              href="#" >
                <button 
                              className="inline-flex items-center 
              text-black w-fit text-center mx-auto px-4 py-2 font-medium hover:text-white"
                >
              Read More 
                </button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 overflow-hidden">
          <div className="aspect-[4/3] self-stretch">
            <Image
              src="/blog2.png"
              alt="Office cleaning service with professionals cleaning a kitchen counter"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6">
            <p>Erik Hamilton</p>
            <h3 className="text-2xl font-semibold mb-4">
            Eco-Friendly Cleaning: How We Keep Your Home Green</h3>
            <p className="text-gray-700 mb-6">
            Learn about our commitment to eco-friendly practices. We share the eco-conscious products...
            </p>
            <Link
            className="flex items-center justify-center rounded-md border-t border-gray-300 hover:bg-[#0A6259]"
              href="#" >
                <button 
                              className="inline-flex items-center 
              text-black w-fit text-center mx-auto px-4 py-2 font-medium hover:text-white"
                >
              Read More 
                </button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src="/blog3.png"
              alt="Office cleaning service with professionals cleaning a kitchen counter"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="py-6">
            <p>Erik Hamilton</p>
            <h3 className="text-2xl font-semibold mb-4">
            How to Maintain a Clean Home Between Professional Visits</h3>
            <p className="text-gray-700 mb-6">
            Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...
            </p>
            <Link
            className="flex items-center justify-center rounded-md border-t border-gray-300 hover:bg-[#0A6259]"
              href="#" >
                <button 
                              className="inline-flex items-center 
              text-black w-fit text-center mx-auto px-4 py-2 font-medium hover:text-white"
                >
              Read More 
                </button>
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}