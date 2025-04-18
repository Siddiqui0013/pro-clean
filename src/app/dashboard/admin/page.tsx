import { X, Send, Smile } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SalesOverviewChart from "@/app/components/sales-chart"

export default function Dashboard() {
  return (

    <div className="min-h-screen p-2">
      <div className=" mx-auto">

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
            <SalesOverviewChart />
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