"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CDOStatisticalAssessment() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }
 
  const nqafStructure = [
    {
      department: "A. Statistical System Dept.",
      items: [
        { id: "NQAF 1", title: "Coordinating the national statistical system" },
        { id: "NQAF 2", title: "Managing relationships with data users, data providers and other stakeholders" },
        { id: "NQAF 3", title: "Managing statistical standards" },
      ],
    },
    {
      department: "B. Institutional Environment Dept.",
      items: [
        { id: "NQAF 4", title: "Assuring professional independence" },
        { id: "NQAF 5", title: "Assuring impartiality and objectivity" },
        { id: "NQAF 6", title: "Assuring transparency" },
        { id: "NQAF 7", title: "Assuring statistical confidentiality and data security" },
        { id: "NQAF 8", title: "Assuring commitment to quality" },
        { id: "NQAF 9", title: "Assuring adequacy of resources" },
      ],
    },
    {
      department: "C. Statistical Process Dept.",
      items: [
        { id: "NQAF 10", title: "Assuring methodological soundness" },
        { id: "NQAF 11", title: "Assuring cost-effectiveness" },
        { id: "NQAF 12", title: "Assuring appropriate statistical procedures" },
        { id: "NQAF 13", title: "Managing the respondent burden" },
      ],
    },
    {
      department: "D. Statistical Output Dept.",
      items: [
        { id: "NQAF 14", title: "Assuring Relevance" },
        { id: "NQAF 15", title: "Assuring accuracy and reliability" },
        { id: "NQAF 16", title: "Assuring timeliness and punctuality" },
        { id: "NQAF 17", title: "Assuring accessibility and clarity" },
        { id: "NQAF 18", title: "Assuring coherence and comparability" },
        { id: "NQAF 19", title: "Managing metadata" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="h-[300px] bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto pt-10 pl-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo-data-regulations-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                width={250}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entityco/compliance-assessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Compliance Assessment
              </Link>
              <Link
                href="/entityco/statistical-assessment"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap border-b-2 border-white"
              >
                Statistical Assessment
              </Link>
              {/* <Link
                href="/entityco/stakeholder-management"
                className="text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Stakeholder Management
              </Link> */}
              <Link
                href="/entityco/dashboard"
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
                <img
                  src="/placeholder-user.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
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
                <Link
                  href="/entityco/compliance-assessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Compliance Assessment
                </Link>
                <Link
                  href="/entityco/statistical-assessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words border-b border-white pb-1"
                >
                  Statistical Assessment
                </Link>
                {/* <Link
                  href="/entityco/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link> */}
                <Link
                  href="/entityco/dashboard"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-left hover:text-gray-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>

        {/* Greeting */}
        <div className="container mx-auto  px-4 py-16 sm:py-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-lusail)] break-words">
            Hello Ali (Ministry of Health)
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="container mx-auto px-4 py-6 z-20 -mt-30 sm:py-8"
      >
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-[family-name:var(--font-lusail)] break-words">
              New Statistical Assessment Has been added
            </h2>
            <p className="text-sm sm:text-base text-white/90 mb-2 break-words">
              <span className="font-semibold">Due Date:</span> September 30,
              2024
            </p>
            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 leading-relaxed break-words">
              Evaluate your organization's adherence to Qatar's national laws
              and regulations. This assessment will help identify any gaps in
              compliance and provide insights to ensure your organization meets
              the required standards. Start now to ensure you are aligned with
              national regulatory requirements.
            </p>
            <Link href="/entityco/statistical-principles">
              <Button className="bg-[#5C1F3A] hover:bg-[#4A1829] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto">
                Start Assessment
              </Button>
            </Link>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 hidden sm:block">
            <img
              src="/futuristic-digital-hand-hologram-technology.jpg"
              alt="Digital Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* NQAF Framework Section */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white border border-gray-300 rounded-xl p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-[family-name:var(--font-lusail)] break-words">
                National Quality Assurance Framework for Official Statistical
                Data
              </h3>
              <button className="flex items-center gap-2 text-[#7A0026] hover:text-[#5C1F3A] transition-colors text-sm sm:text-base whitespace-nowrap">
                <span className="w-5 h-5 bg-[#7A0026] rounded flex items-center justify-center text-white text-xs flex-shrink-0">
                  D
                </span>
                View full framework
                <Eye className="w-4 h-4 flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* NQAF Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nqafStructure.map((dept, deptIndex) => (
              <div key={deptIndex} className="space-y-4">
                {/* Department Header */}
                <div className="bg-white border border-gray-300 rounded-lg p-4 text-center relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-[#8B7F5E]"></div>
                  </div>
                  <h4 className="font-bold text-sm break-words">
                    {dept.department}
                  </h4>
                </div>

                {/* Department Items */}
                <div className="space-y-3">
                  {dept.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="text-xs text-[#7A0026] font-bold mb-1 break-words">
                        {item.id}
                      </div>
                      <div className="text-sm text-gray-900 break-words leading-tight">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 sm:py-8 text-center"></footer>
    </div>
  );
}
