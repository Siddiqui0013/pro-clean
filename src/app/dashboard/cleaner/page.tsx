import { X, Send, Smile } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { SalesChart } from "@/app/components/sales-chart"

export default function Dashboard() {
  return (

    <div className="min-h-screen p-2">
      <div className=" mx-auto">
        {/* Header */}


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Total Revenue</p>
              <p className="text-4xl font-semibold mt-1">2,504 $</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Overall Clients</p>
              <p className="text-4xl font-semibold mt-1">54</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Subscribe Clients</p>
              <p className="text-4xl font-semibold mt-1">14</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-gray-500">Today booking</p>
              <p className="text-4xl font-semibold mt-1">4</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Sales Overview */}
          <Card className="lg:col-span-3">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Sales overview</h2>
                  <p className="flex items-center">
                    <span className="text-emerald-500 font-medium">(+5) more</span>
                    <span className="text-gray-500 ml-1">in 2021</span>
                  </p>
                </div>
              </div>
              {/* <div className="h-80">
                <SalesChart />
              </div> */}
            </CardContent>
          </Card>

          {/* Chats */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold">Chats</h2>
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">14</span>
              </div>
              <div className="space-y-4">
                <ChatMessage
                  name="Ironmen"
                  message="When will the event be held?"
                  avatarColor="bg-blue-100"
                  hasNotification={true}
                />
                <ChatMessage name="Ariana Grande" message="Alright then. See you there" avatarColor="bg-red-100" />
                <ChatMessage name="Ariana Grande" message="Come on join to my party!" avatarColor="bg-purple-100" />
                <ChatMessage name="Ariana Grande" message="After that you can see me" avatarColor="bg-red-100" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today's Bookings */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Today booking</h2>
            <div className="space-y-3">
              <BookingItem
                number="1."
                client="Ironman"
                service="House Cleaning"
                time="8:00 am"
                location="H2, Iqbal town, ISB"
              />
              <BookingItem
                number="2."
                client="Ironman"
                service="Office Cleaning"
                time="12:00 pm"
                location="F3, Ahmad Plaza, ISB"
              />
              <BookingItem
                number="3."
                client="Ironman"
                service="Shop Cleaning"
                time="6:00 pm"
                location="S76, Malik Plaza, RWP"
              />
            </div>
          </CardContent>
        </Card>

        {/* Chat Modal */}
        <div className="fixed hidden bottom-4 right-4 w-full max-w-md">
          <Card className="border-emerald-700 shadow-lg">
            <CardContent className="p-0">
              <div className="bg-emerald-700 text-white p-4 flex justify-between items-center">
                <h3 className="font-semibold">Ironmen</h3>
                <Button variant="ghost" size="icon" className="text-white hover:bg-emerald-600">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto space-y-3">
                <div className="bg-gray-200 text-gray-800 rounded-lg p-2 px-3 inline-block">
                  <span className="bg-gray-300 text-xs px-2 py-0.5 rounded-full">Today</span>
                </div>
                <div className="flex justify-start">
                  <div className="bg-emerald-100 rounded-lg p-3 max-w-[80%]">
                    <p>When will the event be held?</p>
                    <span className="text-xs text-gray-500 block text-right">10:22 am</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-emerald-700 text-white rounded-lg p-3 max-w-[80%]">
                    <p>Tomorrow at 4 pm</p>
                    <span className="text-xs text-emerald-200 block text-right">10:24 am</span>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t flex items-center gap-2">
                <Input type="text" placeholder="Type here..." className="rounded-full" />
                <Button size="icon" variant="ghost" className="text-gray-500">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button size="icon" className="rounded-full bg-emerald-700 hover:bg-emerald-800">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ChatMessage({ name, message, avatarColor, hasNotification = false }: { name: string, message: string, avatarColor: string, hasNotification?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <Avatar className={`h-12 w-12 ${avatarColor}`}>
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        {hasNotification && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        )}
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  )
}

function BookingItem({ number, client, service, time, location }: { number: string; client: string; service: string; time: string; location: string }) {
  return (
    <div className="flex items-center p-4 border rounded-lg">
      <div className="w-8 text-gray-500">{number}</div>
      <div className="w-32 font-medium">{client}</div>
      <div className="flex-1">{service}</div>
      <div className="w-32 text-center">{time}</div>
      <div className="w-64 text-right text-gray-500">{location}</div>
    </div>
  )
}









// 'use client';

// import { useUser, UserRole } from '@/context';
// import UserProfile from '@/app/components/UserProfile';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function CleanerDashboard() {
//   const { user, hasRole, loading } = useUser();
//   const router = useRouter();

//   // Redirect if not cleaner
//   useEffect(() => {
//     if (!loading && (!user || !hasRole(UserRole.CLEANER))) {
//       router.push('/');
//     }
//   }, [user, loading, hasRole, router]);

//   if (loading) {
//     return <div className="p-8 text-center">Loading...</div>;
//   }

//   if (!user || !hasRole(UserRole.CLEANER)) {
//     return null; // Will redirect due to the useEffect
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <UserProfile />
      
//       <h1 className="text-2xl font-bold mb-6">Cleaner Dashboard</h1>
      
//       <div className="bg-white p-6 rounded-lg shadow mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Todays Schedule</h2>
//           <div className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
//             April 14, 2025
//           </div>
//         </div>
        
//         <div className="space-y-4">
//           <div className="border-l-4 border-green-500 pl-4 py-3 bg-gray-50 rounded-r">
//             <div className="flex justify-between">
//               <div>
//                 <p className="font-medium">Home Cleaning - Apartment</p>
//                 <p className="text-sm text-gray-600">123 Main Street, Apt 4B</p>
//                 <p className="text-sm text-gray-600">Client: John Smith</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-medium">9:00 AM - 11:00 AM</p>
//                 <p className="text-sm mt-2 bg-green-100 text-green-800 px-2 py-1 rounded inline-block">
//                   In Progress
//                 </p>
//               </div>
//             </div>
//             <div className="mt-2 flex space-x-2">
//               <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
//                 View Details
//               </button>
//               <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
//                 Mark Complete
//               </button>
//             </div>
//           </div>
          
//           <div className="border-l-4 border-yellow-500 pl-4 py-3 bg-gray-50 rounded-r">
//             <div className="flex justify-between">
//               <div>
//                 <p className="font-medium">Office Cleaning</p>
//                 <p className="text-sm text-gray-600">456 Business Blvd, Suite 200</p>
//                 <p className="text-sm text-gray-600">Client: Acme Corp</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-medium">1:00 PM - 3:30 PM</p>
//                 <p className="text-sm mt-2 bg-yellow-100 text-yellow-800 px-2 py-1 rounded inline-block">
//                   Upcoming
//                 </p>
//               </div>
//             </div>
//             <div className="mt-2 flex space-x-2">
//               <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
//                 View Details
//               </button>
//               <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300">
//                 Start Job
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-3">Weekly Overview</h2>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span>Jobs Completed:</span>
//               <span className="font-medium">12</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Hours Worked:</span>
//               <span className="font-medium">27.5</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Upcoming Jobs:</span>
//               <span className="font-medium">8</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Rating:</span>
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
//                     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-3">Equipment Status</h2>
//           <div className="space-y-3">
//             <div>
//               <div className="flex justify-between items-center mb-1">
//                 <span>Cleaning Supplies</span>
//                 <span className="text-sm text-green-600">Good</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
//               </div>
//             </div>
            
//             <div>
//               <div className="flex justify-between items-center mb-1">
//                 <span>Vacuum Cleaner</span>
//                 <span className="text-sm text-yellow-600">Check Soon</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '35%' }}></div>
//               </div>
//             </div>
            
//             <div>
//               <div className="flex justify-between items-center mb-1">
//                 <span>Microfiber Cloths</span>
//                 <span className="text-sm text-red-600">Low</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div className="bg-red-600 h-2 rounded-full" style={{ width: '15%' }}></div>
//               </div>
//             </div>
//           </div>
          
//           <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
//             Request Supplies
//           </button>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold mb-3">Earnings</h2>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span>This Week:</span>
//               <span className="font-medium">$375.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>This Month:</span>
//               <span className="font-medium">$1,450.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Pending Payment:</span>
//               <span className="font-medium">$225.00</span>
//             </div>
//           </div>
//           <div className="mt-4 pt-4 border-t">
//             <h3 className="font-medium mb-2">Next Payout</h3>
//             <div className="flex justify-between items-center">
//               <span>April 15, 2025</span>
//               <span className="font-bold">$450.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-4">Upcoming Schedule</h2>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center pb-3 border-b">
//             <div>
//               <p className="font-medium">April 15</p>
//               <p className="text-sm text-gray-600">Tomorrow</p>
//             </div>
//             <div className="text-center">
//               <p className="font-medium">3 Jobs</p>
//               <p className="text-sm text-gray-600">8:00 AM - 4:30 PM</p>
//             </div>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
//               View Details
//             </button>
//           </div>
          
//           <div className="flex justify-between items-center pb-3 border-b">
//             <div>
//               <p className="font-medium">April 16</p>
//               <p className="text-sm text-gray-600">Wednesday</p>
//             </div>
//             <div className="text-center">
//               <p className="font-medium">2 Jobs</p>
//               <p className="text-sm text-gray-600">9:30 AM - 2:00 PM</p>
//             </div>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
//               View Details
//             </button>
//           </div>
          
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-medium">April 17</p>
//               <p className="text-sm text-gray-600">Thursday</p>
//             </div>
//             <div className="text-center">
//               <p className="font-medium">1 Job</p>
//               <p className="text-sm text-gray-600">10:00 AM - 12:30 PM</p>
//             </div>
//             <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
//               View Details
//             </button>
//           </div>
//         </div>
        
//         <button className="mt-6 w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200">
//           View Full Calendar
//         </button>
//       </div>
//     </div>
//   );
// }