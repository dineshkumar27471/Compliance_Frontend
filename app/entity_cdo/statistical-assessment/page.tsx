"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuditorStatisticalAssessment() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/logo-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                className="h-6 sm:h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entity_cdo/ComplianceAssessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Compliance Assessment
              </Link>
              <Link
                href="/entity_cdo/statistical-assessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap border-b-2 border-white"
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
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Compliance Assessment
                </Link>
                <Link
                  href="/entity_cdo/statistical-assessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words border-b border-white pb-1"
                >
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
        <div className="bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-2xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-lusail)] break-words">
                New Statistical Assessment Submitted For Review
              </h2>
              <div className="space-y-2 mb-4">
                <p className="text-white text-sm break-words">
                  <span className="font-semibold">Due Date:</span> October 20, 2024
                </p>
                <p className="text-white text-sm break-words">
                  <span className="font-semibold">Submitted by :</span> Ahmad OWC
                </p>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed break-words">
                Review the submitted statistical assessment to ensure compliance with national data quality standards.
                Your evaluation helps maintain the integrity and reliability of official statistics.
              </p>
              <Button
                onClick={() => router.push("/entity_cdo/statistical-principles")}
                className="bg-white text-[#7A0026] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
              >
                Review Assessment
              </Button>
            </div>
            <div className="relative h-64 md:h-auto hidden md:block">
              <img
                src="/images/e0814ed9e90cb09f06294eaa8e75f948840bf1c9.png"
                alt="Digital hand illustration"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 relative overflow-hidden">
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-6xl sm:text-[120px] font-bold text-gray-100 font-[family-name:var(--font-lusail)] pointer-events-none">
              01
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 relative z-10 font-[family-name:var(--font-lusail)] break-words">
              Statistical Quality Guide
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 break-words">
              Ensure adherence to the National Quality Assurance Framework (NQAF). This guide provides the criteria and
              indicators necessary for evaluating statistical processes and outputs effectively.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#8B7F5E] to-[#6B5E3F] rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-[family-name:var(--font-lusail)] break-words">
              Assessment Scoring
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed break-words">
              Learn how the statistical compliance score is calculated based on the NQAF principles. Understanding the
              scoring methodology ensures consistent and fair evaluation across all departments.
            </p>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-lusail)] break-words">
            Explore Our Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-lusail)] break-words">
                NQAF Framework
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed break-words">
                Access the full National Quality Assurance Framework documentation to support your assessment review
                process.
              </p>
              <Button
                variant="outline"
                className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-lusail)] break-words">
                Best Practices
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed break-words">
                Review international best practices for official statistics to benchmark the submitted assessments
                effectively.
              </p>
              <Button
                variant="outline"
                className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-lusail)] break-words">
                Audit Guidelines
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed break-words">
                Comprehensive guidelines for auditors on how to evaluate evidence and provide constructive feedback.
              </p>
              <Button
                variant="outline"
                className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  )
}
