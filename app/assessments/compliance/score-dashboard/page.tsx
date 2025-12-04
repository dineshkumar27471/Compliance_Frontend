"use client";


import Header from "@/components/header"

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

  const router = useRouter();
  function handleLogout() {
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      {/* HEADER */}
       <Header currentPage="dashboard" />
   

      {/* MAIN */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        

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
                    <div className="text-6xl font-bold text-white">70%</div>
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
            <h2 className="text-white text-xl font-bold">Controls breakdown per domain</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            {controlBreakdown.map((control, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="text-gray-900 text-sm font-semibold mb-4 min-h-[40px]">{control.name}</h3>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-bold">{control.score}%</span>
                  <div className="text-xs text-gray-500">Score</div>
                </div>

                <div className="flex items-center gap-1 text-xs text-green-600 mb-4">
                  <ArrowUp className="w-3 h-3" />
                  <span className="font-medium">0% YoY</span>
                </div>

                <div className="flex items-center justify-between text-xs pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="text-gray-600">Non-Compliant</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-600">Compliant</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    <span className="text-gray-600">Controls</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* FULL-WIDTH BANNER IMAGE */}
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] bg-white py-12">
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
