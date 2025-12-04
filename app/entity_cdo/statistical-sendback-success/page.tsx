'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function StatisticalSendbackSuccess() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  const handleDone = () => {
    router.push('/entity_cdo/statistical-assessment/sent-back')
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
                <Link href="/entity_cdo/stakeholder" className="text-sm hover:text-gray-300 transition-colors break-words">
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Review Assessment</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden">
          {/* Large watermark icon */}
          <div className="absolute right-8 bottom-8 opacity-5 pointer-events-none">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900">
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
              <path d="m3 3 18 18" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-[#7A0026]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7A0026" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                  <path d="m3 3 18 18" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Assessment Sent Back Successfully
                </h2>
                <p className="text-gray-600">
                  Your assessment has been reviewed and sent back for revisions.
                </p>
              </div>
            </div>

            {/* Assessment Progress */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Assessment progress</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  <span className="font-semibold">Submission ID:</span> #AS12345
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Submitted On:</span> 20 - 10 - 2024
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Submitted By:</span> Aubullah Sultan
                </p>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-1 bg-red-100 text-red-800 text-sm font-medium rounded">
                  Rejected
                </span>
              </div>
            </div>

            {/* Next Step */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Next Step</h3>
              <p className="text-gray-700 leading-relaxed">
                The team will review your feedback and send you back the revised assessment. You will receive an email notification once the assessment is re-submitted for your review complete.
              </p>
            </div>

            {/* Done Button */}
            <Button
              onClick={handleDone}
              className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-8 py-2 rounded-lg"
            >
              Done
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}
