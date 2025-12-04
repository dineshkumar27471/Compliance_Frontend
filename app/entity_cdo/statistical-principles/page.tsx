'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AuditorStatisticalPrinciples() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push('/login')
  }

  const principles = [
    { title: 'Coordinating the national statistical system', progress: '0/20', id: 1 },
    { title: 'Managing relationships with data users,data providers and other stakeholders', progress: '0/30', id: 2 },
    { title: 'Managing statistical standards', progress: '0/5', id: 3 },
    { title: 'Assuring Professional Independence', progress: '0/10', id: 4 },
    { title: 'Assuring Impartiality and Objectivity', progress: '0/20', id: 5 },
    { title: 'Assuring Transparency', progress: '0/10', id: 6 },
    { title: 'Assuring Statistical Confidentiality and Data Security', progress: '0/30', id: 7 },
    { title: 'Assuring Commitment to Quality', progress: '0/7', id: 8 },
    { title: 'Assuring Adequacy of Resources', progress: '0/32', id: 9 },
    { title: 'Assuring Methodological Soundness', progress: '0/12', id: 10 },
    { title: 'Assuring Cost-Effectiveness', progress: '0/10', id: 11 },
    { title: 'Assuring Appropriate Statistical Procedures', progress: '0/5', id: 12 },
    { title: 'Managing the Respondent Burden', progress: '0/32', id: 13 },
    { title: 'Assuring Relevance', progress: '0/12', id: 14 },
    { title: 'Assuring Accuracy and Reliability', progress: '0/10', id: 15 },
    { title: 'Assuring Timeliness and Punctuality', progress: '0/5', id: 16 },
    { title: 'Assuring Accessibility and Clarity', progress: '0/32', id: 17 },
    { title: 'Assuring Coherence and Comparability', progress: '0/12', id: 18 },
    { title: 'Managing Metadata', progress: '0/10', id: 19 }
  ]

  const handlePrincipleClick = (principleId: number) => {
    router.push(`/entity_cdo/statistical-principles/review?principle=${principleId}`)
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
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
              <Link href="/entity_cdo/statistical-assessment" className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap border-b-2 border-white">
                Statistical Assessment
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
                <img src="/placeholder-user.png" alt="User" className="w-full h-full object-cover" />
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
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-lusail)] break-words">
          Statistical Assessment Principles
        </h1>

        {/* Progress Card */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[#7A0026]">Assessment Progress</span>
                <span className="text-sm font-bold text-gray-900">00%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#7A0026] h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <Button className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-6 py-2 rounded-lg transition-colors w-full sm:w-auto">
              Submit
            </Button>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm font-semibold text-gray-900 mb-8 break-words min-h-[48px]">
                {principle.title}
              </h3>
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => handlePrincipleClick(principle.id)}
                  className="text-sm font-semibold text-gray-900 hover:text-[#7A0026] transition-colors flex items-center gap-1"
                >
                  Start
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <div className="text-lg font-bold text-gray-900 mb-2">{principle.progress}</div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-[#7A0026] h-1 rounded-full" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      
    </div>
  )
}
