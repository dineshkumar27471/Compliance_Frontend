"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation";





const domains = [
  {
    id: 1,
    name: "Data Management Strategy and Governance",
    total: 16,
    completed: 0,
    icon: "/D1.png",
  },
  {
    id: 2,
    name: "Data Architecture and Modeling",
    total: 13,
    completed: 0,
    icon: "/images/domain-icons/domain-2.jpg",
  },
  {
    id: 3,
    name: "Data Quality Management",
    total: 14,
    completed: 0,
    icon: "/images/domain-icons/domain-3.jpg",
  },
  {
    id: 4,
    name: "Master and Reference Data Management",
    total: 16,
    completed: 0,
    icon: "/images/domain-icons/domain-4.jpg",
  },
  {
    id: 5,
    name: "Document and Content Management",
    total: 24,
    completed: 0,
    icon: "/images/domain-icons/domain-5.jpg",
  },
  {
    id: 6,
    name: "Data Catalog and Metadata Management",
    total: 12,
    completed: 0,
    icon: "/images/domain-icons/domain-6.jpg",
  },
  {
    id: 7,
    name: "Data Storage and Operations",
    total: 15,
    completed: 0,
    icon: "/images/domain-icons/domain-7.jpg",
  },
  {
    id: 8,
    name: "Data Sharing, Integration and Interoperability",
    total: 15,
    completed: 0,
    icon: "/images/domain-icons/domain-8.jpg",
  },
  {
    id: 9,
    name: "Statistics and Analytics",
    total: 11,
    completed: 0,
    icon: "/images/domain-icons/domain-9.jpg",
  },
  {
    id: 10,
    name: "Data Monetization",
    total: 13,
    completed: 0,
    icon: "/images/domain-icons/domain-10.jpg",
  },
  {
    id: 11,
    name: "Data Security, Privacy and Other Regulations",
    total: 1,
    completed: 0,
    icon: "/images/domain-icons/domain-11.jpg",
  },
  {
    id: 12,
    name: "Data Culture and Literacy",
    total: 12,
    completed: 0,
    icon: "/images/domain-icons/domain-12.jpg",
  },
]


export default function AssessmentDomainsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const progressPercentage = 0

 const router = useRouter();
 const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
       <header className="h-[200px] bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Image
              src="/images/logo-data-regulations-white.png"
              alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
              width={250}
              height={60}
              className="h-8 sm:h-10 w-auto"
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entityco/compliance-assessment"
                className="text-sm hover:text-gray-300 border-b-2 border-white"
              >
                Compliance Assessment
              </Link>
              <span className="mx-2">|</span>
              {/* <Link href="/entityco/statistical-assessment" className="text-sm hover:text-gray-300">Statistical Assessment</Link> */}
              {/* <Link href="/entityco/stakeholder-management" className="text-sm hover:text-gray-300">Stakeholder Management</Link> */}
              <Link href="/entityco/dashboard" className="text-sm ">
                Dashboard
              </Link>
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs">Ask Bayan</span>
              </button>

              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </button>

              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </button>

              <button className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bell className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button
                onClick={handleLogout}
                className="w-10 h-10 rounded-full bg-white/20 overflow-hidden"
              >
                <img
                  src="/placeholder-user.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* mobile nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-3">
                <Link
                  href="/entityco/compliance-assessment"
                  className="text-sm"
                >
                  Compliance Assessment
                </Link>
                {/* <Link href="/entityco/statistical-assessment" className="text-sm">Statistical Assessment</Link> */}
                {/* <Link href="/entityco/stakeholder-management" className="text-sm">Stakeholder Management</Link> */}
                <Link
                  href="/entityco/dashboard"
                  className="text-sm border-b pb-1"
                >
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-sm text-left">
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>

        <div className="container mx-auto px-4 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            Hello Abdullah (Ministry of Health)
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <h2 className="text-[#7A0026] font-bold text-lg whitespace-nowrap">Assessment Progress</h2>
                <span className="text-gray-900 font-bold text-lg">{progressPercentage}%</span>
              </div>
              <Progress value={progressPercentage} className="h-2 mt-3" />
            </div>
            <Button
              disabled
              className="bg-gray-300 text-gray-500 px-8 py-2 h-auto whitespace-nowrap hover:bg-gray-300 cursor-not-allowed"
            >
              Submit
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {domains.map((domain) => {
            const progressPercent = domain.total > 0 ? (domain.completed / domain.total) * 100 : 0

            return (
              <Link
                key={domain.id}
                href={`/entityco/assessment-questions/${domain.id}`}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 hover:shadow-md transition-all hover:border-gray-300 block group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={domain.icon || "/placeholder.svg"}
                      alt={`${domain.name} icon`}
                      width={50}
                      height={50}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <h3 className="text-gray-900 font-bold text-base leading-tight flex-1 min-h-[48px]">{domain.name}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 text-sm group-hover:text-[#7A0026] transition-colors">
                    <span>Start</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>

                  <div>
                    <div className="text-gray-900 font-bold text-2xl mb-2">
                      {domain.completed}/{domain.total}
                    </div>
                    <Progress value={progressPercent} className="h-2 bg-gray-100" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
       
      </main>
    </div>
  )
}
