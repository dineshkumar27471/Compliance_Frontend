"use client"

import { Button } from "@/components/ui/button"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.replace("/cdo/compliance-assessment")
  }, [router])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 bg-[#7A0026] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[family-name:var(--font-lusail)]">D</span>
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
      </nav>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto">
        {/* Greeting */}
        <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-[family-name:var(--font-lusail)]">
          Hello Ali (Ministry of Health)
        </h1>

        {/* Assessment Progress Card */}
        <div className="relative bg-gradient-to-br from-[#7A0026] via-[#8B1838] to-[#5A001C] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-10">
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-white text-xl sm:text-2xl font-bold font-[family-name:var(--font-lusail)]">
                      Assessment progress
                    </h2>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-white/90 text-sm">
                    <span className="font-semibold">Submitted On:</span> 20 - 10 - 2024
                  </div>
                  <div className="text-white/90 text-sm">
                    <span className="font-semibold">Submitted By:</span> Ali Aziz
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-400/20 backdrop-blur-sm text-white text-sm font-medium border border-blue-300/30">
                      In Review By CDO
                    </span>
                  </div>
                </div>

                <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6">
                  View Assessment
                </Button>
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block">
                <div className="relative w-full h-64 opacity-30">
                  <Image
                    src="/futuristic-digital-hand-hologram.jpg"
                    alt=""
                    width={400}
                    height={256}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/90 text-sm leading-relaxed">
                NPC will take up to two months to thoroughly review your submission. During this time, they will analyze
                your responses, identify any gaps, and develop a tailored compliance plan with actionable
                recommendations to help your organization align with the required standards.
              </p>
            </div>
          </div>
        </div>

        {/* Audit Logs Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold font-[family-name:var(--font-lusail)]">
              Audit logs
            </h2>
            <Button variant="ghost" className="text-[#7A0026] hover:text-[#5A001C]">
              View all →
            </Button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Done Date</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Done By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-gray-900">New Feedback Has been Added</div>
                      <div className="text-sm text-gray-600">Assessment Submitted</div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">21 Aug 2024</td>
                    <td className="py-4 px-6 text-gray-900">Ali.Aziz</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-gray-900">Compliance Assessment has been submitted</div>
                      <div className="text-sm text-gray-600">Assessment Returned</div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">08 Aug 2024</td>
                    <td className="py-4 px-6 text-gray-900">Abdullah.Saleh</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-gray-900">
                        Data Culture and Literacy Domain has been submitted
                      </div>
                      <div className="text-sm text-gray-600">Assessment Returned</div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">11 Jul 2024</td>
                    <td className="py-4 px-6 text-gray-900">Ali.Aziz</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-semibold text-gray-900">
                        Data Security, Privacy and Other Regulations has been completed
                      </div>
                      <div className="text-sm text-gray-600">Assessment Submitted</div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">01 Jul 2024</td>
                    <td className="py-4 px-6 text-gray-900">Abdullah.Saleh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Two Cards Section */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Your Compliance Guide Card */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 overflow-hidden border border-gray-200">
            <div className="relative z-10">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-lusail)]">
                Your Compliance Guide
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Ensuring that your organization adheres to the latest legal and regulatory standards. This section
                provides you with resources and tools to understand and implement compliance measures effectively. Stay
                informed about data protection laws, industry-specific guidelines, and best practices for achieving
                regulatory alignment.
              </p>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-5">
              <div className="w-full h-full rounded-full bg-[#a89478]"></div>
            </div>
          </div>

          {/* How We Calculate Your Score Card */}
          <div className="relative bg-[#8B7F5E] rounded-2xl p-6 sm:p-8 overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-lusail)]">
                How we calculate your score
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Understanding your compliance score is essential to evaluate your organization's readiness and adherence
                to regulatory standards. Our scoring system is designed to give you clear, actionable insights into your
                compliance performance across multiple dimensions.
              </p>
            </div>
          </div>
        </div>

        {/* Explore Our Resources Section */}
        <section>
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6 font-[family-name:var(--font-lusail)]">
            Explore Our Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Explore Policies Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Explore Policies
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Ensure your organization adheres to PDPL regulations with a thorough assessment, compliance gap
                identification, and actionable recommendations from our vetted experts.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>

            {/* Data Standards Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Data Standards
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Receive expert legal guidance on data protection laws, compliance issues, and regulatory requirements to
                ensure your organization meets all legal standards.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>

            {/* Guidelines Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Guidelines
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Access comprehensive regulatory texts on data sharing policies and regulations to ensure your
                organization complies with the latest legal standards and requirements.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 pb-8 text-center">
          <div className="text-gray-900 text-lg sm:text-xl font-[family-name:var(--font-lusail)]">IQNS CE ANI</div>
        </footer>
      </main>
    </div>
  )
}
