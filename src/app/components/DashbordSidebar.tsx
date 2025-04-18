'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Home, ClipboardList, FileInput, MessageSquare, 
  Users, BarChart3, UserCircle, 
  PlusCircle, History, X, Menu
} from 'lucide-react';

// Calendar, DollarSign, Settings 

import { useState } from 'react';
import { useUser } from '@/context';
import { UserRole } from '@/context';
import Image from 'next/image';

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  // Admin navigation items
  const adminNavItems = [
    {
      href: '/dashboard/admin',
      label: 'Home',
      icon: <Home size={20} />,
    },
    {
      href: '/dashboard/admin/cleaners',
      label: 'Cleaners',
      icon: <Users size={20} />,
    },
    {
      href: '/dashboard/admin/clients',
      label: 'Clients',
      icon: <Users size={20} />,
    },
    // {
    //   href: '/dashboard/admin/bookings',
    //   label: 'Bookings',
    //   icon: <ClipboardList size={20} />,
    // },
    {
      href: '/dashboard/admin/revenue',
      label: 'Revenue',
      icon: <BarChart3 size={20} />,
    },
    // {
    //   href: '/dashboard/admin/messages',
    //   label: 'Messages',
    //   icon: <MessageSquare size={20} />,
    // },
    // {
    //   href: '/dashboard/admin/profile',
    //   label: 'Profile',
    //   icon: <UserCircle size={20} />,
    // },
  ];

  // Cleaner navigation items (based on the image)
  const cleanerNavItems = [
    {
      href: '/dashboard/cleaner',
      label: 'Home',
      icon: <Home size={20} />,
    },
    {
      href: '/dashboard/cleaner/order',
      label: 'Order',
      icon: <ClipboardList size={20} />,
    },
    {
      href: '/dashboard/cleaner/request',
      label: 'Request',
      icon: <FileInput size={20} />,
    },
    {
      href: '/dashboard/cleaner/clients',
      label: 'Clients',
      icon: <Users size={20} />,
    },
    {
      href: '/dashboard/cleaner/revenue',
      label: 'Revenue',
      icon: <BarChart3 size={20} />,
    },
    {
      href: '/dashboard/cleaner/profile',
      label: 'Profile',
      icon: <UserCircle size={20} />,
    },
  ];

  const clientNavItems = [
    {
      href: '/dashboard/client',
      label: 'Home',
      icon: <Home size={20} />,
    },
    {
      href: '/dashboard/bookings',
      label: 'My Bookings',
      icon: <ClipboardList size={20} />,
    },
    {
      href: '/dashboard/book',
      label: 'Book Service',
      icon: <PlusCircle size={20} />,
    },
    {
      href: '/dashboard/history',
      label: 'History',
      icon: <History size={20} />,
    },
    {
      href: '/dashboard/messages',
      label: 'Messages',
      icon: <MessageSquare size={20} />,
    },
    {
      href: '/dashboard/profile',
      label: 'Profile',
      icon: <UserCircle size={20} />,
    },
  ];

  let navItems = cleanerNavItems;

  if (user?.role === UserRole.ADMIN) {
    navItems = adminNavItems;
  } else if (user?.role === UserRole.CLIENT) {
    navItems = clientNavItems;
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-[#0A6259] text-white p-2 rounded-md focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-[#0A625933]">
          {/* Logo */}
          <div className="flex items-center px-6 py-4">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={140}
              height={140}
              className="w-auto h-auto"
            />
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
            <nav className="flex-1 px-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 text-sm font-medium rounded-md group
                      ${isActive 
                        ? 'bg-[#0A6259] text-white' 
                        : 'text-gray-600'}
                    `}
                  >
                    <div className="mr-3">{item.icon}</div>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden fixed inset-0 z-20 transition-transform duration-300 ease-in-out
        `}
      >
        <div className="relative flex flex-col w-60 max-w-xs h-full bg-teal-50 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center px-6 py-4">
            <div className="flex items-center">
              <div className="text-teal-800">
                <h1 className="text-lg font-medium">ProCleaning</h1>
                <p className="text-xs text-gray-500">Cleaning Services company</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
            <nav className="flex-1 px-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 text-sm font-medium rounded-md group
                      ${isActive 
                        ? 'bg-teal-700 text-white' 
                        : 'text-gray-600 hover:text-teal-800 hover:bg-teal-100'}
                    `}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="mr-3">{item.icon}</div>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-gray-600 bg-opacity-75" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    </>
  );
}








// "use client"

// import * as React from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Home, ClipboardList, FileText, MessageSquare, Users, BarChart2, User} from 'lucide-react'

// type SidebarProps = React.HTMLAttributes<HTMLDivElement>

// export default function Sidebar({ className }: SidebarProps) {
  
//   const navItems = [
//     { icon: Home, label: "Home", href: "/" },
//     { icon: ClipboardList, label: "Order", href: "/order" },
//     { icon: FileText, label: "Request", href: "/request" },
//     { icon: MessageSquare, label: "Message", href: "/message" },
//     { icon: Users, label: "Clients", href: "/clients" },
//     { icon: BarChart2, label: "Revenue", href: "/revenue" },
//     { icon: User, label: "Profile", href: "/profile" },
//   ]

//   const SidebarContent = () => (
//     <div className={`flex h-full flex-col bg-white ${className}`}>
//       <div className="flex h-16 items-center border-b px-4">
//         <Link href="/" className="flex items-center gap-2">
//           <Image 
//             src="/logo.png" 
//             alt="ProCleaning" 
//             width={32} 
//             height={32} 
//           />
//           <div>
//             <h1 className="text-lg font-semibold text-emerald-700">ProCleaning</h1>
//             <p className="text-xs text-muted-foreground">Cleaning Services company</p>
//           </div>
//         </Link>
//       </div>
//       <div className="flex-1 overflow-auto py-2">
//         <nav className="grid gap-1 px-2">
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               href={item.href}
//               className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
//                 hover:bg-emerald-50 hover:text-emerald-700
//                 ${
//                 index === 0 && "bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white"
//               }`}
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   )

//   return (
//     <>
//       <div className="hidden lg:block">
//         <div className="fixed inset-y-0 left-0 z-10 w-64 border-r">
//           <SidebarContent />
//         </div>
//       </div>
//     </>
//   )
// }








// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { useUser, UserRole } from '@/context';

// interface NavLink {
//   href: string;
//   label: string;
//   // icon: React.ReactNode;
// }

// export default function DashboardSidebar() {
//   const { hasRole } = useUser();
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // const adminLinks: NavLink[] = [
//   //   {
//   //     href: '/admin/dashboard',
//   //     label: 'Dashboard',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/admin/cleaners',
//   //     label: 'Cleaners',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/admin/clients',
//   //     label: 'Clients',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/admin/bookings',
//   //     label: 'Bookings',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/admin/reports',
//   //     label: 'Reports',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//   //       </svg>
//   //     ),
//   //   },
//   // ];


//   const adminLinks: NavLink[] = [
//     {
//       href: '/dashboard/admin',
//       label: 'Dashboard',
//     },
//     {
//       href: '/dashboard/admin/cleaners',
//       label: 'Cleaners',
//     },
//     {
//       href: '/dashboard/admin/clients',
//       label: 'Clients',
//     },
//     {
//       href: '/dashboard/admin/bookings',
//       label: 'Bookings',
//     },
//     {
//       href: '/dashboard/admin/reports',
//       label: 'Reports',
//     }
//   ];

//   const cleanerLinks: NavLink[] = [
//     {
//       href: '/dashboard/cleaner',
//       label: 'Dashboard'
//     },
//     {
//       href: '/dashboard/cleaner/jobs',
//       label: 'My Jobs',
//     },
//     {
//       href: '/dashboard/cleaner/schedule',
//       label: 'Schedule',
//     },
//     {
//       href: '/dashboard/cleaner/earnings',
//       label: 'Earnings',
//     },
//     {
//       href: '/dashboard/cleaner/profile',
//       label: 'Profile',
//     }
//   ];

//   // const cleanerLinks: NavLink[] = [
//   //   {
//   //     href: '/cleaner/dashboard',
//   //     label: 'Dashboard',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/cleaner/jobs',
//   //     label: 'My Jobs',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/cleaner/schedule',
//   //     label: 'Schedule',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/cleaner/earnings',
//   //     label: 'Earnings',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/cleaner/profile',
//   //     label: 'Profile',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//   //       </svg>
//   //     ),
//   //   },
//   // ];


//   const clientLinks: NavLink[] = [
//     {
//       href: '/dashboard/client',
//       label: 'Dashboard',
//     },
//     {
//       href: '/dashboard/client/bookings',
//       label: 'My Bookings',
//     },
//     {
//       href: '/dashboard/client/book',
//       label: 'Book Service',
//     },
//     {
//       href: '/dashboard/client/history',
//       label: 'Service History',
//     },
//     {
//       href: '/dashboard/client/profile',
//       label: 'Profile',
//     }
//   ];


//   // const clientLinks: NavLink[] = [
//   //   {
//   //     href: '/client/dashboard',
//   //     label: 'Dashboard',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/client/bookings',
//   //     label: 'My Bookings',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/client/book',
//   //     label: 'Book Service',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/client/history',
//   //     label: 'Service History',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//   //       </svg>
//   //     ),
//   //   },
//   //   {
//   //     href: '/client/profile',
//   //     label: 'Profile',
//   //     icon: (
//   //       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//   //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//   //       </svg>
//   //     ),
//   //   },
//   // ];

//   let links: NavLink[] = [];
  
//   if (hasRole(UserRole.ADMIN)) {
//     links = adminLinks;
//   } else if (hasRole(UserRole.CLEANER)) {
//     links = cleanerLinks;
//   } else if (hasRole(UserRole.CLIENT)) {
//     links = clientLinks;
//   }

//   return (
//     <>
//       {/* Mobile menu button */}
//       <div className="md:hidden fixed top-4 left-4 z-30">
//         <button
//           onClick={toggleMobileMenu}
//           className="bg-primary text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
//         >
//           {isMobileMenuOpen ? (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Sidebar for desktop */}
//       <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
//         <div className="flex-1 flex flex-col min-h-0 bg-primary">
//           <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-dark">
//             <h1 className="text-lg font-semibold text-white">CleanConnect</h1>
//           </div>
//           <div className="flex-1 flex flex-col overflow-y-auto">
//             <nav className="flex-1 px-2 py-4 space-y-1">
//               {links.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`${
//                       isActive
//                         ? 'bg-primary-dark text-white'
//                         : 'text-white hover:bg-primary-light'
//                     } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
//                   >
//                     {/* <div className="mr-3 flex-shrink-0">{link.icon}</div> */}
//                     {link.label}
//                   </Link>
//                 );
//               })}

//               {/* Logout button at bottom */}
//               <div className="pt-10">
//                 <Link
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     // Add logout functionality
//                   }}
//                   className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-primary-light"
//                 >
//                   <svg className="mr-3 flex-shrink-0 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                   </svg>
//                   Logout
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state */}
//       <div
//         className={`${
//           isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         } md:hidden fixed inset-0 z-20 transform ease-in-out transition-all duration-300`}
//       >
//         <div className="relative flex flex-col w-72 max-w-xs h-full bg-primary overflow-y-auto">
//           <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-dark">
//             <h1 className="text-lg font-semibold text-white">CleanConnect</h1>
//           </div>
//           <div className="flex-1 flex flex-col overflow-y-auto">
//             <nav className="flex-1 px-2 py-4 space-y-1">
//               {links.map((link) => {
//                 const isActive = pathname === link.href;
//                 return (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`${
//                       isActive
//                         ? 'bg-primary-dark text-white'
//                         : 'text-white hover:bg-primary-light'
//                     } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {/* <div className="mr-3 flex-shrink-0">{link.icon}</div> */}
//                     {link.label}
//                   </Link>
//                 );
//               })}

//               {/* Logout button at bottom */}
//               <div className="pt-10">
//                 <Link
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     // Add logout functionality
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-white hover:bg-primary-light"
//                 >
//                   <svg className="mr-3 flex-shrink-0 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                   </svg>
//                   Logout
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>

//         {/* Overlay to close the menu when clicking outside */}
//         <div 
//           className="absolute inset-0 bg-gray-600 bg-opacity-75" 
//           onClick={() => setIsMobileMenuOpen(false)}
//         ></div>
//       </div>
//     </>
//   );
// }