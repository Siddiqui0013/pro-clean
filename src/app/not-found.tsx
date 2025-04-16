// "use client";

import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="text-9xl font-bold text-gray-200">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xl font-medium text-gray-800">Page not found</div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Go back home
            </Link>
          </div>
        </div>
        
        <div className="h-2 bg-gradient-to-r from-green-100 via-green-300 to-green-800"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;