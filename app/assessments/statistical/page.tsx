"use client"

import Header from "@/components/header"
import { useState } from "react"
import { Search, ChevronDown, Eye, FileCheck, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const assessmentData = [
  {
    id: 1,
    name: "Ministry of Health",
    status: "Pending",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Ahmad ALI",
    auditor: "PWC",
    action: "Review Assessment",
  },
  {
    id: 2,
    name: "Ministry of Foreign Affairs",
    status: "In Progress",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Ahmad ALI",
    auditor: "PWC",
    action: "Review Assessment",
  },
  {
    id: 3,
    name: "Ministry of Education and Sports",
    status: "Completed",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Ahmad ALI",
    auditor: "PWC",
    action: "View Result",
  },
  {
    id: 4,
    name: "Ministry of Finance",
    status: "Completed",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Omar Ahmed",
    auditor: "PWC",
    action: "View Results",
  },
  {
    id: 5,
    name: "Ministry of Justice",
    status: "Pending",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Ahmad Ali",
    auditor: "PWC",
    action: "Review Assessment",
  },
  {
    id: 6,
    name: "Ministry of Economy and Trade",
    status: "In Progress",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Khaled Abdallah",
    auditor: "PWC",
    action: "Review Assessment",
  },
  {
    id: 7,
    name: "Ministry of Municipal Affairs",
    status: "Pending",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Mohammed N.",
    auditor: "PWC",
    action: "Review Assessment",
  },
  {
    id: 8,
    name: "Ministry of Labour",
    status: "In Progress",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Mohammed S.",
    auditor: "PWC",
    action: "Review Assessment",
  },
  {
    id: 9,
    name: "Ministry of Transport",
    status: "Completed",
    type: "Self-assessment",
    due: "January 1, 2025 - December 31, 2025",
    cdo: "Ahmad Ali",
    auditor: "PWC",
    action: "View Results",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-red-50 text-red-700 border border-red-200"
    case "In Progress":
      return "bg-amber-50 text-amber-700 border border-amber-200"
    case "Completed":
      return "bg-cyan-50 text-cyan-700 border border-cyan-200"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function StatisticalAssessments() {
  const [activeTab, setActiveTab] = useState("assessment")
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [roleFilter, setRoleFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = assessmentData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cdo.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = !statusFilter || item.status === statusFilter
    const matchesRole = !roleFilter || item.auditor === roleFilter
    return matchesSearch && matchesStatus && matchesRole
  })

  const itemsPerPage = 9
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="statistical-assessments" />

      <div className="header-gradient px-6 py-8">
        <h2 className="text-3xl font-bold text-white mb-0">Statistical Assessments</h2>
      </div>

      <div className="px-6 py-8 bg-gray-50 min-h-screen">
        {/* Filters */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Search</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Looking for something specific...?"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Status</label>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-background text-foreground"
                >
                  <option value="">Search an entity name...</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Role Filter */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Role</label>
              <div className="relative">
                <select
                  value={roleFilter}
                  onChange={(e) => {
                    setRoleFilter(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-background text-foreground"
                >
                  <option value="">Search on user role...</option>
                  <option value="PWC">PWC</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedData.map((assessment) => (
            <div
              key={assessment.id}
              className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-foreground">{assessment.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(assessment.status)}`}>
                  {assessment.status}
                </span>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <FileCheck className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Type:</strong> {assessment.type}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Due:</strong> {assessment.due}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Submitted by CDO:</strong> {assessment.cdo}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Assigned Auditor:</strong> {assessment.auditor}
                  </span>
                </div>
              </div>

              <div className="border-t border-border mt-4 pt-4">
                <button className="text-primary text-sm font-semibold hover:text-primary/80 mb-4 flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  View Details
                </button>
                <Button className="w-full bg-[#8A1538] hover:bg-[#8A1538]/90 text-white">{assessment.action}</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2">
          <button className="text-muted-foreground hover:text-foreground text-sm font-medium">Previous</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded text-sm font-semibold transition ${
                currentPage === page ? "bg-[#8A1538] text-white" : "bg-gray-200 text-foreground hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="text-muted-foreground hover:text-foreground text-sm font-medium">Next</button>
        </div>
      </div>
    </div>
  )
}
