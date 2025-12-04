"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AssessmentApprovedPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="compliance-assessments" />

      <div className="header-gradient px-6 py-8">
        <h2 className="text-3xl font-bold text-white">Review Assessment</h2>
      </div>

      <div className="px-6 py-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-border p-8">
          {/* Success Message */}
          <div className="flex gap-4 items-start mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" strokeWidth={2.5} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Assessment has been Approved and Sent to Ministry of Health
              </h3>
              <p className="text-sm text-muted-foreground">
                Your assessment has been reviewed and sent back for revisions.
              </p>
            </div>
          </div>

          {/* Assessment Progress */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-foreground mb-4">Assessment progress</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Submission ID:</span>
                <span className="text-sm font-semibold text-foreground">#AS12345</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Submitted On:</span>
                <span className="text-sm font-semibold text-foreground">20 - 10 - 2024</span>
              </div>
            </div>
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-800 text-sm font-semibold rounded">
              Approved
            </div>
          </div>

          {/* View Results Button */}
          <Button
            className="bg-[#8A1538] hover:bg-[#6d1129] text-white"
            onClick={() => router.push("/assessments/compliance/score-dashboard")}
          >
            View Results
          </Button>
        </div>
      </div>
    </div>
  )
}
