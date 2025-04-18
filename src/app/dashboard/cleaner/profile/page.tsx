"use client"

import { useState } from "react"
import { useUser } from "@/context"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface EditableFieldProps {
  label: string
  value: string | undefined
  // isEditing: boolean
  // onChange: (value: string) => void
}

function EditableField({ label, value }: EditableFieldProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {/* {isEditing ? (
        <Input value={value} onChange={(e) => onChange(e.target.value)} className="w-full" />
      ) : ( */}
        <div className="p-2 border rounded-md bg-gray-50">{value}</div>
      {/* )} */}
    </div>
  )
}

export default function UserProfile() {
  const { user } = useUser()
  const [isEditing, setIsEditing] = useState(false)
  // const [editedUser, setEditedUser] = useState(user)

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
      // console.log("Saving changes:", editedUser)
      // updateUser(editedUser)
    }
    setIsEditing(!isEditing)
  }

  // const handleChange = (field: keyof typeof user, value: string) => {
  //   setEditedUser((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }))
  // }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
        <Button onClick={handleEdit} className="bg-[#0a6259] hover:bg-[#085048]">
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <EditableField
          label="Full Name"
          value={user?.name}
          // value={editedUser.fullName}
          // isEditing={isEditing}
          // onChange={(value) => handleChange("fullName", value)}
        />
        <EditableField
          label="Nick Name"
          value={user?.name}
          // value={editedUser.nickName}
          // isEditing={isEditing}
          // onChange={(value) => handleChange("nickName", value)}
        />
        <EditableField
          label="Gender"
          value="Male"
          // value={editedUser.gender}
          // isEditing={isEditing}
          // onChange={(value) => handleChange("gender", value)}
        />
        <EditableField
          label="Language"
          value="English"
          // value={editedUser.language}
          // isEditing={isEditing}
          // onChange={(value) => handleChange("language", value)}
        />
        <EditableField
          label="Time Zone"
          value="GMT+3"
          // value={editedUser.timeZone}
          // isEditing={isEditing}
          // onChange={(value) => handleChange("timeZone", value)}
        />
      </div>
    </div>
  )
}








// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Clock, DollarSign } from "lucide-react"


// const recentJobs = [
//   { id: 351, date: "15 Apr 2023", type: "House Cleaning", amount: 120, status: "Completed" },
//   { id: 348, date: "12 Apr 2023", type: "Office Cleaning", amount: 180, status: "Completed" },
//   { id: 342, date: "08 Apr 2023", type: "Deep Cleaning", amount: 250, status: "Completed" },
//   { id: 337, date: "05 Apr 2023", type: "House Cleaning", amount: 120, status: "Completed" },
//   { id: 331, date: "01 Apr 2023", type: "Move-in Cleaning", amount: 200, status: "Completed" },
// ]

// export default function CleanerProfile() {
//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
//       <div className="grid gap-4 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Jobs</CardTitle>
//             <CardDescription>Last 5 completed jobs</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {recentJobs.map((job) => (
//                 <div key={job.id} className="flex justify-between items-center">
//                   <div>
//                     <div className="font-medium">Order #{job.id}</div>
//                     <div className="text-sm text-muted-foreground flex items-center">
//                       <Clock className="h-3 w-3 mr-1" />
//                       {job.date}
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="font-medium">{job.type}</div>
//                     <div className="text-sm text-muted-foreground flex items-center justify-end">
//                       <DollarSign className="h-3 w-3 mr-1" />
//                       {job.amount}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }