"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export default function AuditorDashboard() {
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

  const navLinks = [
    { label: "Compliance Assessment", href: "/entity_cdo/ComplianceAssessment" },
    // { label: "Statistical Assessment", href: "/entity_cdo/statistical-assessment" },
    { label: "Stakeholder-Management", href: "/entity_cdo/stakeholder-management" },
    { label: "Dashboard", href: "/entity_cdo/dashboard", active: true },
  ]
             
            //  <Link
            //       href="/entity_cdo/stakeholder-management"
            //       className="text-sm hover:text-gray-300 transition-colors break-words"
            //     >
            //       Stakeholder Management
            //     </Link>
  

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader navLinks={navLinks} userRole="entity_cdo" userName="Abdullah" />

      <main className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-[family-name:var(--font-lusail)] break-words">
            Hello Abdullah (Ministry of Health)
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-4 py-2 rounded text-sm">
              Compliance Assessment <ChevronDown className="ml-1 w-4 h-4" />
            </Button>
            <Button className="bg-[#7A0026] hover:bg-[#5C1F3A] text-white px-4 py-2 rounded text-sm">
              2024 <ChevronDown className="ml-1 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-4 py-2 rounded text-sm bg-transparent"
            >
              View Answers
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 px-4 py-2 rounded text-sm bg-transparent"
            >
              Export
            </Button>
          </div>
        </div>

        {/* Main Dashboard Card */}
        <div className="bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-2xl p-6 sm:p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Assessment Score Gauge */}
            <div>
              <h2 className="text-white text-xl font-bold mb-6 break-words">Assessment Score:</h2>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="16" />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      fill="none"
                      stroke="white"
                      strokeWidth="16"
                      strokeDasharray="351.86"
                      strokeDashoffset="105.56"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold text-white">70%</div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-white text-sm break-words">Your Score is average</p>
                <p className="text-white/80 text-xs mt-1 break-words">Last Check-in 21 Apr. View Assessment Answers</p>
              </div>
              <p className="text-white/90 text-sm mt-6 leading-relaxed break-words">
                This indicates that your organization meets basic compliance standards but requires further improvements
                to achieve full alignment with regulatory requirements.
              </p>
            </div>

            {/* Score Breakdown */}
            <div>
              <h2 className="text-white text-xl font-bold mb-6 break-words">Score Breakdown By Domains</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {domainScores.map((domain, index) => (
                  <div key={domain.id} className="flex items-center gap-3">
                    <div className="text-white/60 text-xs w-6 flex-shrink-0">{String(index + 1).padStart(2, "0")}</div>
                    <div className="text-white text-sm flex-1 min-w-0 break-words">{domain.name}</div>
                    <div className={`${domain.color} text-white px-2 py-1 rounded text-sm font-bold flex-shrink-0`}>
                      {domain.score}
                    </div>
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div className={`${domain.color} h-2 rounded-full`} style={{ width: `${domain.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls Breakdown Section */}
        <div className="bg-[#7A0026] text-white px-6 py-3 rounded-t-lg">
          <h2 className="text-lg font-bold break-words">Controls breakdown per domain</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {controlBreakdown.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm break-words">{item.name}</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-gray-900">{item.score}%</span>
                <span className="text-xs text-gray-500">Score</span>
              </div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="text-green-600 flex items-center gap-1">
                  <span>↗</span>
                  <span>{item.trend}</span>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="w-full h-8 bg-orange-100 rounded mb-1 flex items-center justify-center">
                    <span className="text-orange-600">—</span>
                  </div>
                  <div className="text-gray-600 break-words">Non-Compliant</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-8 bg-green-100 rounded mb-1 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="text-gray-600 break-words">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="w-full h-8 bg-gray-100 rounded mb-1 flex items-center justify-center">
                    <span className="text-gray-600">⚙</span>
                  </div>
                  <div className="text-gray-600 break-words">Controls</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Progress Chart */}
        <div className="bg-[#7A0026] text-white px-6 py-3 rounded-t-lg">
          <h2 className="text-lg font-bold break-words">
            Number of domains moved from non-compliant to compliant across years:
          </h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-b-lg p-8">
          <div className="relative h-[500px] w-full">
            <svg viewBox="0 0 1300 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              {/* Left bars (2023) */}
              {/* Green bar - top */}
              <rect x="70" y="50" width="60" height="80" fill="#4ade80" rx="4" />
              <text x="100" y="95" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                2
              </text>

              {/* Orange bar - middle */}
              <rect x="70" y="150" width="60" height="120" fill="#fb923c" rx="4" />
              <text x="100" y="215" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                4
              </text>

              {/* Pink bar - bottom */}
              <rect x="70" y="290" width="60" height="160" fill="#ec4899" rx="4" />
              <text x="100" y="375" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                6
              </text>

              {/* Middle bars (2024) */}
              {/* Green bar - top */}
              <rect x="620" y="80" width="60" height="120" fill="#4ade80" rx="4" />
              <text x="650" y="145" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                5
              </text>

              {/* Orange bar - middle */}
              <rect x="620" y="220" width="60" height="160" fill="#fb923c" rx="4" />
              <text x="650" y="305" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                7
              </text>

              {/* Pink bar - bottom */}
              <rect x="620" y="400" width="60" height="50" fill="#ec4899" rx="4" />
              <text x="650" y="430" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                9
              </text>

              {/* Right bars (2025) */}
              {/* Green bar - top */}
              <rect x="1170" y="60" width="60" height="180" fill="#4ade80" rx="4" />
              <text x="1200" y="155" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                9
              </text>

              {/* Orange bar - middle */}
              <rect x="1170" y="260" width="60" height="100" fill="#fb923c" rx="4" />
              <text x="1200" y="315" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                13
              </text>

              {/* Pink bar - bottom */}
              <rect x="1170" y="380" width="60" height="70" fill="#ec4899" rx="4" />
              <text x="1200" y="420" fill="#000" fontSize="18" fontWeight="bold" textAnchor="middle">
                6
              </text>

              {/* Flow paths from 2023 to 2024 */}
              {/* Green to Green flow */}
              <path d="M 130 70 Q 375 75 620 100" stroke="none" fill="url(#greenGradient1)" opacity="0.6" />
              <path d="M 130 110 Q 375 115 620 140 L 620 100 Q 375 75 130 70 Z" fill="#c7f5d4" opacity="0.7" />

              {/* Green flow label */}
              <rect x="160" y="80" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="176" y="97" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                2
              </text>

              {/* Orange to Green flow */}
              <path d="M 130 170 Q 375 155 620 140" stroke="none" fill="url(#orangeToGreenGradient)" opacity="0.6" />
              <path d="M 130 190 Q 375 175 620 160 L 620 140 Q 375 155 130 170 Z" fill="#fde5c3" opacity="0.7" />

              {/* Orange to Green label */}
              <rect x="160" y="215" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="176" y="232" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                1
              </text>

              {/* Orange to Orange flow */}
              <path d="M 130 210 Q 375 240 620 260" stroke="none" fill="url(#orangeGradient1)" opacity="0.6" />
              <path d="M 130 250 Q 375 280 620 300 L 620 260 Q 375 240 130 210 Z" fill="#fed5a4" opacity="0.7" />

              {/* Orange flow label */}
              <rect x="160" y="290" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="176" y="307" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                3
              </text>

              {/* Pink to Green flow */}
              <path d="M 130 310 Q 375 210 620 160" stroke="none" fill="url(#pinkToGreenGradient)" opacity="0.6" />
              <path d="M 130 330 Q 375 230 620 180 L 620 160 Q 375 210 130 310 Z" fill="#f8d6e8" opacity="0.7" />

              {/* Pink to Green label */}
              <rect x="710" y="195" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="726" y="212" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                5
              </text>

              {/* Pink to Orange flow */}
              <path d="M 130 360 Q 375 320 620 300" stroke="none" fill="url(#pinkToOrangeGradient)" opacity="0.6" />
              <path d="M 130 390 Q 375 350 620 330 L 620 300 Q 375 320 130 360 Z" fill="#fcc5dd" opacity="0.7" />

              {/* Pink to Orange label */}
              <rect x="710" y="375" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="726" y="392" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                5
              </text>

              {/* Pink to Pink flow */}
              <path d="M 130 410 Q 375 410 620 410" stroke="none" fill="url(#pinkGradient1)" opacity="0.6" />
              <path d="M 130 440 Q 375 440 620 440 L 620 410 Q 375 410 130 410 Z" fill="#f9bfd8" opacity="0.7" />

              {/* Flow paths from 2024 to 2025 */}
              {/* Green to Green flow */}
              <path d="M 680 110 Q 925 100 1170 120" stroke="none" fill="url(#greenGradient2)" opacity="0.6" />
              <path d="M 680 160 Q 925 150 1170 170 L 1170 120 Q 925 100 680 110 Z" fill="#c7f5d4" opacity="0.7" />

              {/* Orange to Orange flow */}
              <path d="M 680 280 Q 925 285 1170 280" stroke="none" fill="url(#orangeGradient2)" opacity="0.6" />
              <path d="M 680 320 Q 925 325 1170 320 L 1170 280 Q 925 285 680 280 Z" fill="#fed5a4" opacity="0.7" />

              {/* Orange to Orange label */}
              <rect x="710" y="305" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="726" y="322" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                2
              </text>

              {/* Pink to Orange flow */}
              <path d="M 680 420 Q 925 370 1170 340" stroke="none" fill="url(#pinkToOrangeGradient2)" opacity="0.6" />
              <path d="M 680 440 Q 925 390 1170 360 L 1170 340 Q 925 370 680 420 Z" fill="#fcc5dd" opacity="0.7" />

              {/* Pink to Pink flow */}
              <path d="M 680 430 Q 925 410 1170 400" stroke="none" fill="url(#pinkGradient2)" opacity="0.6" />
              <path d="M 680 445 Q 925 425 1170 415 L 1170 400 Q 925 410 680 430 Z" fill="#f9bfd8" opacity="0.7" />

              {/* Pink to Pink label */}
              <rect x="710" y="505" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="726" y="522" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                6
              </text>

              {/* Pink to Orange label 2 */}
              <rect x="710" y="440" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="726" y="457" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                2
              </text>

              {/* Pink 2024 internal label */}
              <rect x="710" y="470" width="32" height="24" fill="#1f2937" rx="4" />
              <text x="726" y="487" fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle">
                1
              </text>

              {/* Gradients */}
              <defs>
                <linearGradient id="greenGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="greenGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="orangeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="orangeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="pinkGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="pinkGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="orangeToGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="pinkToGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="pinkToOrangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="pinkToOrangeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-6 px-4">
            <div className="break-words">Ended 15 sep 2023</div>
            <div className="break-words">Ended 15 sep 2024</div>
            <div className="break-words">Ended 15 sep 2025</div>
          </div>
        </div>
      </main>

    </div>
  )
}
