"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, FileBarChart2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuditorComplianceAssessmentSentBack() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }

  const domainScores = [
    { id: 1, name: "Economic Performance And Diversification", score: 55, color: "bg-yellow-500" },
    { id: 2, name: "Data Architecture and Modeling", score: 10, color: "bg-red-500" },
    { id: 3, name: "Document and Content Management", score: 70, color: "bg-green-500" },
    { id: 4, name: "Data Quality Management", score: 10, color: "bg-red-500" },
    { id: 5, name: "Data Catalog and Metadata Management", score: 55, color: "bg-yellow-500" },
    { id: 6, name: "Master and Reference Data Management", score: 75, color: "bg-green-500" },
    { id: 7, name: "Data Storage and Operations", score: 68, color: "bg-green-500" },
    { id: 8, name: "Data Monetization", score: 75, color: "bg-green-500" },
    { id: 9, name: "Statistics and Analytics", score: 80, color: "bg-green-600" },
    { id: 10, name: "Data Security, Privacy & Other Regulations", score: 55, color: "bg-yellow-500" },
    { id: 11, name: "Data Culture and Literacy", score: 10, color: "bg-red-500" },
    { id: 12, name: "Data Sharing, Integration & Interoperability", score: 70, color: "bg-green-500" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white"></div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm font-[family-name:var(--font-lusail)] break-words">
                  DATA REGULATIONS,
                </div>
                <div className="text-[10px] sm:text-xs break-words">COMPLIANCE AND STATISTICS</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entity_cdo/ComplianceAssessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap border-b-2 border-white"
              >
                Compliance Assessment
              </Link>
              {/* <Link
                href="/entity_cdo/statistical-assessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Statistical Assessment
              </Link> */}
                <Link
                  href="/entity_cdo/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link>
              <Link
                href="/entity_cdo/dashboard"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Dashboard
              </Link>
            </nav>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm hover:text-gray-300 transition-colors flex items-center gap-1 whitespace-nowrap">
                <span className="text-xs">✨</span> Ask Bayan
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm">⚙️</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm">£</span>
              </button>
              <button className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-sm">🔔</span>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={handleLogout}
                className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0"
              >
                <img src="/placeholder-user.png" alt="User" className="w-full h-full object-cover" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-3">
                <Link
                  href="/entity_cdo/ComplianceAssessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words border-b border-white pb-1"
                >
                  Compliance Assessment
                </Link>
                {/* <Link
                  href="/entity_cdo/statistical-assessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Statistical Assessment
                </Link> */}
                   <Link
                  href="/entity_cdo/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link>
                
                <Link href="/entity_cdo/dashboard" className="text-sm hover:text-gray-300 transition-colors break-words">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-sm text-left hover:text-gray-300 transition-colors">
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>

        {/* Greeting */}
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-lusail)] break-words">
            Hello Abdallah (Ministry of Health)
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-2xl p-6 sm:p-8 md:p-12 mb-8 overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-lusail)]">
              Assessment progress
            </h2>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#8B2346] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white/20">
                <FileBarChart2 className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-1">
                <p className="text-white/90 text-sm">
                  <span className="font-medium">Submitted On:</span> 20 - 10 - 2024
                </p>
                <p className="text-white/90 text-sm">
                  <span className="font-medium">Submitted By:</span> Ali Aziz
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#8B2346] text-white px-6 py-2 rounded-md text-sm font-medium border border-white/10">
                Sent Back
              </span>
              <Link href="/entity_cdo/review-assessment">
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 px-6 py-2 h-auto text-sm font-medium"
                >
                  View Assessment
                </Button>
              </Link>
            </div>

            <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
              The team is working on the assessment and you will be notified once it's submitted for your review.
            </p>
          </div>

          {/* Hero Image */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-60 hidden md:block pointer-events-none">
            <img
              src="/images/e0814ed9e90cb09f06294eaa8e75f948840bf1c9.png"
              alt="Digital Technology"
              className="w-full h-full object-cover mask-image-linear-gradient"
              style={{ maskImage: "linear-gradient(to right, transparent, black)" }}
            />
          </div>
        </div>

        {/* Audit Logs Section */}
        <div className="bg-white rounded-xl border border-gray-200 mb-12 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-lusail)]">Audit logs</h3>
            <button className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 font-medium">
              View all <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50/50">
                <tr>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium w-48">Done Date</th>
                  <th className="px-6 py-3 font-medium w-48">Done By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">New Feedback Has been Added</div>
                    <div className="text-xs text-gray-500 mt-0.5">Assessment Submitted</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">21 Aug 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">Ali.Aziz</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">Compliance Assessment has been submitted</div>
                    <div className="text-xs text-gray-500 mt-0.5">Assessment Returned</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">08 Aug 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">Abdullah.Saleh</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">Data Culture and Literacy Domain has been submitted</div>
                    <div className="text-xs text-gray-500 mt-0.5">Assessment Returned</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">11 Jul 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">Ali.Aziz</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      Data Security, Privacy and Other Regulations has been completed
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">Assessment Submittied</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">01 Jul 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">Abdullah.Saleh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Score Breakdown By Domains */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-[family-name:var(--font-lusail)] mb-6">
            Score Breakdown By Domains
          </h3>
          <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 overflow-hidden">
            <div className="grid gap-3 sm:gap-4">
              {domainScores.map((domain) => (
                <div key={domain.id} className="flex items-center gap-2 sm:gap-4 min-w-0">
                  <div className="w-8 h-8 bg-[#7A0026] text-white rounded flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {domain.id.toString().padStart(2, "0")}
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <div className="text-xs sm:text-sm font-medium text-gray-900 break-words line-clamp-2">
                      {domain.name}
                    </div>
                  </div>
                  <div
                    className={`w-10 sm:w-12 h-8 ${domain.color} text-white rounded flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0`}
                  >
                    {domain.score}
                  </div>
                  <div className="w-20 sm:w-32 md:w-48 h-8 bg-gray-100 rounded-full overflow-hidden hidden sm:block flex-shrink-0">
                    <div className={`h-full ${domain.color}`} style={{ width: `${domain.score}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}

    </div>
  )
}
