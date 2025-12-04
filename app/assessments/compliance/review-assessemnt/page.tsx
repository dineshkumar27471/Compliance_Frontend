"use client"

import Header from "@/components/header"
import { useState } from "react"
import { ChevronDown, ChevronUp, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const questions = [
  {
    id: 1,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
  },
  {
    id: 2,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
  },
  {
    id: 3,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
  },
]

export default function ReviewAssessmentPage() {
  const router = useRouter()
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    "data-architecture": true,
  })
  const [answers, setAnswers] = useState<{ [key: number]: string }>({
    1: "yes",
    2: "yes",
    3: "no",
  })
  const [plans, setPlans] = useState<{ [key: number]: string }>({})

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleApprove = () => {
    router.push("/assessments/compliance/approved")
  }

  const handleSendBack = () => {
    router.push("/assessments/compliance/send-back")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage="compliance-assessments" />

      <div className="header-gradient px-6 py-8">
        <h2 className="text-3xl font-bold text-white">
          Review domain questions - Compliance Self-Assessment Form
        </h2>
      </div>

      <div className="px-6 py-8 max-w-6xl mx-auto">
        {/* Compliance Assessment Header */}
        <div className="bg-white rounded-lg shadow-sm border border-border mb-6">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h3 className="text-xl font-bold text-foreground">
              Compliance Assessment
            </h3>
            <Button variant="outline" className="border-border bg-transparent">
              Export
            </Button>
          </div>

          {/* Completion Status */}
          <div className="p-6 bg-red-50 border-b border-red-100">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="text-base font-bold text-red-900 mb-1">
                  You have complete answering your assessment
                </h4>
                <p className="text-sm text-red-800">
                  You can review all of question and answers. Don't forget that
                  compliance self-assessment form must be accurate, complete,
                  and aligned with standards before submission
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-900">100%</div>
              </div>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          <div className="p-6 flex justify-end gap-3">
            <Button
              variant="outline"
              className="border-border bg-transparent"
              onClick={handleSendBack}
            >
              Send Back Assessment
            </Button>
            <Button
              className="bg-[#8A1538] hover:bg-[#6d1129] text-white"
              onClick={handleApprove}
            >
              Approve
            </Button>
          </div>
        </div>

        {/* Data Architecture and Modeling Section */}
        <div className="bg-white rounded-lg shadow-sm border border-border">
          <button
            onClick={() => toggleSection("data-architecture")}
            className="w-full p-6 flex justify-between items-center hover:bg-muted/50 transition"
          >
            <h4 className="text-lg font-bold text-foreground">
              Data Architecture and Modeling
            </h4>
            {expandedSections["data-architecture"] ? (
              <ChevronUp className="h-5 w-5 text-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-foreground" />
            )}
          </button>

          {expandedSections["data-architecture"] && (
            <div className="border-t border-border">
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className="p-6 border-b border-border last:border-b-0"
                >
                  {/* Question Number and Text */}
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded bg-[#8A1538] text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-4">
                        {question.text}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-4 mb-4 text-sm">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                          <FileText className="h-4 w-4" />
                          NPC Feedback
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                          <span className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                            <span className="text-xs">i</span>
                          </span>
                          Show Reference
                        </button>
                      </div>

                      {/* Yes/No Options */}
                      <div className="flex gap-6 mb-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value="yes"
                            checked={answers[question.id] === "yes"}
                            onChange={(e) =>
                              setAnswers({
                                ...answers,
                                [question.id]: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-[#8A1538]"
                          />
                          <span className="text-sm text-foreground">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value="no"
                            checked={answers[question.id] === "no"}
                            onChange={(e) =>
                              setAnswers({
                                ...answers,
                                [question.id]: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-[#8A1538]"
                          />
                          <span className="text-sm text-foreground">No</span>
                        </label>
                      </div>

                      {/* Add Plan Section */}
                      {index === 0 && (
                        <>
                          <div className="mb-2">
                            <label className="text-sm font-semibold text-foreground">
                              Add Plan <span className="text-red-500">*</span>
                            </label>
                          </div>
                          <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground mb-4">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>

                          {/* NPC Feedback */}
                          <div className="mb-2">
                            <textarea
                              value={plans[question.id] || ""}
                              onChange={(e) =>
                                setPlans({
                                  ...plans,
                                  [question.id]: e.target.value,
                                })
                              }
                              className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 focus:border-[#7A0026] focus:ring-1 focus:ring-[#7A0026] min-h-[100px] resize-none"
                              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />
                          </div>

                          <div className="flex justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-border bg-transparent"
                            >
                              Save
                            </Button>
                          </div>
                        </>
                      )}

                      {/* Uploaded Document Section for Question 2 */}
                      {index === 1 && (
                        <>
                          <div className="mb-2">
                            <label className="text-sm font-semibold text-foreground">
                              Uploaded Document{" "}
                              <span className="text-red-500">*</span>
                            </label>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">
                            Only PDFs accepted. Size not more 15MB
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <FileText className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-foreground">
                              certified-audit.pdf
                            </span>
                            <button className="ml-auto">
                              <svg
                                className="h-4 w-4 text-muted-foreground"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className="mb-2">
                            <label className="text-sm font-semibold text-foreground">
                             Feed Back<span className="text-red-500"></span>
                            </label>
                          </div>
                          <div>
                            <textarea
                              value={plans[question.id] || ""}
                              onChange={(e) =>
                                setPlans({
                                  ...plans,
                                  [question.id]: e.target.value,
                                })
                              }
                              className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 focus:border-[#7A0026] focus:ring-1 focus:ring-[#7A0026] min-h-[100px] resize-none"
                              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />
                          </div>
                        </>
                      )}

                      {/* Add Plan for Question 3 */}
                      {index === 2 && (
                        <>
                          <div className="mb-2">
                            <label className="text-sm font-semibold text-foreground">
                             Feed Back<span className="text-red-500"></span>
                            </label>
                          </div>
                         <textarea
                              value={plans[question.id] || ""}
                              onChange={(e) =>
                                setPlans({
                                  ...plans,
                                  [question.id]: e.target.value,
                                })
                              }
                              className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 focus:border-[#7A0026] focus:ring-1 focus:ring-[#7A0026] min-h-[100px] resize-none"
                              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
