'use client';

import { ReactNode } from 'react';
import DashboardSidebar from '@/app/components/DashbordSidebar';
import { useUser } from '@/context';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Bell, Mail, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, loading } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
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
            <h1 className="text-3xl font-bold text-emerald-800">Hey, Dustin!</h1>
            <p className="text-gray-500">Welcome back, nice to see you again!</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Mail className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 bg-gradient-to-br from-orange-400 to-red-500">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jamet Roy" />
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>
              <span className="font-medium">Jamet Roy</span>
              <ChevronDown className="h-4 w-4" />
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