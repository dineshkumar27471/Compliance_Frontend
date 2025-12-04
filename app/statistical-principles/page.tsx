'use client'

import { Button } from '@/components/ui/button'
import { Bell, Settings, HelpCircle, Sparkles, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function StatisticalPrinciplesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const principles = [
    {
      title: 'Coordinating the national statistical system',
      count: '0/20',
    },
    {
      title: 'Managing relationships with data users, data providers and other stakeholders',
      count: '0/30',
    },
    {
      title: 'Managing statistical standards',
      count: '0/5',
    },
    {
      title: 'Assuring Professional Independence',
      count: '0/10',
    },
    {
      title: 'Assuring Impartiality and Objectivity',
      count: '0/20',
    },
    {
      title: 'Assuring Transparency',
      count: '0/10',
    },
    {
      title: 'Assuring Statistical Confidentiality and Data Security',
      count: '0/30',
    },
    {
      title: 'Assuring Commitment to Quality',
      count: '0/7',
    },
    {
      title: 'Assuring Adequacy of Resources',
      count: '0/32',
    },
    {
      title: 'Assuring Methodological Soundness',
      count: '0/12',
    },
    {
      title: 'Assuring Cost-Effectiveness',
      count: '0/10',
    },
    {
      title: 'Assuring Appropriate Statistical Procedures',
      count: '0/5',
    },
    {
      title: 'Managing the Respondent Burden',
      count: '0/32',
    },
    {
      title: 'Assuring Relevance',
      count: '0/12',
    },
    {
      title: 'Assuring Accuracy and Reliability',
      count: '0/10',
    },
    {
      title: 'Assuring Timeliness and Punctuality',
      count: '0/5',
    },
    {
      title: 'Assuring Accessibility and Clarity',
      count: '0/32',
    },
    {
      title: 'Assuring Coherence and Comparability',
      count: '0/12',
    },
    {
      title: 'Managing Metadata',
      count: '0/10',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 bg-[#7A0026] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[family-name:var(--font-lusail)]">
                D
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-xs leading-tight font-[family-name:var(--font-lusail)]">
                DATA REGULATIONS,
              </div>
              <div className="text-white text-[10px] leading-tight opacity-90">
                COMPLIANCE AND STATISTICS
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/home"
              className="text-white text-sm hover:text-white/80 transition-colors"
            >
              Compliance Assessment
            </Link>
            <Link
              href="/statistical-assessment"
              className="text-white text-sm font-semibold hover:text-white/80 transition-colors"
            >
              Statistical Assessment
            </Link>
            <Link
              href="/dashboard"
              className="text-white text-sm hover:text-white/80 transition-colors"
            >
              Dashboard
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>

            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Ask Bayan"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm hidden sm:inline">Ask Bayan</span>
            </button>
            <button
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5 text-white" />
            </button>
            <button
              className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block"
              aria-label="Help"
            >
              <HelpCircle className="w-5 h-5 text-white" />
            </button>
            <button
              className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Notifications"
            >
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
                href="/home"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compliance Assessment
              </Link>
              <Link
                href="/statistical-assessment"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10 border-l-2 border-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Statistical Assessment
              </Link>
              <Link
                href="/dashboard"
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-gray-900 text-xl sm:text-2xl font-bold mb-6 font-[family-name:var(--font-lusail)]">
          Statistical Assessment Principles
        </h1>

        {/* Progress Card */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#7A0026] text-sm font-semibold">Assessment Progress</span>
            <span className="text-gray-600 text-sm font-bold">00%</span>
          </div>
          <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300">
            Save
          </Button>
        </div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {principles.map((principle, index) => (
            <Link
              key={index}
              href={`/statistical-questions/${index}`}
              className="bg-white border border-gray-300 rounded-lg p-5 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <h3 className="text-gray-900 text-sm font-semibold mb-3 leading-tight group-hover:text-[#7A0026] transition-colors font-[family-name:var(--font-lusail)]">
                {principle.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Start</span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#7A0026] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="text-gray-900 text-base font-bold mt-2">{principle.count}</div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pb-8 text-center">
          <div className="text-gray-900 text-lg font-[family-name:var(--font-lusail)]">
            IQNS CE ANI
          </div>
        </footer>
      </main>
    </div>
  )
}
