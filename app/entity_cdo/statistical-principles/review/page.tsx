'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Menu, X, MoreVertical, List, Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ReviewContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const principleId = searchParams.get('principle') || '1'
  const currentPrinciple = parseInt(principleId)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [actionMenuOpen, setActionMenuOpen] = useState(false)
  const [feedbackModalOpen, setFeedbackModalOpen] = useState<number | null>(null)
  const [auditorFeedback, setAuditorFeedback] = useState<{ [key: number]: string }>(
    Array(10).fill('').reduce((acc, _, index) => ({ ...acc, [index]: '' }), {})
  )

  const handleLogout = () => {
    router.push('/login')
  }

  const handleApprove = () => {
    setActionMenuOpen(false)
    if (currentPrinciple >= 10) {
      router.push('/entity_cdo/statistical-success')
    } else {
      router.push(`/entity_cdo/statistical-principles/review?principle=${currentPrinciple + 1}`)
    }
  }

  const handleBackToList = () => {
    setActionMenuOpen(false)
    router.push('/entity_cdo/statistical-principles')
  }

  const handleSaveFeedback = (index: number) => {
    setFeedbackModalOpen(null)
  }

  const handleSendFeedback = () => {
    setActionMenuOpen(false)
    router.push('/entity_cdo/statistical-sendback-confirm')
  }

  const principles = [
    "Provide legislative tools for official statistics that stipulate the establishment of a national statistical system, which its members and appoint a central authority for the national statistical system.",
    "Establish an advisory statistics committee that includes representatives of members of the statistical system to perform the following tasks:",
    "Plan, implement, coordinate, organize and evaluate the production and dissemination of official statistics and ensure their quality.",
    "Establish guidelines for sharing administrative records or other data between members of the national statistical system.",
    "Establish legislation tools that clearly demonstrate for the statistical data producers in the country how to access administrative internal data facility with a view to using them for statistical purposes.",
    "Establish legislation tools that ensure the confidentiality of information collected and used for statistical or administrative purposes only.",
    "Provide and organize reliable IT systems for data exchange between the supporting national departments and the PSA.",
    "Sign formal agreements for data exchange between the statistical data producers in the country and the PSA.",
    "Establish common databases to exchange data between statistical administrative units in ministries and government agencies, as equivalent, and the PSA.",
    "The PSA determines the main variables that need to be shared between data producers in the country line with data confidentiality rules."
  ]

  const cdoAssessments: { [key: number]: string } = {
    0: 'full',
    1: 'full', 
    2: 'partial',
    3: 'full',
    4: 'partial',
    5: 'full',
    6: 'full',
    7: 'partial',
    8: 'full',
    9: 'full'
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white"></div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm break-words">DATA REGULATIONS,</div>
                <div className="text-[10px] sm:text-xs break-words">COMPLIANCE AND STATISTICS</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/entity_cdo/ComplianceAssessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
                Compliance Assessment
              </Link>
              <Link href="/entity_cdo/statistical-assessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap border-b-2 border-white">
                Statistical Assessment
              </Link>
              <Link href="/entity_cdo/dashboard" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
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
              <button onClick={handleLogout} className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0">
                <img src="/placeholder-user.png" alt="User" className="w-full h-full object-cover" />
              </button>
            </div>

            <button
              className="md:hidden text-white flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-3">
                <Link href="/entity_cdo/ComplianceAssessment" className="text-sm hover:text-gray-300 transition-colors break-words">
                  Compliance Assessment
                </Link>
                <Link href="/entity_cdo/statistical-assessment" className="text-sm hover:text-gray-300 transition-colors break-words border-b border-white pb-1">
                  Statistical Assessment
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Statistical Assessment Principles
          </h1>
          <Button className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-6 py-2 rounded-lg">
            Export
          </Button>
        </div>

        {/* Domain Header Card */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6 border-l-4 border-green-500">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-lg font-bold text-gray-900">
              National Statistical System Coordination
            </h2>
            <div className="hidden lg:flex gap-2 flex-shrink-0">
              <Button 
                onClick={handleBackToList}
                variant="outline" 
                className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white px-4 py-2 text-sm"
              >
                Principle List
              </Button>
              <Button 
                onClick={handleSendFeedback}
                variant="outline" 
                className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white px-4 py-2 text-sm"
              >
                Send Back Assessment
              </Button>
              <Button 
                onClick={handleApprove}
                className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-4 py-2 text-sm"
              >
                Approve
              </Button>
            </div>
            <div className="lg:hidden relative">
              <Button
                onClick={() => setActionMenuOpen(!actionMenuOpen)}
                variant="outline"
                className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white w-10 h-10 p-0 flex items-center justify-center"
              >
                <MoreVertical className="w-5 h-5" />
              </Button>
              {actionMenuOpen && (
                <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg border border-gray-200 py-2 w-48 z-50">
                  <button
                    onClick={handleBackToList}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <List className="w-4 h-4" />
                    Principle List
                  </button>
                  <button
                    onClick={handleSendFeedback}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Back Assessment
                  </button>
                  <button
                    onClick={handleApprove}
                    className="w-full px-4 py-2 text-left text-sm text-[#7A0026] font-semibold hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Approve
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="font-bold text-gray-900">100%</span>
          </div>
        </div>

        {/* Principles List */}
        <div className="space-y-6">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              {/* Principle Header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#7A0026] text-white flex items-center justify-center rounded font-bold text-sm sm:text-base">
                  P{index + 1}
                </div>
                <p className="flex-1 text-sm text-gray-700 leading-relaxed break-words">
                  {principle}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 ml-0 sm:ml-14">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`assessment-${index}`}
                    value="full"
                    checked={cdoAssessments[index] === 'full'}
                    readOnly
                    className="w-4 h-4 text-red-600 cursor-default flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700">Full Compliance</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`assessment-${index}`}
                    value="partial"
                    checked={cdoAssessments[index] === 'partial'}
                    readOnly
                    className="w-4 h-4 text-red-600 cursor-default flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700">Partial Compliance</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`assessment-${index}`}
                    value="non"
                    checked={cdoAssessments[index] === 'non'}
                    readOnly
                    className="w-4 h-4 text-red-600 cursor-default flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700">Non compliant</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`assessment-${index}`}
                    value="not"
                    checked={cdoAssessments[index] === 'not'}
                    readOnly
                    className="w-4 h-4 text-red-600 cursor-default flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700">Not assessed</span>
                </label>
              </div>

              <div className="ml-0 sm:ml-14 mt-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2 break-words">
                      Specify Strengths, Weaknesses, Other Comments <span className="text-red-500">*</span>
                    </h3>
                  </div>
                  <Button
                    onClick={() => setFeedbackModalOpen(index)}
                    variant="ghost"
                    className="text-[#7A0026] hover:text-[#5C1F3A] hover:bg-transparent flex items-center gap-1 flex-shrink-0 self-start sm:self-auto p-0 sm:p-2 h-auto"
                  >
                    <span className="text-lg">✏️</span>
                    <span className="text-sm">Add Feedback</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {feedbackModalOpen !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 break-words">
              Add CDO Feedback for P{feedbackModalOpen + 1}
            </h2>
            <textarea
              value={auditorFeedback[feedbackModalOpen]}
              onChange={(e) => setAuditorFeedback({ ...auditorFeedback, [feedbackModalOpen]: e.target.value })}
              placeholder="Enter your feedback as an CDO..."
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#7A0026] focus:border-transparent resize-none"
              rows={6}
            />
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
              <Button
                onClick={() => setFeedbackModalOpen(null)}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleSaveFeedback(feedbackModalOpen)}
                className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white w-full sm:w-auto"
              >
                Save Feedback
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
     
    </div>
  )
}

export default function StatisticalPrinciplesReview() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReviewContent />
    </Suspense>
  )
}
