"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface CleaningService {
  type: string
  description: string
  price: number
}

interface Order {
  id: number
  date: string
  avatar: string
  services: CleaningService[]
  status?: "Pending" | "Completed" | null
}

export default function OrderCards() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 351,
      date: "05 Feb 2023, 08:28 PM",
      avatar: "/placeholder.svg?height=50&width=50",
      services: [
        {
          type: "House Cleaning",
          description: "1 bedroom 1 room",
          price: 5.3,
        },
        {
          type: "Office Cleaning",
          description: "1 CEO office",
          price: 5.3,
        },
      ],
      status: "Completed",
    },
    {
      id: 350,
      date: "05 Feb 2023, 08:28 PM",
      avatar: "/placeholder.svg?height=50&width=50",
      services: [
        {
          type: "House Cleaning",
          description: "1 bedroom 1 room",
          price: 5.3,
        },
        {
          type: "Office Cleaning",
          description: "1 CEO office",
          price: 5.3,
        },
      ],
      status: "Pending",
    },
    {
      id: 349,
      date: "05 Feb 2023, 08:28 PM",
      avatar: "/placeholder.svg?height=50&width=50",
      services: [
        {
          type: "House Cleaning",
          description: "1 bedroom 1 room",
          price: 5.3,
        },
      ],
      status: "Completed",
    },
  ])

  const handleResponse = (orderId: number, response: "Completed" | "Pending") => {
    console.log(`Order #${orderId} ${response.toLowerCase()}`)
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: response } : order)))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Order #{order.id}</h3>
                <p className="text-gray-500">{order.date}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-purple-200 overflow-hidden">
                <img
                  src={order.avatar || "/placeholder.svg"}
                  alt="Customer avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {order.services.map((service, index) => (
              <div key={index} className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img
                      src={
                        service.type.includes("House")
                          ? "/placeholder.svg?height=100&width=100"
                          : "/placeholder.svg?height=100&width=100"
                      }
                      alt={service.type}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{service.type}</h4>
                    <p className="text-gray-500">{service.description}</p>
                    <p className="font-medium">${service.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 border-t border-gray-100 flex justify-end gap-2">
              {!order.status ? (
                <>
                  <button
                    onClick={() => handleResponse(order.id, "Completed")}
                    className="p-3 rounded-md border border-rose-300 text-rose-500 hover:bg-rose-50"
                    aria-label="Reject order"
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => handleResponse(order.id, "Pending")}
                    className="p-3 rounded-md border border-emerald-300 text-emerald-500 hover:bg-emerald-50"
                    aria-label="Accept order"
                  >
                    Pending
                  </button>
                </>
              ) : (
                <div
                  className={`px-4 py-2 rounded-full ${
                    order.status === "Completed"
                      ? "text-emerald-500 border border-emerald-300"
                      : "text-rose-500 border border-rose-300"
                  }`}
                >
                  {order.status === "Pending" ? (
                    <span className="flex items-center gap-1">
                      <Check className="h-4 w-4" /> ACCEPTED
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <X className="h-4 w-4" /> REJECTED
                    </span>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}