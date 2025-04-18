"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { addDays, isAfter, isBefore, startOfMonth, startOfWeek } from "date-fns"

// Define the Client type
interface Client {
  id: number
  name: string
  email: string
  totalOrders: number
  completedOrders: number
  totalPayment: number
  received: number
  date: Date
}

export default function ClientManagement() {
  // Sample client data with 6 clients
  const allClients: Client[] = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      totalOrders: 3,
      completedOrders: 2,
      totalPayment: 750,
      received: 750,
      date: new Date(2023, 3, 15), // April 15, 2023
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      totalOrders: 5,
      completedOrders: 5,
      totalPayment: 1200,
      received: 1200,
      date: new Date(), // Today
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.b@example.com",
      totalOrders: 2,
      completedOrders: 1,
      totalPayment: 500,
      received: 250,
      date: addDays(new Date(), -2), // 2 days ago
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.d@example.com",
      totalOrders: 1,
      completedOrders: 1,
      totalPayment: 300,
      received: 300,
      date: addDays(new Date(), -10), // 10 days ago
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.w@example.com",
      totalOrders: 4,
      completedOrders: 3,
      totalPayment: 900,
      received: 675,
      date: addDays(new Date(), -40), // 40 days ago
    },
    {
      id: 6,
      name: "Jennifer Lee",
      email: "jennifer.l@example.com",
      totalOrders: 2,
      completedOrders: 2,
      totalPayment: 600,
      received: 600,
      date: addDays(new Date(), -5), // 5 days ago
    },
  ]

  const [activeTab, setActiveTab] = useState("all")

  // Filter clients based on the active tab
  const getFilteredClients = () => {
    const now = new Date()
    const monthStart = startOfMonth(now)
    const weekStart = startOfWeek(now)

    switch (activeTab) {
      case "month":
        return allClients.filter((client) => isAfter(client.date, monthStart) && isBefore(client.date, now))
      case "week":
        return allClients.filter((client) => isAfter(client.date, weekStart) && isBefore(client.date, now))
      default:
        return allClients
    }
  }

  const filteredClients = getFilteredClients()

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid grid-cols-4 max-w-md gap-4">
          <TabsTrigger className="px-4" value="all">All clients</TabsTrigger>
          <TabsTrigger value="month">This month</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Nbr#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Total order</TableHead>
              <TableHead>Complete order</TableHead>
              <TableHead>Total Payment</TableHead>
              <TableHead>Received</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell>{client.id}</TableCell>
                  <TableCell>{client.name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.totalOrders}</TableCell>
                  <TableCell>{client.completedOrders}</TableCell>
                  <TableCell>${client.totalPayment}</TableCell>
                  <TableCell>${client.received}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No clients found for this period
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
