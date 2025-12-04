'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function AssessmentSuccessPage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white"></div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm font-[family-name:var(--font-lusail)] break-words">DATA REGULATIONS,</div>
                <div className="text-[10px] sm:text-xs break-words">COMPLIANCE AND STATISTICS</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/entity_cdo/ComplianceAssessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
                Compliance Assessment
              </Link>
              {/* <Link href="/entity_cdo/statistical-assessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
                Statistical Assessment
              </Link> */}
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
              <button onClick={() => router.push('/login')} className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0">
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
                <Link href="/entity_cdo/ComplianceAssessment" className="text-sm hover:text-gray-300 transition-colors break-words">
                  Compliance Assessment
                </Link>
                {/* <Link href="/entity_cdo/statistical-assessment" className="text-sm hover:text-gray-300 transition-colors break-words">
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
                <button onClick={() => router.push('/login')} className="text-sm text-left hover:text-gray-300 transition-colors">
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-lusail)]">
          Review Assessment
        </h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 relative overflow-hidden">
          {/* Large checkmark watermark */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5">
            <CheckCircle2 className="w-64 h-64 text-gray-400" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Success Icon and Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 relative">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="8" width="40" height="48" rx="2" fill="#7A0026"/>
                    <path d="M20 16h24M20 24h24M20 32h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="48" cy="48" r="12" fill="#10B981"/>
                    <path d="M43 48l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-lusail)]">
                  Assessment Submitted Successfully
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Your assessment has been received and is pending approval.
                </p>
              </div>
            </div>

            {/* Assessment Progress */}
            <div className="mb-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-lusail)]">
                Assessment progress
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gray-600 font-medium min-w-32">Submission ID:</span>
                  <span className="text-gray-900 font-semibold">#AS12345</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600 font-medium min-w-32">Submitted On:</span>
                  <span className="text-gray-900">20 - 10 - 2024</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-600 font-medium min-w-32">Submitted By:</span>
                  <span className="text-gray-900">Abdullah Sultan (CDO)</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Pending NPC Approval
                </span>
              </div>
            </div>

            {/* Next Step */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-[family-name:var(--font-lusail)]">
                Next Step
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The team will review your submission within 3-5 business days. You will receive an email notification once the review is complete. If approved, you'll be able to access your results in the portal.
              </p>
            </div>

            {/* Done Button */}
            <Button 
              onClick={() => router.push('/entity_cdo/ComplianceAssessment/submitted')}
              className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-8 py-2"
            >
              Done
            </Button>
          </div>
        </div>
      </main>

    
    </div>
  )
}
