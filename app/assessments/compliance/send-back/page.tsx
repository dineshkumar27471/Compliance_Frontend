"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { RotateCcw } from "lucide-react"

export default function SendBackAssessmentPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="compliance-assessments" />

      <div className="header-gradient px-6 py-8">
        <h2 className="text-3xl font-bold text-white">Review Assessment</h2>
      </div>

      <div className="px-6 py-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-border p-8">
          {/* Icon and Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <RotateCcw className="h-8 w-8 text-gray-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Send Back Questions</h3>
              <p className="text-base text-muted-foreground">Your assessment will be sent back for review.</p>
            </div>
          </div>

          {/* Assessment Progress */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-foreground mb-4">Assessment progress</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-32">Submission ID:</span>
                <span className="text-sm font-medium text-foreground">#AS12345</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-32">Submitted On:</span>
                <span className="text-sm font-medium text-foreground">20 - 10 - 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-32">Submitted By:</span>
                <span className="text-sm font-medium text-foreground">Abdallah Sultan</span>
              </div>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium">
              Rejected
            </div>
          </div>

          {/* Reasons for Sendback */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-foreground mb-4">Reasons for Sendback</h4>
            <div className="bg-gray-50 rounded-lg p-6 text-sm text-foreground border border-gray-200">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p>
                1- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <Button
              variant="outline"
              className="border-[#8A1538] text-[#8A1538] hover:bg-[#8A1538]/5 bg-transparent"
              onClick={() => router.push("/regulation-management/details")}
            >
              View Details
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="border-[#8A1538] text-[#8A1538] hover:bg-[#8A1538]/5 bg-transparent"
              onClick={() => router.push("/assessments/compliance/review-assessemnt")}
            >
              Back to Compliance Assessment
            </Button>
            <Button
              className="bg-[#8A1538] hover:bg-[#6d1129] text-white"
              onClick={() => router.push("/assessments/compliance")}
            >
              Send Back Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
