"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, Settings, HelpCircle, Bell, Menu, X } from "lucide-react";

export default function CDODashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

      <main className="container mx-auto px-4 py-6 sm:py-8 z-20 -mt-20">
        <div
          className="relative rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #80192E 0%, #330818 100%)",
          }}
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-[family-name:var(--font-lusail)] break-words">
              New Assessment Has been added
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
            <Link href="/entityco/assessment-domains">
              <Button className="bg-[#ffffff] text-#4A1829 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto">
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

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 overflow-hidden border border-gray-200">
            {/* Right-side faded background illustration */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-right opacity-10 pointer-events-none"
              style={{
                backgroundImage: "url('/bg.png')",
              }}
            ></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-xl">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Your Compliance Guide
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Ensuring that your organization adheres to the latest legal and
                regulatory standards. This section provides you with resources
                and tools to understand and implement compliance measures
                effectively. Stay informed about data protection laws,
                industry-specific guidelines, and best practices for achieving
                regulatory alignment.
              </p>
            </div>
          </div>

          <div className="relative bg-[#8B7F5E] rounded-2xl p-6 sm:p-8 overflow-hidden">
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-no-repeat bg-contain bg-right opacity-10 pointer-events-none"
              style={{
                backgroundImage: "url('/bg.png')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-lusail)]">
                How we calculate your score
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Understanding your compliance score is essential to evaluate
                your organization's readiness and adherence to regulatory
                standards. Our scoring system is designed to give you clear,
                actionable insights into your compliance performance across
                multiple dimensions.
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-6 font-[family-name:var(--font-lusail)]">
            Explore Our Resources
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Explore Policies
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Ensure your organization adheres to PDPL regulations with a
                thorough assessment, compliance gap identification, and
                actionable recommendations from our vetted experts.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Data Standards
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Receive expert legal guidance on data protection laws,
                compliance issues, and regulatory requirements to ensure your
                organization meets all legal standards.
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026] hover:text-white bg-transparent"
              >
                Explore
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 font-[family-name:var(--font-lusail)]">
                Guidelines
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Access comprehensive regulatory texts on data sharing policies
                and regulations to ensure your organization complies with the
                latest legal standards and requirements.
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
      </main>
    </div>
  );
}
