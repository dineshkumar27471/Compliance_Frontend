'use client'

import { Button } from '@/components/ui/button'
import { Bell, Settings, HelpCircle, Sparkles, Eye, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function StatisticalAssessmentPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const departments = [
    {
      title: 'A. Statistical System Dept.',
      items: [
        { id: 'NQAF 1', title: 'Coordinating the national statistical system' },
        {
          id: 'NQAF 2',
          title: 'Managing relationships with data users,data providers and other stakeholders',
        },
        { id: 'NQAF 3', title: 'Managing statistical standards' },
      ],
    },
    {
      title: 'B. Institutional Environment Dept.',
      items: [
        { id: 'NQAF 4', title: 'Assuring professional independence' },
        { id: 'NQAF 5', title: 'Assuring impartiality and objectivity' },
        { id: 'NQAF 6', title: 'Assuring transparency' },
        { id: 'NQAF 7', title: 'Assuring statistical confidentiality and data security' },
        { id: 'NQAF 8', title: 'Assuring commitment to quality' },
        { id: 'NQAF 9', title: 'Assuring adequacy of resources' },
      ],
    },
    {
      title: 'C. Statistical Process Dept.',
      items: [
        { id: 'NQAF 10', title: 'Assuring methodological soundness' },
        { id: 'NQAF 11', title: 'Assuring cost-effectiveness' },
        { id: 'NQAF 12', title: 'Assuring appropriate statistical procedures' },
        { id: 'NQAF 13', title: 'Managing the respondent burden' },
      ],
    },
    {
      title: 'D. Statistical Output Dept.',
      items: [
        { id: 'NQAF 14', title: 'Assuring Relevance' },
        { id: 'NQAF 15', title: 'Assuring accuracy and reliability' },
        { id: 'NQAF 16', title: 'Assuring timeliness and punctuality' },
        { id: 'NQAF 17', title: 'Assuring accessibility and clarity' },
        { id: 'NQAF 18', title: 'Assuring coherence and comparability' },
        { id: 'NQAF 19', title: 'Managing metadata' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
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

      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto">
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-[family-name:var(--font-lusail)]">
          Hello Ali (Ministry of Health)
        </h1>

        <div className="relative bg-gradient-to-r from-[#7A0026] to-[#A8274D] rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8">
          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-lusail)]">
                New Statistical Assessment Has been added
              </h2>
              <p className="text-white/90 text-sm sm:text-base mb-4">
                <span className="font-semibold">Due Date:</span> September 30, 2024
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Evaluate your organization's adherence to Qatar's national laws and regulations.
                This assessment will help identify any gaps in compliance and provide insights to
                ensure your organization meets the required standards. Start now to ensure you are
                aligned with national regulatory requirements.
              </p>
              <Link href="/statistical-principles">
                <Button className="bg-[#5A001C] hover:bg-[#400012] text-white px-6 sm:px-8 py-2 sm:py-3 h-auto text-sm sm:text-base font-medium">
                  Start Assessment
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 opacity-40">
            <Image
              src="/futuristic-digital-hand-hologram-technology.jpg"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        <section className="mb-8 sm:mb-12">
          <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-gray-900 text-lg sm:text-xl font-bold font-[family-name:var(--font-lusail)]">
              National Quality Assurance Framework for Official Statistical Data
            </h2>
            <Button
              variant="outline"
              className="border-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white flex items-center gap-2 whitespace-nowrap"
            >
              <Eye className="w-4 h-4" />
              <span>View full framework</span>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {departments.map((dept, deptIndex) => (
              <div key={deptIndex} className="flex flex-col gap-4">
                <div className="relative">
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center min-h-[80px] flex items-center justify-center">
                    <h3 className="text-gray-900 text-sm sm:text-base font-bold font-[family-name:var(--font-lusail)] leading-tight">
                      {dept.title}
                    </h3>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#8B7F5E]"></div>
                </div>

                {dept.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="text-[#7A0026] text-xs font-bold mb-2">{item.id}</div>
                    <div className="text-gray-900 text-sm font-medium leading-snug">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 sm:mt-16 pb-8 text-center">
          <div className="text-gray-900 text-lg sm:text-xl font-[family-name:var(--font-lusail)]">
            IQNS CE ANI
          </div>
        </footer>
      </main>
    </div>
  )
}
