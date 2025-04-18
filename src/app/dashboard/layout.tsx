'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
import DashboardSidebar from '@/app/components/DashbordSidebar';
import { useUser } from '@/context';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, ChevronDown, LogOut } from "lucide-react"

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading, logout } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (!loading && user) {
      router.push(`/dashboard/${user.role}`);
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <DashboardSidebar />
      <div className="flex flex-col md:pl-60 pt-4 w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="">
            <div className="w-full mx-auto">
              <header className="flex justify-between items-center p-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-emerald-800">Welcome, {user.name}</h1>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <Mail className="h-6 w-6" />
                  </button>
                  <div className="relative" ref={dropdownRef}>
                    {/* User info and dropdown toggle */}
                    <div 
                      className="flex items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-100" 
                      onClick={toggleDropdown}
                    >
                      <span className="font-medium">{user.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                        <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{user.email}</span>
                          </div>
                        </div>
                        <button 
                          className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          onClick={logout}
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </header>
              <h1 className="text-2xl p-4 mb-4 text-white font-extrabold bg-primary"> {pathname?.split('/').pop()?.toUpperCase()}</h1>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}