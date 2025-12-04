"use client"

import { useState } from "react"
import { Search, Plus, Grid3x3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Entity {
  id: string
  name: string
  icon: string
  activeUsers: number
  complianceScore: number
}

const entities: Entity[] = [
  {
    id: "1",
    name: "Ministry of Health",
    icon: "🏥",
    activeUsers: 6,
    complianceScore: 95,
  },
  {
    id: "2",
    name: "Ministry of Education",
    icon: "📚",
    activeUsers: 6,
    complianceScore: 92,
  },
  {
    id: "3",
    name: "Ministry of Public Health",
    icon: "🏢",
    activeUsers: 6,
    complianceScore: 97,
  },
  {
    id: "4",
    name: "Qatar Airways",
    icon: "✈️",
    activeUsers: 6,
    complianceScore: 98,
  },
  {
    id: "5",
    name: "Ministry of Education",
    icon: "📚",
    activeUsers: 6,
    complianceScore: 92,
  },
  {
    id: "6",
    name: "Qatar Petroleum",
    icon: "🛢️",
    activeUsers: 6,
    complianceScore: 96,
  },
  {
    id: "7",
    name: "Ministry of Interior",
    icon: "🏛️",
    activeUsers: 6,
    complianceScore: 95,
  },
  {
    id: "8",
    name: "Ministry of Education",
    icon: "📚",
    activeUsers: 6,
    complianceScore: 92,
  },
  {
    id: "9",
    name: "Ministry of Public Health",
    icon: "🏢",
    activeUsers: 6,
    complianceScore: 97,
  },
]

export default function EntitiesDirectory() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEntities = entities.filter((entity) => entity.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleViewDetails = (entity: Entity) => {
    const params = new URLSearchParams({
      name: entity.name,
      icon: entity.icon,
      users: entity.activeUsers.toString(),
      score: entity.complianceScore.toString(),
    })
    router.push(`/stakeholder-management/entity-details?${params}`)
  }

  return (
    <div className="bg-white">
      {/* Header with Search and Controls */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-foreground">
            Entities Directory <span className="text-primary">({entities.length} Entity)</span>
          </h2>
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Looking for something specific?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>

          {/* View Toggle */}
          <div className="flex border border-border rounded-lg bg-white">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "bg-white"}`}
            >
              <Grid3x3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-gray-100" : "bg-white"}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>

          {/* Add New Button */}
          <Link href="/stakeholder-management/add-entity">
            <Button className="bg-[#8A1538] hover:bg-primary/90 text-primary-foreground gap-2">
              <Plus className="h-4 w-4" />
              Add New Entity
            </Button>
          </Link>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredEntities.map((entity) => (
            <div
              key={entity.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{entity.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">{entity.name}</h3>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">
                  Number of Active Users : <span className="font-semibold text-foreground">{entity.activeUsers}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Compliance Score: <span className="font-semibold text-foreground">{entity.complianceScore}%</span>
                </p>
              </div>

              <button
                onClick={() => handleViewDetails(entity)}
                className="text-primary font-semibold text-sm hover:underline flex items-center gap-2"
              >
                View Details <span>→</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-4 mb-8">
          {filteredEntities.map((entity) => (
            <div
              key={entity.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-3xl">{entity.icon}</div>
                  <div>
                    <h3 className="font-bold text-foreground">{entity.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Active Users: {entity.activeUsers} | Compliance Score: {entity.complianceScore}%
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleViewDetails(entity)}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button className="px-3 py-2 text-sm text-foreground/60 hover:bg-gray-100 rounded">Previous</button>
        <button className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded font-semibold">1</button>
        <button className="px-3 py-2 text-sm text-foreground/60 hover:bg-gray-100 rounded">2</button>
        <button className="px-3 py-2 text-sm text-foreground/60 hover:bg-gray-100 rounded">3</button>
        <span className="px-3 py-2 text-foreground/60">...</span>
        <button className="px-3 py-2 text-sm text-foreground/60 hover:bg-gray-100 rounded">7</button>
        <button className="px-3 py-2 text-sm text-foreground/60 hover:bg-gray-100 rounded">Next</button>
      </div>
    </div>
  )
}
