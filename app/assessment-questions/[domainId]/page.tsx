"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function AssessmentQuestionsPage() {
  const params = useParams()
  const domainId = params.domainId as string

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Assessment Questions - Domain {domainId}</h1>

        <div className="bg-white rounded-lg border p-6 mb-4">
          <h2 className="text-xl font-bold text-[#7A0026] mb-2">Data Culture and Literacy</h2>
          <p className="text-gray-700 text-sm">
            Please Fill Out The Following Form To Assess Your Compliance Status (16 Question)
          </p>
        </div>

        <div className="bg-white rounded-lg border p-6 mb-4">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-[#7A0026] rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-900 text-sm mb-4">
                Has the organization documented the governance model for personal data protection?
              </p>
              <div className="flex gap-8 mb-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="q1" value="yes" className="w-5 h-5" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="q1" value="no" className="w-5 h-5" />
                  <span>No</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Add Plan</label>
                <textarea className="w-full border rounded-lg p-3 min-h-[100px]" placeholder="Enter your plan..." />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <Link href="/assessment-domains">
            <Button variant="outline">Back to Domains</Button>
          </Link>
          <Button className="bg-[#7A0026] hover:bg-[#5A001C]">Save and Continue</Button>
        </div>
      </div>
    </div>
  )
}
