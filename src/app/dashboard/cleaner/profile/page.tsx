"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CalendarDays, MapPin, Star, Clock, DollarSign, Award } from "lucide-react"

// Sample data for the cleaner profile
const cleanerData = {
  id: 1,
  name: "Sarah Johnson",
  avatar: "/placeholder.svg?height=100&width=100",
  location: "Chicago, IL",
  rating: 4.9,
  jobsCompleted: 145,
  revenue: 14500,
  joinDate: "March 2022",
  specialties: ["Deep Cleaning", "Office Cleaning", "Move-in/out"],
  badges: ["Top Performer", "Highly Rated", "Reliable"],
  completionRate: 98,
  onTimeRate: 96,
  customerRetention: 85,
}

const monthlyPerformanceData = [
  { month: "Jan", revenue: 1200, jobs: 12 },
  { month: "Feb", revenue: 1350, jobs: 13 },
  { month: "Mar", revenue: 1100, jobs: 11 },
  { month: "Apr", revenue: 1400, jobs: 14 },
  { month: "May", revenue: 1250, jobs: 12 },
  { month: "Jun", revenue: 1500, jobs: 15 },
  { month: "Jul", revenue: 1600, jobs: 16 },
  { month: "Aug", revenue: 1450, jobs: 14 },
  { month: "Sep", revenue: 1700, jobs: 17 },
  { month: "Oct", revenue: 1800, jobs: 18 },
  { month: "Nov", revenue: 1650, jobs: 16 },
  { month: "Dec", revenue: 1900, jobs: 19 },
]

const recentJobs = [
  { id: 351, date: "15 Apr 2023", type: "House Cleaning", amount: 120, status: "Completed" },
  { id: 348, date: "12 Apr 2023", type: "Office Cleaning", amount: 180, status: "Completed" },
  { id: 342, date: "08 Apr 2023", type: "Deep Cleaning", amount: 250, status: "Completed" },
  { id: 337, date: "05 Apr 2023", type: "House Cleaning", amount: 120, status: "Completed" },
  { id: 331, date: "01 Apr 2023", type: "Move-in Cleaning", amount: 200, status: "Completed" },
]

export default function CleanerProfile() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Cleaner Profile</h1>
        <p className="text-muted-foreground">Detailed performance metrics and information</p>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src={cleanerData.avatar || "/placeholder.svg"} alt={cleanerData.name} />
              <AvatarFallback>
                {cleanerData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{cleanerData.name}</h2>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{cleanerData.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-400" />
                <span className="font-medium">{cleanerData.rating}</span>
                <span className="text-muted-foreground ml-1">({cleanerData.jobsCompleted} jobs)</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {cleanerData.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="ml-auto space-y-2 text-right">
              <div className="flex items-center justify-end">
                <CalendarDays className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>Member since {cleanerData.joinDate}</span>
              </div>
              <div className="text-2xl font-bold">${cleanerData.revenue.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cleanerData.completionRate}%</div>
            <Progress value={cleanerData.completionRate} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On-Time Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cleanerData.onTimeRate}%</div>
            <Progress value={cleanerData.onTimeRate} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cleanerData.customerRetention}%</div>
            <Progress value={cleanerData.customerRetention} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
          <CardDescription>Revenue and jobs completed over the past year</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
              jobs: {
                label: "Jobs",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" orientation="left" tickFormatter={(value) => `$${value}`} />
                <YAxis yAxisId="right" orientation="right" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="jobs"
                  stroke="var(--color-jobs)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Specialties and Recent Jobs */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Specialties</CardTitle>
            <CardDescription>Services this cleaner specializes in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cleanerData.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Jobs</CardTitle>
            <CardDescription>Last 5 completed jobs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Order #{job.id}</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.date}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{job.type}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-end">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {job.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}