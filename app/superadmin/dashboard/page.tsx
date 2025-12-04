import Header from "@/components/header"
import KpiCards from "@/components/kpi-cards"
import ComplianceAssessment from "@/components/compliance-assessment"
import EntitiesByScore from "@/components/entities-by-score"
import CompliantEntities from "@/components/compliant-entities"
import AverageComplaintScore from "@/components/average-complaint-score"
import ComplianceScorePerEntity from "@/components/compliance-score-per-entity"
import EntitiesComparison from "@/components/entities-comparison"
import Image from "next/image";



export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="dashboard" />

      <main className="px-6 py-8">
        <div className="max-w-[1400px] mx-auto space-y-8">
          <KpiCards />
          <ComplianceAssessment />
          <EntitiesByScore />
          <CompliantEntities />
          <AverageComplaintScore />
          <ComplianceScorePerEntity />
          <EntitiesComparison />
        </div>
      </main>
    </div>
  )
}