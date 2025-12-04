"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Suspense } from "react"
import Header from "@/components/header"
import { Search, User, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function EntityDetailsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const entityName = searchParams.get("name") || "Ministry of Health"
  const entityIcon = searchParams.get("icon") || "🏥"
  const activeUsers = searchParams.get("users") || "20"
  const complianceScore = searchParams.get("score") || "95"

  const users = [
    {
      id: 1,
      name: "Ahmed Al-Mansouri",
      email: "ahmed.almansouri@moi.gov.qa",
      phone: "+974 5555 1234",
      role: "Admin",
      title: "IT Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 2,
      name: "Fatima Al-Thani",
      email: "fatima.althani@moe.gov.qa",
      phone: "+974 5555 5678",
      role: "CDO",
      title: "HR Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
      active: true,
    },
    {
      id: 3,
      name: "Jamal Al-Hajrani",
      email: "jamal.alhajrani@moi.gov.qa",
      phone: "+974 5556 5677",
      role: "Admin",
      title: "Product Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 4,
      name: "Abdulrahman Suleiman",
      email: "abdulrahman.sluiman@moi.gov.qa",
      phone: "+974 5555 1234",
      role: "User",
      title: "Business Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 5,
      name: "Ali Abubaker",
      email: "ali.abubaker@moi.gov.qa",
      phone: "+974 5555 5678",
      role: "User",
      title: "Marketing Spec...",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 6,
      name: "Ahmed Al-Mansouri",
      email: "ahmed.almansouri@moi.gov.qa",
      phone: "+974 5555 1234",
      role: "Admin",
      title: "IT Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 7,
      name: "Fatima Al-Thani",
      email: "fatima.althani@moe.gov.qa",
      phone: "+974 5555 5678",
      role: "User",
      title: "HR Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 8,
      name: "Jamal Al-Hajrani",
      email: "jamal.alhajrani@moi.gov.qa",
      phone: "+974 5556 5677",
      role: "Admin",
      title: "Product Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      active: true,
    },
    {
      id: 9,
      name: "Abdulrahman Suleiman",
      email: "abdulrahman.sluiman@moi.gov.qa",
      phone: "+974 5555 1234",
      role: "User",
      title: "Business Analyst",
      avatar: "/placeholder.svg?height=40&width=40",
      active: false,
    },
    {
      id: 10,
      name: "Fatima Al-Thani",
      email: "fatima.althani@moe.gov.qa",
      phone: "+974 5555 5678",
      role: "User",
      title: "HR Specialist",
      avatar: "/placeholder.svg?height=40&width=40",
      active: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="stakeholder" />

      {/* Page Header */}
      <div className="header-gradient px-6 py-6">
        <h1 className="text-3xl font-bold text-white">Stakeholder Management</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-[#330818]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8">
            <button className="py-4 px-2 font-medium border-b-2 border-transparent text-white/60 hover:text-white transition"
            onClick={() => router.push("/stakeholder-management")}
            >
              Entities Directory
            </button>
            <button className="py-4 px-2 font-medium border-b-2 border-white text-white transition">
              Users Directory
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Entity Info Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="text-5xl">{entityIcon}</div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Government</p>
                <h2 className="text-2xl font-bold text-foreground mb-3">{entityName}</h2>
                <div className="flex gap-8">
                  <p className="text-sm text-muted-foreground">
                    Assigned external auditor : <span className="text-foreground font-medium">Name</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Number of Users : <span className="text-foreground font-medium">{activeUsers}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Compliance Score: <span className="text-foreground font-medium">{complianceScore}%</span>
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="bg-[#8A1538] hover:bg-primary/90 text-primary-foreground"
              onClick={() => router.push("/stakeholder-management/add-user")}
            >
              + Add New User
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Looking for something specific...?" className="pl-10" />
          </div>
          <div className="relative w-64">
            <Input placeholder="Search on user role..." className="pl-3" />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#8A1538] text-primary-foreground">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    User Full Name
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Qatar Mobile</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    Role
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    Active
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                      />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <User className="h-6 w-6 text-gray-400" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-blue-100 text-blue-800"
                          : user.role === "CDO"
                            ? "bg-pink-100 text-pink-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{user.title}</td>
                  <td className="px-6 py-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={user.active} readOnly className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-muted-foreground hover:text-foreground">
                      <Edit className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            Show{" "}
            <select className="border border-gray-300 rounded px-2 py-1 mx-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            rows at one time.
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm text-muted-foreground hover:bg-gray-100 rounded">Previous</button>
            <button className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded font-semibold">1</button>
            <button className="px-3 py-2 text-sm text-foreground hover:bg-gray-100 rounded">2</button>
            <button className="px-3 py-2 text-sm text-foreground hover:bg-gray-100 rounded">3</button>
            <span className="px-2 text-muted-foreground">...</span>
            <button className="px-3 py-2 text-sm text-foreground hover:bg-gray-100 rounded">7</button>
            <button className="px-3 py-2 text-sm text-muted-foreground hover:bg-gray-100 rounded">Next</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function EntityDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EntityDetailsContent />
    </Suspense>
  )
}
