"use client"

import { Search, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

const domains = [
  {
    id: 1,
    title: "Data Management Strategy & Governance",
    description: "Develop a comprehensive urban plan for Doha's expanding suburbs.",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 2,
    title: "Data Architecture & Modeling",
    description: "Designs and defines data structures and relationships to support data consistency",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 3,
    title: "Document & Content Management",
    description: "Manages documents and contents lifecycle from creation to disposal",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 4,
    title: "Data Quality Management",
    description: "Ensures that data is accurate, complete, and reliable for decision-making",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 5,
    title: "Data Catalog & Metadata Management",
    description:
      "Manages, stores and organizes metadata to help users easily discover, understand, and use the data assets efficiently",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 6,
    title: "Master and Reference Data Management",
    description: "Manages core data assets to ensure accuracy and consistency across systems",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 7,
    title: "Data Storage & Operations",
    description:
      "Ensures secure and efficient storage, retrieval, and management of the data, including the infrastructure and processes used to maintain performance.",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 8,
    title: "Data Sharing, Integration & Interoperability",
    description:
      "Manages and facilitates the data exchange and integrity across different agencies and diverse systems",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 9,
    title: "Statistics & Analytics",
    description:
      "Promotes the use of statistical methods and analytical techniques to interpret data and derive meaningful insights for informed decision-making",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 10,
    title: "Data Monetization",
    description:
      "Ensures data protection against unauthorized access and ensures compliance with privacy laws and regulations",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 11,
    title: "Data Security, Privacy & Other Regulations",
    description:
      "Ensures data protection against unauthorized access and ensures compliance with privacy laws and regulations",
    lastUpdated: "Aug 15, 2025",
  },
  {
    id: 12,
    title: "Data Culture & Literacy",
    description: "Promotes a data-centric mindset & data maturity across agencies in state of Qatar",
    lastUpdated: "Aug 15, 2025",
  },
]

export default function RegulationManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const filteredDomains = domains.filter(
    (domain) =>
      domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="regulation" />

      <div className="header-gradient text-white px-6 py-8">
        <h1 className="text-3xl font-bold">Regulations Management</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 bg-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            National Data Management Domains <span className="text-primary">({filteredDomains.length})</span>
          </h2>
          <div className="relative w-80">
            <Search className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Looking for something specific?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-input"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain) => (
            <div
              key={domain.id}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-3">{domain.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{domain.description}</p>
              <div className="text-xs text-muted-foreground mb-4">Last Updated: {domain.lastUpdated}</div>
              <button
                className="text-[#80192E] text-sm font-medium flex items-center gap-2 hover:opacity-80 transition"
                onClick={() => router.push("/regulation-management/details")}
              >
                View Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
