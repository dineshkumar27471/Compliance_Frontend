"use client"

import Header from "@/components/header"
import { useState } from "react"
import { Search, ChevronDown, Edit2, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const assignmentData = [
  {
    id: 1,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
  {
    id: 2,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
  {
    id: 3,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
  {
    id: 4,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
  {
    id: 5,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
  {
    id: 6,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
  {
    id: 7,
    name: "Mid Year assessment",
    entityCount: 5,
    deadline: "20 - 10 - 2024",
    type: "Compliance Assessment",
    createdBy: "Ahmed Al-Mansouri",
  },
]

const getAssessmentTypeColor = (type: string) => {
  if (type === "Compliance Assessment") {
    return "bg-cyan-50 text-cyan-700 border border-cyan-200"
  }
  return "bg-amber-50 text-amber-700 border border-amber-200"
}

export default function AssignAssessment() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [assignments, setAssignments] = useState(assignmentData)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [formData, setFormData] = useState({
    entityName: "Ministry of Technology",
    fullNameEnglish: "Ahmed Al-Mansouri",
    fullNameArabic: "أحمد المنصوري",
    email: "m.almansouri@mot.gov.qa",
    qatarMobile: "+974 5555 1234",
    title: "Chief People Officer",
    assessmentType: "Statical Assessment",
    role: "CDO",
    externalAuditor: true,
    submissionDeadline: "20 - 10 - 2024",
  })

  const filteredData = assignments.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.createdBy.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  const itemsPerPage = 7
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="assign-assessments" />

      <div className="header-gradient px-6 py-8">
        <h1 className="text-3xl font-bold text-white">Assign assessment</h1>
      </div>

      <div className="px-6 py-8 bg-gray-50 min-h-screen">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Looking for something specific?"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-[#8A1538] hover:bg-[#8A1538]/90 text-white flex items-center gap-2 ml-4"
          >
            <Plus className="h-4 w-4" />
            Create New
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#8A1538] text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      Assign Assessment Name
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Number of entity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      Submission deadline
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Assessment Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Created By</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {paginatedData.map((assignment) => (
                  <tr key={assignment.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{assignment.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{assignment.entityCount}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{assignment.deadline}</td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getAssessmentTypeColor(assignment.type)}`}
                      >
                        {assignment.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{assignment.createdBy}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            router.push(
                              `/assessments/assign/edit?id=${assignment.id}&name=${encodeURIComponent(assignment.name)}&type=${encodeURIComponent(assignment.type)}&deadline=${assignment.deadline}`,
                            )
                          }
                          className="text-muted-foreground hover:text-primary transition"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="text-muted-foreground hover:text-destructive transition">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <button className="text-muted-foreground hover:text-foreground text-sm font-medium">Previous</button>
          {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((page) => (
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

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Create new</h2>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Entity Name</label>
                  <select
                    value={formData.entityName}
                    onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  >
                    <option>Ministry of Technology</option>
                    <option>Ministry of Health</option>
                    <option>Ministry of Education</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name In English</label>
                  <input
                    type="text"
                    value={formData.fullNameEnglish}
                    onChange={(e) => setFormData({ ...formData, fullNameEnglish: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name In Arabic</label>
                  <input
                    type="text"
                    value={formData.fullNameArabic}
                    onChange={(e) => setFormData({ ...formData, fullNameArabic: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground text-right"
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Qatar Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.qatarMobile}
                    onChange={(e) => setFormData({ ...formData, qatarMobile: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Assessment Type</label>
                  <select
                    value={formData.assessmentType}
                    onChange={(e) => setFormData({ ...formData, assessmentType: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  >
                    {/* <option>Statical Assessment</option> */}
                    <option>Compliance Assessment</option>
                    {/* <option>Both</option> */}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  >
                    <option>CDO</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer pb-2">
                    <input
                      type="checkbox"
                      checked={formData.externalAuditor}
                      onChange={(e) => setFormData({ ...formData, externalAuditor: e.target.checked })}
                      className="w-5 h-5 text-[#8A1538] border-gray-300 rounded focus:ring-[#8A1538]"
                    />
                    <span className="text-sm font-medium text-foreground">External Auditor</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Submission Deadline</label>
                  <input
                    type="text"
                    value={formData.submissionDeadline}
                    onChange={(e) => setFormData({ ...formData, submissionDeadline: e.target.value })}
                    placeholder="DD - MM - YYYY"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  onClick={() => setShowCreateModal(false)}
                  variant="outline"
                  className="px-8 py-2 border-[#8A1538] text-[#8A1538] hover:bg-[#8A1538]/10"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    // Handle save logic here
                    setShowCreateModal(false)
                  }}
                  className="px-8 py-2 bg-[#8A1538] hover:bg-[#8A1538]/90 text-white"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
