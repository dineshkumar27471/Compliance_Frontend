"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Settings,
  HelpCircle,
  Sparkles,
  Menu,
  ArrowUp,
  X,
  TrendingUp, TrendingDown 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ResponsiveContainer, Sankey, Tooltip } from "recharts";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  ];

  const controlBreakdown = [
    { name: "Economic Performance And Diversification", score: 50 },
    { name: "Data Architecture and Modeling", score: 50 },
    { name: "Document and Content Management", score: 50 },
    { name: "Data Quality Management", score: 50 },
    { name: "Data Catalog and Metadata Management", score: 50 },
    { name: "Master and Reference Data Management", score: 50 },
    { name: "Data Storage and Operations", score: 50 },
    { name: "Data Monetization", score: 50 },
    { name: "Statistics and Analytics", score: 50 },
    { name: "Data Security, Privacy and Other Regulations", score: 50 },
    { name: "Data Culture and Literacy", score: 50 },
    { name: "Data Sharing, Integration and Interoperability", score: 50 },
  ];

  const sankeyData = {
    nodes: [
      { name: "2023-Green" },
      { name: "2023-Orange" },
      { name: "2023-Pink" },
      { name: "2023-Red" },
      { name: "2024-Green" },
      { name: "2024-Orange" },
      { name: "2024-Pink" },
      { name: "2024-Red" },
      { name: "2025-Green" },
      { name: "2025-Orange" },
      { name: "2025-Red" },
    ],
    links: [
      { source: 0, target: 4, value: 2 },
      { source: 1, target: 4, value: 1 },
      { source: 1, target: 5, value: 1 },
      { source: 2, target: 5, value: 2 },
      { source: 2, target: 6, value: 3 },
      { source: 3, target: 6, value: 2 },
      { source: 3, target: 7, value: 1 },
      { source: 4, target: 8, value: 5 },
      { source: 5, target: 8, value: 2 },
      { source: 5, target: 9, value: 1 },
      { source: 6, target: 9, value: 2 },
      { source: 6, target: 10, value: 2 },
      { source: 7, target: 10, value: 1 },
    ],
  };
    // Controls per domain data
  const controlsData = [
    {
      name: "Economic Performance And Diversification",
      score: 50,
      yoy: -0.04,
      nonCompliant: 0,
      compliant: 10,
      controls: 12,
    },
    { name: "Data Architecture and Modeling", score: 10, yoy: 0, nonCompliant: 9, compliant: 1, controls: 10 },
    { name: "Document and Content Management", score: 70, yoy: 0.05, nonCompliant: 3, compliant: 7, controls: 10 },
    { name: "Data Quality Management", score: 10, yoy: -0.02, nonCompliant: 9, compliant: 1, controls: 10 },
    { name: "Data Catalog and Metadata Management", score: 55, yoy: 0.03, nonCompliant: 4, compliant: 5, controls: 9 },
    { name: "Master and Reference Data Management", score: 75, yoy: 0.08, nonCompliant: 2, compliant: 8, controls: 10 },
    { name: "Data Storage and Operations", score: 68, yoy: 0.02, nonCompliant: 3, compliant: 7, controls: 10 },
    { name: "Data Monetization", score: 75, yoy: 0.06, nonCompliant: 2, compliant: 6, controls: 8 },
    { name: "Statistics and Analytics", score: 80, yoy: 0.1, nonCompliant: 2, compliant: 8, controls: 10 },
    {
      name: "Data Security, Privacy and Other Regulations",
      score: 55,
      yoy: 0,
      nonCompliant: 5,
      compliant: 6,
      controls: 11,
    },
    { name: "Data Culture and Literacy", score: 10, yoy: -0.03, nonCompliant: 8, compliant: 1, controls: 9 },
    {
      name: "Data Sharing, Integration and Interoperability",
      score: 70,
      yoy: 0.04,
      nonCompliant: 3,
      compliant: 7,
      controls: 10,
    },
  ]

  const router = useRouter();
  function handleLogout() {
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* HEADER */}
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
              <Link href="/entityco/compliance-assessment" className="text-sm hover:text-gray-300">Compliance Assessment</Link>
              <span className="mx-2">|</span>
              {/* <Link href="/entityco/statistical-assessment" className="text-sm hover:text-gray-300">Statistical Assessment</Link> */}
              {/* <Link href="/entityco/stakeholder-management" className="text-sm hover:text-gray-300">Stakeholder Management</Link> */}
              <Link href="/entityco/dashboard" className="text-sm border-b-2 border-white">Dashboard</Link>
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
                <img src="/placeholder-user.png" alt="User" className="w-full h-full object-cover" />
              </button>
            </div>

            {/* Mobile Menu */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* mobile nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-3">
                <Link href="/entityco/compliance-assessment" className="text-sm">Compliance Assessment</Link>
                
                {/* <Link href="/entityco/statistical-assessment" className="text-sm">Statistical Assessment</Link> */}
                {/* <Link href="/entityco/stakeholder-management" className="text-sm">Stakeholder Management</Link> */}
                <Link href="/entityco/dashboard" className="text-sm border-b pb-1">Dashboard</Link>
                <button onClick={handleLogout} className="text-sm text-left">Logout</button>
              </div>
            </nav>
          )}
        </div>

        <div className="container mx-auto px-4 py-4 sm:py-8 lg:justify-between">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
         
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            Hello Abdullah (Ministry of Health)
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">

            <Select defaultValue="compliance">
              <SelectTrigger className="w-[200px] bg-[#7A0026] text-white border-none">
                <SelectValue placeholder="Select Assessment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compliance">Compliance Assessment</SelectItem>
                {/* <SelectItem value="statistical">Statistical Assessment</SelectItem> */}
              </SelectContent>
            </Select>

            <Select defaultValue="2024">
              <SelectTrigger className="w-[100px] bg-[#7A0026] text-white border-none">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="border-2 border-[#7A0026] text-[#7A0026]">
              View Answers
            </Button>

            <Button variant="outline" className="border-2 border-[#7A0026] text-[#7A0026]">
              Export
            </Button>

          </div>
        </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="container mx-auto px-4 py-6 sm:py-8 z-20 -mt-20">
        

        {/* Top title + filters */}
       


        {/* SCORE + DOMAINS */}
        <div className="bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-2xl p-6 sm:p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Gauge */}
            <div>
              <h2 className="text-white text-xl font-bold mb-6">Assessment Score:</h2>

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
                    <div className="text-6xl font-bold text-white">50%</div>
                  </div>
                </div>
              </div>
 
              <div className="text-center mt-4">
                <p className="text-white text-sm">Your Score is average</p>
                <p className="text-white/80 text-xs mt-1">Last Check-in 21 Apr. View Assessment Answers</p>
              </div>

              <p className="text-white/90 text-sm mt-6 leading-relaxed">
                This indicates that your organization meets basic compliance
                standards but requires further improvements to achieve full
                alignment with regulatory requirements.
              </p>
            </div>

            {/* Score Breakdown */}
            <div>
              <h2 className="text-white text-xl font-bold mb-6">Score Breakdown By Domains</h2>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {domainScores.map((domain, index) => (
                  <div key={domain.id} className="flex items-center gap-3">

                    <div className="text-white/60 text-xs w-6">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="text-white text-sm flex-1">{domain.name}</div>

                    <div className={`${domain.color} text-white px-2 py-1 rounded text-sm font-bold`}>
                      {domain.score}
                    </div>

                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div
                        className={`${domain.color} h-2 rounded-full`}
                        style={{ width: `${domain.score}%` }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* CONTROLS BREAKDOWN */}
            <div className="mb-8">
          <div className="bg-gradient-to-r from-[#7A0026] to-[#3D1F2E] rounded-t-2xl px-6 py-4">
            <h2 className="text-white text-xl font-bold font-[family-name:var(--font-lusail)]">
              Controls breakdown per domain
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            {controlsData.map((control, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                <h3 className="text-gray-900 text-base font-semibold mb-4 leading-tight min-h-[40px]">
                  {control.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{control.score}%</span>
                  <span className="text-sm text-gray-500">Score</span>
                </div>

                <div className="flex items-center gap-1 text-xs mb-4">
                  {control.yoy >= 0 ? (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span className={control.yoy >= 0 ? "text-green-600" : "text-red-600"}>
                    {control.yoy >= 0 ? "+" : ""}
                    {(control.yoy * 100).toFixed(2)}% YoY
                  </span>
                </div>

                <div className="flex items-center justify-around text-sm pt-3 border-t border-gray-200">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-0.5 bg-orange-500"></div>
                    <span className="text-xs text-gray-600">Non-Compliant</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold text-green-600">{control.compliant}</span>
                    <span className="text-xs text-gray-600">Compliant</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-lg font-semibold text-gray-900">{control.controls}</span>
                    <span className="text-xs text-gray-600">Controls</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FULL-WIDTH BANNER IMAGE */}
        <div className="mb-8 ">
          <div className="max-w mx-auto px-4">
            <Image
              src="/grp.png"
              alt="Full Banner"
              width={2000}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </main>
    </div>
  );
}
