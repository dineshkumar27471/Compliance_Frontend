'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronRight, Menu, X, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ComplianceDomainsPage() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  const domains = [
    { id: 1, name: 'Economic Performance And Diversification', answered: '16/16' },
    { id: 2, name: 'Data Architecture and Modeling', answered: '16/16' },
    { id: 3, name: 'Document and Content Management', answered: '16/16' },
    { id: 4, name: 'Data Quality Management', answered: '16/16' },
    { id: 5, name: 'Data Catalog and Metadata Management', answered: '16/16' },
    { id: 6, name: 'Master and Reference Data Management', answered: '16/16' },
    { id: 7, name: 'Data Storage and Operations', answered: '16/16' },
    { id: 8, name: 'Data Sharing, Integration and Interoperability', answered: '16/16' },
    { id: 9, name: 'Statistics and Analytics', answered: '16/16' },
    { id: 10, name: 'Data Monetization', answered: '16/16' },
    { id: 11, name: 'Data Security, Privacy and Other Regulations', answered: '16/16' },
    { id: 12, name: 'Data Culture and Literacy', answered: '16/16' },
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
                <div className="font-bold text-xs sm:text-sm font-[family-name:var(--font-lusail)] break-words">DATA REGULATIONS,</div>
                <div className="text-[10px] sm:text-xs break-words">COMPLIANCE AND STATISTICS</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/entity_cdo/ComplianceAssessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
                Compliance Assessment
              </Link>
              {/* <Link href="/entity_cdo/statistical-assessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
                Statistical Assessment
              </Link> */}
                 <Link
                  href="/entity_cdo/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link>
              <Link href="/entity_cdo/dashboard" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap">
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
              <button onClick={handleLogout} className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0">
                <span className="text-sm">👤</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
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
                <button onClick={handleLogout} className="text-sm text-left hover:text-gray-300 transition-colors">
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 font-[family-name:var(--font-lusail)] break-words">
          Compliance Assessment Domains
        </h1>

        {/* Progress Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base font-semibold text-[#7A0026]">Assessment Progress</span>
                <span className="text-xl sm:text-2xl font-bold text-gray-900">100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                <div className="bg-green-500 h-2 sm:h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <Button className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
              Submit
            </Button>
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 min-h-[3rem] font-[family-name:var(--font-lusail)] break-words">
                {domain.name}
              </h3>
              <Link
                href={`/entity_cdo/review-assessment?domain=${domain.id}`}
                className="flex items-center justify-between text-sm sm:text-base text-gray-700 hover:text-[#7A0026] transition-colors group mb-3"
              >
                <span className="font-semibold">Review</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Check className="w-4 h-4 text-green-600" />
                <span className="break-words">{domain.answered} Questions Answered</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 sm:py-8 mt-8 sm:mt-12 text-center">
        <div className="text-xl sm:text-2xl font-bold text-gray-900 font-[family-name:var(--font-lusail)]">
        </div>
      </footer>
    </div>
  )
}
