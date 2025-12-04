"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ChevronDown, ChevronUp, Menu, X, Edit, MessageSquare, Upload, Eye, Check, Undo2 } from "lucide-react"
import { Button } from "@/components/ui/button"

function ReviewAssessmentContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const domainId = searchParams.get("domain")

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedDomain, setExpandedDomain] = useState(() => {
    if (domainId) {
      const domains = [
        "economic",
        "data-architecture",
        "document",
        "data-quality",
        "data-catalog",
        "master-reference",
        "data-storage",
        "data-sharing",
        "statistics",
        "data-monetization",
        "data-security",
        "data-culture",
      ]
      const index = Number.parseInt(domainId) - 1
      return domains[index] || "economic"
    }
    return "economic"
  })
  const [showFeedback, setShowFeedback] = useState<string | null>(null)
  const [q1Answer, setQ1Answer] = useState("no")
  const [feedbacks, setFeedbacks] = useState<{ [key: string]: string }>({})

  const handleApprove = () => {
    router.push("/entity_cdo/assessment-success")
  }

  const handleSendBack = () => {
    router.push("/entity_cdo/compliance-sendback-confirm")
  }

  const domains = [
    { id: "economic", name: "Economic Performance And Diversification", questions: 20 },
    { id: "data-architecture", name: "Data Architecture and Modeling", questions: 30 },
    { id: "document", name: "Document and Content Management", questions: 5 },
    { id: "data-quality", name: "Data Quality Management", questions: 10 },
    { id: "data-catalog", name: "Data Catalog and Metadata Management", questions: 20 },
    { id: "master-reference", name: "Master and Reference Data Management", questions: 10 },
    { id: "data-storage", name: "Data Storage and Operations", questions: 30 },
    { id: "data-sharing", name: "Data Sharing, Integration and Interoperability", questions: 7 },
    { id: "statistics", name: "Statistics and Analytics", questions: 22 },
    { id: "data-monetization", name: "Data Monetization", questions: 12 },
    { id: "data-security", name: "Data Security, Privacy and Other Regulations", questions: 10 },
    { id: "data-culture", name: "Data Culture and Literacy", questions: 5 },
  ]

  const sampleQuestions = [
    "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
    "Has the organization documented the governance model for personal data protection, e.g., with...",
    "Have you considered whether a statutory DPO is required and their roles and responsibilities are...",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white"></div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm font-[family-name:var(--font-lusail)] break-words">
                  DATA REGULATIONS,
                </div>
                <div className="text-[10px] sm:text-xs break-words">COMPLIANCE AND STATISTICS</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entity_cdo/ComplianceAssessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Compliance Assessment
              </Link>
              <Link
                href="/entity_cdo/statistical-assessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Statistical Assessment
              </Link>
              <Link
                href="/entity_cdo/dashboard"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Dashboard
              </Link>
            </nav>

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
                onClick={() => router.push("/login")}
                className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0"
              >
                <img src="/placeholder-user.png" alt="User" className="w-full h-full object-cover" />
              </button>
            </div>

            <button className="md:hidden text-white flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-3">
                <Link
                  href="/entity_cdo/ComplianceAssessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Compliance Assessment
                </Link>
                {/* <Link
                  href="/entity_cdo/statistical-assessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Statistical Assessment
                </Link> */}
               stakeholder-management
                <Link href="/entity_cdo/dashboard" className="text-sm hover:text-gray-300 transition-colors break-words">
                  Dashboard
                </Link>
                <button
                  onClick={() => router.push("/login")}
                  className="text-sm text-left hover:text-gray-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-lusail)] break-words">
          Compliance Assessment
        </h1>

        {/* Notice Card */}
        <div className="bg-white border-2 border-red-200 rounded-lg p-4 sm:p-6 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-base sm:text-lg font-bold text-[#7A0026] font-[family-name:var(--font-lusail)] break-words">
              Please Review the Assessment
            </h2>
            <div className="flex gap-2 sm:gap-3 self-end sm:self-auto">
              <Button
                onClick={handleSendBack}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 text-sm px-3 sm:px-4 py-2 w-auto bg-transparent"
                title="Send Back Assessment"
              >
                <span className="hidden sm:inline">Send Back Assessment</span>
                <Undo2 className="sm:hidden w-5 h-5" />
              </Button>
              <Button
                onClick={handleApprove}
                className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white text-sm px-3 sm:px-6 py-2 w-auto"
                title="Approve"
              >
                <span className="hidden sm:inline">Approve</span>
                <Check className="sm:hidden w-5 h-5" />
              </Button>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 break-words leading-relaxed">
            You can review all of questions and answers. Don't forget that compliance self assessment form must be
            accurate, complete, and aligned with standards before submission
          </p>
          <div className="flex items-center justify-between">
            <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden mr-3">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
            </div>
            <span className="text-sm sm:text-base font-bold text-green-600 whitespace-nowrap">100%</span>
          </div>
        </div>

        {/* Domains Accordion */}
        <div className="space-y-4">
          {domains.map((domain, index) => (
            <div key={domain.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setExpandedDomain(expandedDomain === domain.id ? "" : domain.id)}
                className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-left break-words pr-2">
                  {domain.name}
                </h3>
                {expandedDomain === domain.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {expandedDomain === domain.id && (
                <div className="px-4 sm:px-6 pb-4 space-y-3 bg-gray-50">
                  {index === 0 && (
                    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-8 h-8 bg-[#7A0026] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                          1
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900 mb-4 break-words leading-relaxed">{sampleQuestions[0]}</p>
                          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs sm:text-sm">
                            <button className="text-gray-600 hover:text-[#7A0026] transition-colors flex items-center gap-1 whitespace-nowrap">
                              <Upload className="w-4 h-4" /> Add Feedback
                            </button>
                            <button className="text-gray-600 hover:text-[#7A0026] transition-colors flex items-center gap-1 whitespace-nowrap">
                              <Eye className="w-4 h-4" /> Show Reference
                            </button>
                          </div>
                          <div className="flex items-center gap-4 mb-4">
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="q1"
                                value="yes"
                                checked={q1Answer === "yes"}
                                onChange={(e) => setQ1Answer(e.target.value)}
                                className="w-4 h-4 text-[#7A0026]"
                              />
                              <span className="text-sm">Yes</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="q1"
                                value="no"
                                checked={q1Answer === "no"}
                                onChange={(e) => setQ1Answer(e.target.value)}
                                className="w-4 h-4 text-[#7A0026]"
                              />
                              <span className="text-sm">No</span>
                            </label>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2 break-words">
                                Add Plus *
                              </label>
                              <p className="text-xs sm:text-sm text-gray-600 bg-gray-50 p-3 rounded border border-gray-200 break-words leading-relaxed">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book.
                              </p>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2 break-words">
                                Add Feedback
                              </label>
                              <input
                                type="text"
                                value={feedbacks["q1"] || ""}
                                onChange={(e) => setFeedbacks({ ...feedbacks, q1: e.target.value })}
                                placeholder="Enter your feedback about the answer..."
                                className="w-full text-xs sm:text-sm text-gray-900 bg-white p-3 rounded border border-gray-300 focus:border-[#7A0026] focus:ring-1 focus:ring-[#7A0026] outline-none"
                              />
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button
                              variant="outline"
                              className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white text-sm px-4 py-2 bg-transparent"
                            >
                              Save
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {sampleQuestions.slice(1, 16).map((question, qIndex) => (
                    <div
                      key={qIndex + 2}
                      className="bg-gray-50 p-3 sm:p-4 rounded-lg flex items-center justify-between gap-3 border border-gray-200"
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="w-7 h-7 bg-[#7A0026] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {qIndex + 2}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 break-words leading-relaxed">{question}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button className="w-7 h-7 bg-[#7A0026] text-white rounded flex items-center justify-center hover:bg-[#5C1F3A] transition-colors">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                        <button className="w-7 h-7 bg-[#7A0026] text-white rounded flex items-center justify-center hover:bg-[#5C1F3A] transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 ml-2 whitespace-nowrap">Yes</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

     
    </div>
  )
}

export default function ReviewAssessmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <ReviewAssessmentContent />
    </Suspense>
  )
}
