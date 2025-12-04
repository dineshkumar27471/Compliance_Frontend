"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuditorComplianceAssessmentPage() {
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

  const controlBreakdown = [
    { name: "Economic Performance And Diversification", score: 50, trend: "-0.04 W/W" },
    { name: "Data Architecture and Modeling", score: 50, trend: "-0.04 W/W" },
    { name: "Document and Content Management", score: 50, trend: "-0.04 W/W" },
    { name: "Data Quality Management", score: 50, trend: "-0.04 W/W" },
    { name: "Data Catalog and Metadata Management", score: 50, trend: "-0.04 W/W" },
    { name: "Master and Reference Data Management", score: 50, trend: "-0.04 W/W" },
    { name: "Data Storage and Operations", score: 50, trend: "-0.04 W/W" },
    { name: "Data Monetization", score: 50, trend: "-0.04 W/W" },
    { name: "Statistics and Analytics", score: 50, trend: "-0.04 W/W" },
    { name: "Data Security, Privacy and Other Regulations", score: 50, trend: "-0.04 W/W" },
    { name: "Data Culture and Literacy", score: 50, trend: "-0.04 W/W" },
    { name: "Data Sharing, Integration and Interoperability", score: 50, trend: "-0.06 W/W" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] border-b border-white/10 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/images/logo-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                className="h-6 sm:h-8 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entity_cdo/ComplianceAssessment"
                className="text-sm text-white hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Compliance Assessment
              </Link>
               <Link
                  href="/entity_cdo/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link>
              <Link
                href="/entity_cdo/dashboard"
                className="text-sm text-white hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Dashboard
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm text-white hover:text-gray-300 transition-colors flex items-center gap-1 whitespace-nowrap">
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
                <img
                  src="/placeholder-user.png"
                  alt="User"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-sm">👤</span>'
                  }}
                />
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
                  className="text-sm text-white hover:text-gray-300 transition-colors break-words border-b border-white pb-1"
                >
                  Compliance Assessment
                </Link>
               <Link
                  href="/entity_cdo/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link>
                <Link
                  href="/entity_cdo/dashboard"
                  className="text-sm text-white hover:text-gray-300 transition-colors break-words"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-left text-white hover:text-gray-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">Hello Abdullah (Ministry of Health)</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-2xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-lusail)] break-words">
                New Assessment Has Been Submitted For Your Review
              </h2>
              <div className="space-y-2 mb-4">
                <p className="text-white text-sm break-words">
                  <span className="font-semibold">Due Date:</span> September 30, 2024
                </p>
                <p className="text-white text-sm break-words">
                  <span className="font-semibold">Submitted by :</span> Ali Aziz
                </p>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed break-words">
                Evaluate your organization's adherence to Qatar's national laws and regulations. This assessment will
                help identify any gaps in compliance and provide insights to ensure your organization meets the required
                standards. Start now to ensure you are aligned with national regulatory requirements.
              </p>
              <Button
                onClick={() => router.push("/entity_cdo/compliance-domains")}
                className="bg-white text-[#7A0026] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
              >
                Review Assessment
              </Button>
            </div>
            <div className="relative h-64 md:h-auto hidden md:block">
              <img
                src="/images/design-mode/e0814ed9e90cb09f06294eaa8e75f948840bf1c9.png"
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
              Your Compliance Guide
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed relative z-10 break-words">
              Ensuring that your organization adheres to the latest legal and regulatory standards. This section
              provides you with resources and tools to help you understand and implement compliance measures
              effectively. Stay informed about data protection laws, industry-specific guidelines, and best practices
              for achieving regulatory alignment.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#8B7F5E] to-[#6B5E3F] rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-[family-name:var(--font-lusail)] break-words">
              How we calculate your score
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed break-words">
              Understanding your compliance score is essential to evaluate your organization's readiness and adherence
              to regulatory standards. Our scoring system is designed to give you clear, actionable insights into your
              compliance performance across multiple dimensions.
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
                Explore Policies
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed break-words">
                Ensure your organization adheres to PDPL regulations with a thorough assessment, compliance gap
                identification, and actionable recommendations from our vetted experts.
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
                Data Standards
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed break-words">
                Receive expert legal guidance on data protection laws, compliance issues, and regulatory requirements to
                ensure your organization meets all legal standards.
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
                Guidelines
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed break-words">
                Access comprehensive regulatory texts on data sharing policies and regulations to ensure your
                organization complies with the latest legal standards and requirements.
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

      
    </div>
  )
}
