"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Menu, X, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComplianceSendbackConfirm() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [reasons, setReasons] = useState("")

  const handleLogout = () => {
    router.push("/login")
  }

  const handleSendBack = () => {
    router.push("/entity_cdo/compliance-sendback-success")
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

            <button className="md:hidden text-white flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

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
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-2xl font-bold text-white mb-6">Review Assessment</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden min-h-[600px]">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-start gap-4 mb-6">
              <RotateCcw className="w-12 h-12 text-gray-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Send Back Questions</h2>
                <p className="text-gray-600 mt-1">Your assessment will be sent back for review.</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Assessment progress</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Submission ID: #AS12345</p>
                <p>Submitted On: 20 - 10 - 2024</p>
                <p>Submitted By: Abdallah Sultan</p>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-pink-100 text-pink-800 text-xs px-4 py-1 rounded-full font-medium">
                  Rejected
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Reasons for Sendback</h3>
              <textarea
                value={reasons}
                onChange={(e) => setReasons(e.target.value)}
                placeholder="Enter reasons for sending back the assessment..."
                className="w-full border border-gray-300 rounded-lg p-4 min-h-[150px] text-gray-700 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#7A0026] focus:border-transparent resize-y"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/entity_cdo/review-assessment">
                <Button
                  variant="outline"
                  className="border-[#7A0026] text-[#7A0026] hover:bg-pink-50 px-6 bg-transparent"
                >
                  Back to Compliance Assessment
                </Button>
              </Link>
              <Button onClick={handleSendBack} className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-8">
                Send Back Questions
              </Button>
            </div>
          </div>

          {/* Background Watermark */}
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 250h300" stroke="#7A0026" strokeWidth="4" strokeLinecap="round" />
              <rect x="80" y="150" width="40" height="100" rx="4" fill="#7A0026" />
              <rect x="150" y="100" width="40" height="150" rx="4" fill="#7A0026" />
              <rect x="220" y="50" width="40" height="200" rx="4" fill="#7A0026" />
              <path
                d="M300 100l-50 50m0 0l50 50m-50-50h100"
                stroke="#7A0026"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M50 200c0 0 20 50 50 50s50-50 50-50" stroke="#7A0026" strokeWidth="4" fill="none" />
            </svg>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center mt-auto">
        <div className="text-2xl font-bold text-gray-900"></div>
      </footer>
    </div>
  )
}
