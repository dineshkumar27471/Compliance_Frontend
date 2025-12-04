"use client"

import Header from "@/components/header"
import { useState } from "react"
import PolicyTab from "@/components/regulation-tabs/policy-tab"
import StandardsTab from "@/components/regulation-tabs/standards-tab"
import GuidelinesTab from "@/components/regulation-tabs/guidelines-tab"
import QuestionsTab from "@/components/regulation-tabs/questions-tab"

export default function RegulationDetailsPage() {
  const [activeTab, setActiveTab] = useState("policy")
  const [selectedYear, setSelectedYear] = useState("2025")

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="regulation-management" />

      <div className="header-gradient px-6 py-8">
        <h2 className="text-3xl font-bold text-white">Data Management Strategy & Governance</h2>
      </div>

      {/* Tabs */}
      <div className="bg-[#4A1625] border-b border-white/10">
        <div className="px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("policy")}
              className={`px-4 py-4 text-sm font-medium transition-colors relative ${
                activeTab === "policy" ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              Policy
              {activeTab === "policy" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
            </button>
            <button
              onClick={() => setActiveTab("standards")}
              className={`px-4 py-4 text-sm font-medium transition-colors relative ${
                activeTab === "standards" ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              Standards
              {activeTab === "standards" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
            </button>
            <button
              onClick={() => setActiveTab("guidelines")}
              className={`px-4 py-4 text-sm font-medium transition-colors relative ${
                activeTab === "guidelines" ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              Guidelines
              {activeTab === "guidelines" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
            </button>
            <button
              onClick={() => setActiveTab("questions")}
              className={`px-4 py-4 text-sm font-medium transition-colors relative ${
                activeTab === "questions" ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              Questions
              {activeTab === "questions" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Render tab content based on active tab */}
        {activeTab === "policy" && <PolicyTab />}
        {activeTab === "standards" && <StandardsTab />}
        {activeTab === "guidelines" && <GuidelinesTab />}
        {activeTab === "questions" && <QuestionsTab selectedYear={selectedYear} setSelectedYear={setSelectedYear} />}
      </div>
    </div>
  )
}
