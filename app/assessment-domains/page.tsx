"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const domains = [
  {
    id: 1,
    name: "Economic Performance And Diversification",
    total: 20,
    completed: 0,
  },
  {
    id: 2,
    name: "Data Architecture and Modeling",
    total: 30,
    completed: 0,
  },
  {
    id: 3,
    name: "Document and Content Management",
    total: 5,
    completed: 0,
  },
  {
    id: 4,
    name: "Data Quality Management",
    total: 10,
    completed: 0,
  },
  {
    id: 5,
    name: "Data Catalog and Metadata Management",
    total: 20,
    completed: 0,
  },
  {
    id: 6,
    name: "Master and Reference Data Management",
    total: 10,
    completed: 0,
  },
  {
    id: 7,
    name: "Data Storage and Operations",
    total: 30,
    completed: 0,
  },
  {
    id: 8,
    name: "Data Sharing, Integration and Interoperability",
    total: 7,
    completed: 0,
  },
  {
    id: 9,
    name: "Statistics and Analytics",
    total: 32,
    completed: 0,
  },
  {
    id: 10,
    name: "Data Monetization",
    total: 12,
    completed: 0,
  },
  {
    id: 11,
    name: "Data Security, Privacy and Other Regulations",
    total: 10,
    completed: 0,
  },
  {
    id: 12,
    name: "Data Culture and Literacy",
    total: 5,
    completed: 0,
  },
]

export default function AssessmentDomainsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const progressPercentage = 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/ministry-of-health-logo.png"
                alt="Ministry of Health Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-xs leading-tight font-[family-name:var(--font-lusail)]">
                DATA REGULATIONS,
              </div>
              <div className="text-white text-[10px] leading-tight opacity-90">COMPLIANCE AND STATISTICS</div>
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/home" className="text-white text-sm hover:text-white/80 transition-colors">
              Compliance Assessment
            </Link>
            <Link href="/statistical-assessment" className="text-white text-sm hover:text-white/80 transition-colors">
              Statistical Assessment
            </Link>
            <Link href="/dashboard" className="text-white text-sm hover:text-white/80 transition-colors">
              Dashboard
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>

            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Ask Bayan"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm hidden sm:inline">Ask Bayan</span>
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Settings">
              <Settings className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block" aria-label="Help">
              <HelpCircle className="w-5 h-5 text-white" />
            </button>
            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Notifications">
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
                className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
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

        <div className="mt-4 sm:mt-6">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-lusail)]">
            Hello Ali (Ministry of Health)
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-[family-name:var(--font-lusail)]">
          Compliance Assessment Domains
        </h1>

        {/* Assessment Progress Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">Assessment Progress</span>
                <span className="text-gray-900 font-bold text-sm sm:text-base">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            <Button className="bg-[#7A0026] hover:bg-[#5A001C] text-white px-6 py-2 h-auto whitespace-nowrap">
              Submit
            </Button>
          </div>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {domains.map((domain) => (
            <Link
              key={domain.id}
              href={`/assessment-questions/${domain.id}`}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow cursor-pointer group relative overflow-hidden block"
            >
              {/* Decorative Background Shape */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#8B7F5E]/5 rounded-full group-hover:bg-[#8B7F5E]/10 transition-colors"></div>

              <div className="relative z-10">
                <h3 className="text-gray-900 font-bold text-base mb-3 font-[family-name:var(--font-lusail)] min-h-[48px] leading-tight">
                  {domain.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm mb-1">
                      <span>Start</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div className="text-gray-900 font-bold text-lg">
                      {domain.completed}/{domain.total}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 pb-8 text-center">
        </footer>
      </main>
    </div>
  )
}
