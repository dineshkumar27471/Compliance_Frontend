"use client"

import { ChevronDown, Info } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface QuestionsTabProps {
  selectedYear: string
  setSelectedYear: (year: string) => void
}

interface Question {
  id: number
  text: string
  answeredBy: string
  enableDocUpload: boolean
  showEnableDocUploadSection?: boolean
}

export default function QuestionsTab({ selectedYear, setSelectedYear }: QuestionsTabProps) {
  const [showYearDropdown, setShowYearDropdown] = useState(false)
  const [showEmptyStateDropdown, setShowEmptyStateDropdown] = useState(false)
  const [showNewQuestionForm, setShowNewQuestionForm] = useState(false)
  const [newQuestionText, setNewQuestionText] = useState("")
  const [newQuestionAnsweredBy, setNewQuestionAnsweredBy] = useState("IDMC")
  const [newQuestionEnableDocUpload, setNewQuestionEnableDocUpload] = useState(false)

  const [editingQuestionId, setEditingQuestionId] = useState<number | null>(null)
  const [editedQuestionText, setEditedQuestionText] = useState("")
  const [editedAnsweredBy, setEditedAnsweredBy] = useState("")
  const [editedEnableDocUpload, setEditedEnableDocUpload] = useState(false)

  const initialQuestions: Question[] = [
    {
      id: 1,
      text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
      answeredBy: "IDMC",
      enableDocUpload: false,
    },
    {
      id: 2,
      text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
      answeredBy: "IDMC",
      enableDocUpload: true,
    },
    {
      id: 3,
      text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
      answeredBy: "IDMC",
      enableDocUpload: false,
    },
    {
      id: 4,
      text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
      answeredBy: "IDMC",
      enableDocUpload: true,
    },
    {
      id: 5,
      text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
      answeredBy: "IDMC",
      enableDocUpload: false,
    },
    {
      id: 6,
      text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",
      answeredBy: "IDMC",
      enableDocUpload: false,
      showEnableDocUploadSection: true,
    },
  ]

  const [questions, setQuestions] = useState<Question[]>(initialQuestions)
  const [questions2026, setQuestions2026] = useState<Question[]>([])

  const handleEditClick = (question: Question) => {
    setEditingQuestionId(question.id)
    setEditedQuestionText(question.text)
    setEditedAnsweredBy(question.answeredBy)
    setEditedEnableDocUpload(question.enableDocUpload)
  }

  const handleUpdateClick = (questionId: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? { ...q, text: editedQuestionText, answeredBy: editedAnsweredBy, enableDocUpload: editedEnableDocUpload }
          : q,
      ),
    )
    setEditingQuestionId(null)
  }

  const handleSubmit = () => {
    setQuestions2026(questions)
    setSelectedYear("2026")
    alert("Questions have been successfully saved to 2026!")
  }

  // Show different content based on selected year
  const isEditableYear = ["2025", "2024", "2023"].includes(selectedYear)

  const displayQuestions = selectedYear === "2026" ? questions2026 : questions

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Assessment Questions{" "}
            {isEditableYear && (
              <span className="text-[#8A1538]">({questions.length + (showNewQuestionForm ? 1 : 0)} Questions)</span>
            )}
          </h2>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowYearDropdown(!showYearDropdown)}
            className="bg-[#8A1538] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#6B1629] transition-colors"
          >
            {selectedYear}
            <ChevronDown className="h-4 w-4" />
          </button>
          {showYearDropdown && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-border rounded-md shadow-lg z-10">
              {["2026", "2025", "2024", "2023", "2022"].map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year)
                    setShowYearDropdown(false)
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-foreground"
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Empty State for 2026 */}
      {selectedYear === "2026" && displayQuestions.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <Image
            src="/abc.png"
            alt="No questions illustration"
            width={300}
            height={300}
            className="mb-6"
          />
          <h3 className="text-2xl font-bold text-foreground mb-2">No Questions Added for this Year</h3>
          <p className="text-lg text-gray-600 mb-6">Click the below button to copy questions from the previous year.</p>
          <div className="relative">
            <button
              onClick={() => setShowEmptyStateDropdown(!showEmptyStateDropdown)}
              className="bg-[#8A1538] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#6B1629] transition-colors"
            >
              Select Year to Copy Questiones
              <ChevronDown className="h-4 w-4" />
            </button>
            {showEmptyStateDropdown && (
              <div className="absolute left-0 mt-2 w-32 bg-white border border-border rounded-md shadow-lg z-10">
                {["2025", "2024", "2023", "2022"].map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year)
                      setShowEmptyStateDropdown(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-foreground"
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Editable Questions View for 2025, 2024, 2023 */}
      {isEditableYear && (
        <div className="space-y-6">
          {/* Add New Questions Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowNewQuestionForm(true)}
              className="bg-[#8A1538] text-white px-6 py-2 rounded-md hover:bg-[#6B1629] transition-colors"
            >
              Add New Questions
            </button>
          </div>

          {/* New Question Form */}
          {showNewQuestionForm && (
            <div className="bg-white rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8A1538] text-white rounded flex items-center justify-center font-bold">
                  {questions.length + 1}
                </div>
                <div className="flex-1 space-y-4">
                  <textarea
                    value={newQuestionText}
                    onChange={(e) => setNewQuestionText(e.target.value)}
                    placeholder="Enter question text..."
                    className="w-full border border-border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1538] min-h-[100px]"
                  />

                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground">Answered by</span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="new-answered-by"
                          value="IDMC"
                          className="text-[#8A1538]"
                          defaultChecked
                        />
                        <span className="text-sm text-foreground">IDMC</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="new-answered-by" value="Entity CDO" className="text-[#8A1538]" />
                        <span className="text-sm text-foreground">Entity CDO</span>
                      </label>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#8A1538]" />
                      <span className="text-sm text-foreground">Enable document upload</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-3 justify-end">
                    <button
                      onClick={() => {
                        setShowNewQuestionForm(false)
                        setNewQuestionText("")
                      }}
                      className="px-6 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6B1629] transition-colors"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        setShowNewQuestionForm(false)
                        setNewQuestionText("")
                      }}
                      className="px-6 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6B1629] transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Question Cards */}
          {questions.map((question) => (
            <div key={question.id} className="bg-white rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8A1538] text-white rounded flex items-center justify-center font-bold">
                  {question.id}
                </div>
                <div className="flex-1 space-y-4">
                  {editingQuestionId === question.id ? (
                    <textarea
                      value={editedQuestionText}
                      onChange={(e) => setEditedQuestionText(e.target.value)}
                      className="w-full border border-border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8A1538] min-h-[100px]"
                    />
                  ) : (
                    <p className="text-sm text-foreground">{question.text}</p>
                  )}

                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground">Answered by</span>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`answered-by-${question.id}`}
                          value="IDMC"
                          checked={
                            editingQuestionId === question.id
                              ? editedAnsweredBy === "IDMC"
                              : question.answeredBy === "IDMC"
                          }
                          onChange={(e) => editingQuestionId === question.id && setEditedAnsweredBy(e.target.value)}
                          disabled={editingQuestionId !== question.id}
                          className="text-[#8A1538]"
                        />
                        <span className="text-sm text-foreground">IDMC</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`answered-by-${question.id}`}
                          value="Entity CDO"
                          checked={
                            editingQuestionId === question.id
                              ? editedAnsweredBy === "Entity CDO"
                              : question.answeredBy === "Entity CDO"
                          }
                          onChange={(e) => editingQuestionId === question.id && setEditedAnsweredBy(e.target.value)}
                          disabled={editingQuestionId !== question.id}
                          className="text-[#8A1538]"
                        />
                        <span className="text-sm text-foreground">Entity CDO</span>
                      </label>
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={editingQuestionId === question.id ? editedEnableDocUpload : question.enableDocUpload}
                        onChange={(e) =>
                          editingQuestionId === question.id && setEditedEnableDocUpload(e.target.checked)
                        }
                        disabled={editingQuestionId !== question.id}
                        className="rounded text-[#8A1538]"
                      />
                      <span className="text-sm text-foreground">Enable document upload</span>
                    </label>
                  </div>

                  {question.showEnableDocUploadSection && (
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-foreground mb-3">Enable Document Upload</h4>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked readOnly className="rounded text-[#8A1538]" />
                            <span className="text-sm text-foreground">Yes</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 justify-end">
                    <button className="px-6 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6B1629] transition-colors">
                      Remove
                    </button>
                    {editingQuestionId === question.id ? (
                      <button
                        onClick={() => handleUpdateClick(question.id)}
                        className="px-6 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6B1629] transition-colors"
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(question)}
                        className="px-6 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6B1629] transition-colors"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Actions */}
          <div className="flex items-center gap-4 justify-end pt-6">
            <button className="px-8 py-2 border border-border text-foreground rounded-md hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-[#8A1538] text-white rounded-md hover:bg-[#6B1629] transition-colors"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {selectedYear === "2026" && displayQuestions.length > 0 && (
        <div className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 text-sm font-medium">Questions successfully saved for 2026!</p>
          </div>
          {displayQuestions.map((question) => (
            <div key={question.id} className="bg-white rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8A1538] text-white rounded flex items-center justify-center font-bold">
                  {question.id}
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-sm text-foreground">{question.text}</p>

                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground">Answered by</span>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={question.answeredBy === "IDMC"}
                          readOnly
                          className="text-[#8A1538]"
                        />
                        <span className="text-sm text-foreground">IDMC</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={question.answeredBy === "Entity CDO"}
                          readOnly
                          className="text-[#8A1538]"
                        />
                        <span className="text-sm text-foreground">Entity CDO</span>
                      </label>
                    </div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={question.enableDocUpload}
                        readOnly
                        className="rounded text-[#8A1538]"
                      />
                      <span className="text-sm text-foreground">Enable document upload</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Read-only Questions View for other years */}
      {!isEditableYear && selectedYear !== "2026" && (
        <div className="space-y-6">
          {displayQuestions.map((question, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8A1538] text-white rounded flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-foreground flex-1">{question.text}</p>
              </div>

              <div className="flex items-center justify-end gap-4">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                  <Info className="h-4 w-4" />
                  Show Reference
                </button>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name={`question-${index}`} value="yes" className="text-[#8A1538]" />
                  <span className="text-sm text-foreground">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name={`question-${index}`} value="no" className="text-[#8A1538]" />
                  <span className="text-sm text-foreground">No</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
