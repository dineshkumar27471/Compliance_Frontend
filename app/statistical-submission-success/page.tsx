"use client"

import { Button } from "@/components/ui/button"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StatisticalSubmissionSuccessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Data Regulations Logo"
              width={200}
              height={40}
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/cdo/assessment-domains" className="text-white text-sm hover:text-white/80 transition-colors">
              Compliance Assessment
            </Link>
            <Link
              href="/cdo/statistical-assessment"
              className="text-white text-sm font-semibold hover:text-white/80 transition-colors border-b-2 border-white pb-1"
            >
              Statistical Assessment
            </Link>
            <Link href="/cdo/dashboard" className="text-white text-sm hover:text-white/80 transition-colors">
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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
                src="/placeholder-user.png"
                alt="User avatar"
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
                href="/cdo/assessment-domains"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance Assessment
              </Link>
              <Link
                href="/cdo/statistical-assessment"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10 border-l-2 border-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Statistical Assessment
              </Link>
              <Link
                href="/cdo/dashboard"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#3B071B] to-[#250511] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white text-2xl sm:text-3xl font-bold font-[family-name:var(--font-lusail)]">
            Statistical Assessment
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-5 pointer-events-none">
            <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C44B6C] rounded-lg flex items-center justify-center">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-lusail)]">
                Assessment Submitted Successfully
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Your assessment has been received and is pending approval.
              </p>
            </div>
          </div>

          <div className="mb-8 relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-lusail)]">
              Assessment progress
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 min-w-[120px]">Submission ID:</span>
                <span className="text-sm font-semibold text-gray-900">#AS12345</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 min-w-[120px]">Submitted On:</span>
                <span className="text-sm font-semibold text-gray-900">
                  {new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 min-w-[120px]">Submitted By:</span>
                <span className="text-sm font-semibold text-gray-900">Ali aziz</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                  In Review By CDO Abdullah Sultan
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8 relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-lusail)]">Next Step</h3>
            <p className="text-gray-600 leading-relaxed">
              The team will review your submission within 3-5 business days. You will receive an email notification once
              the review is complete. If approved, you'll be able to access your results in the portal.
            </p>
          </div>

          <Button
            className="bg-[#7A0026] hover:bg-[#5A001E] text-white px-8 relative z-10"
            onClick={() => router.push("/cdo/statistical-assessment/submitted")}
          >
            Back to Home
          </Button>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="text-gray-900 text-lg font-[family-name:var(--font-lusail)]">IQNS CE ANI</div>
        </footer>
      </main>
    </div>
  )
}
