"use client"

import { Button } from "@/components/ui/button"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ComplianceSubmissionSuccessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
       <header className="h-[200px] bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo-data-regulations-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                width={250}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <Link href="/entityco/assessment-domains" className="text-white text-sm hover:text-white/80 transition-colors">
                Compliance Assessment
              </Link>
              {/* <Link
                href="/entityco/statistical-assessment"
                className="text-white text-sm hover:text-white/80 transition-colors"
              >
                Statistical Assessment
              </Link> */}
              <Link href="/entityco/dashboard" className="text-white text-sm hover:text-white/80 transition-colors">
                Dashboard
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm hidden sm:inline">Ask Bayan</span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block">
                <HelpCircle className="w-5 h-5 text-white" />
              </button>
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <Link
                  href="/entityco/assessment-domains"
                  className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Compliance Assessment
                </Link>
                <span className="mx-2">|</span>
                {/* <Link
                  href="/entityco/statistical-assessment"
                  className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Statistical Assessment
                </Link> */}
                <Link
                  href="/entityco/dashboard"
                  className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </div>
            </div>
          )}

          <div className="mt-4 sm:mt-6">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Compliance Assessment</h1>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-5xl mx-auto z-20 -mt-20">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-10 relative overflow-hidden">
          {/* Large Watermark Checkmark */}
          <div className="absolute -right-20 -bottom-20 opacity-5">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path
                d="M160 260L100 200L85 215L160 290L315 135L300 120L160 260Z"
                fill="#7A0026"
                stroke="#7A0026"
                strokeWidth="10"
              />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Icon and Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-[#7A0026] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l6 6" />
                </svg>
              </div>
              <div>
                <h2 className="text-gray-900 text-2xl font-bold mb-2">Assessment Submitted Successfully</h2>
                <p className="text-gray-700">Your assessment has been received and is pending approval.</p>
              </div>
            </div>

            {/* Assessment Progress Section */}
            <div className="mb-8">
              <h3 className="text-gray-900 font-bold text-lg mb-4">Assessment progress</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Submission ID:</span> #AS12345
                </p>
                <p>
                  <span className="font-medium">Submitted On:</span> 20 - 10 - 2024
                </p>
                <p>
                  <span className="font-medium">Submitted By:</span> Ali aziz
                </p>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  In Review By CDO Abdullah Sultan
                </span>
              </div>
            </div>

            {/* Next Step Section */}
            <div className="mb-8">
              <h3 className="text-gray-900 font-bold text-lg mb-3">Next Step</h3>
              <p className="text-gray-700 leading-relaxed">
                The team will review your submission within 3-5 business days. You will receive an email notification
                once the review is complete. If approved, you'll be able to access your results in the portal.
              </p>
            </div>

            {/* Back to Home Button */}
            <Link href="/entityco/dashboard">
              <Button className="bg-[#7A0026] hover:bg-[#5A001C] px-8">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
  
    </div>
  )
}
