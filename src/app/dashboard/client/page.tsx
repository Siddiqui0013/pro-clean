'use client';

import { useUser, UserRole } from '@/context';
import UserProfile from '@/app/components/UserProfile';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientDashboard() {
  const { user, hasRole, loading } = useUser();
  const router = useRouter();

  // Redirect if not client
  useEffect(() => {
    if (!loading && (!user || !hasRole(UserRole.CLIENT))) {
      router.push('/');
    }
  }, [user, loading, hasRole, router]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!user || !hasRole(UserRole.CLIENT)) {
    return null; // Will redirect due to the useEffect
  }

  return (
    <div className="container mx-auto p-4">
      <UserProfile />
      
      <h1 className="text-2xl font-bold mb-6">Client Dashboard</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Book New Service
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            View My Bookings
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Contact Support
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
          {/* Mock data - replace with real data */}
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-medium">Home Cleaning</p>
              <p className="text-sm text-gray-600">Tomorrow, 10:00 AM - 1:00 PM</p>
              <p className="text-sm">Cleaner: Sarah Johnson</p>
              <div className="mt-2 flex space-x-2">
                <button className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
                  Reschedule
                </button>
                <button className="text-sm bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded">
                  Cancel
                </button>
              </div>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-medium">Window Cleaning</p>
              <p className="text-sm text-gray-600">Next Week, 2:00 PM - 4:00 PM</p>
              <p className="text-sm">Cleaner: Michael Brown</p>
              <div className="mt-2 flex space-x-2">
                <button className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">
                  Reschedule
                </button>
                <button className="text-sm bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Service History</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-medium">Deep Cleaning</p>
              <p className="text-sm text-gray-600">Last week, 3 hours</p>
              <p className="text-sm">Cleaner: David Wilson</p>
              <div className="flex items-center mt-1">
                <span className="text-green-600 font-medium mr-2">Completed</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-medium">Kitchen Cleaning</p>
              <p className="text-sm text-gray-600">Two weeks ago, 1.5 hours</p>
              <p className="text-sm">Cleaner: Lisa Taylor</p>
              <div className="flex items-center mt-1">
                <span className="text-green-600 font-medium mr-2">Completed</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
            View All History
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recommended Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Spring Deep Cleaning</h3>
            <p className="text-sm text-gray-600 mb-2">Perfect for seasonal refresh</p>
            <p className="font-bold mb-2">$120</p>
            <button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 rounded">
              Book Now
            </button>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Weekly Maintenance</h3>
            <p className="text-sm text-gray-600 mb-2">Regular cleaning service</p>
            <p className="font-bold mb-2">$80/week</p>
            <button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 rounded">
              Book Now
            </button>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Move-out Cleaning</h3>
            <p className="text-sm text-gray-600 mb-2">Thorough cleaning for moving</p>
            <p className="font-bold mb-2">$200</p>
            <button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}