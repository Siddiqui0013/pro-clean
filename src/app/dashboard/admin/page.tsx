'use client';

import { useUser, UserRole } from '@/context';
import UserProfile from '@/app/components/UserProfile';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const { user, hasRole, loading } = useUser();
  const router = useRouter();

  // Redirect if not admin
  useEffect(() => {
    if (!loading && (!user || !hasRole(UserRole.ADMIN))) {
      router.push('/');
    }
  }, [user, loading, hasRole, router]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!user || !hasRole(UserRole.ADMIN)) {
    return null; // Will redirect due to the useEffect
  }

  return (

    <div className="container mx-auto p-4">
      <UserProfile />
      
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Cleaners</h2>
          <p className="text-gray-600">Manage all registered cleaners</p>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Total Cleaners: 12</p>
            <p className="text-sm text-gray-600">3 new this month</p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View All Cleaners
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Clients</h2>
          <p className="text-gray-600">Manage all registered clients</p>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Total Clients: 48</p>
            <p className="text-sm text-gray-600">7 new this month</p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View All Clients
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Bookings</h2>
          <p className="text-gray-600">Overview of all service bookings</p>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="font-medium">Total Bookings: 87</p>
            <p className="text-sm text-gray-600">23 pending, 64 completed</p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Manage Bookings
          </button>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-b pb-2">
            <p className="font-medium">New cleaner registration: John Smith</p>
            <p className="text-sm text-gray-600">2 hours ago</p>
          </div>
          <div className="border-b pb-2">
            <p className="font-medium">New booking: Home Cleaning (3 hours)</p>
            <p className="text-sm text-gray-600">4 hours ago</p>
          </div>
          <div className="border-b pb-2">
            <p className="font-medium">Booking completed: Office Cleaning</p>
            <p className="text-sm text-gray-600">Yesterday</p>
          </div>
        </div>
      </div>
    </div>
  );
}