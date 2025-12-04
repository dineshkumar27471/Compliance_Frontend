"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Bell, Settings, HelpCircle, Sparkles, Menu, X, Info, Upload, Eye, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"

const domains = [
  { id: 1, name: "Economic Performance And Diversification", questions: 20 },
  { id: 2, name: "Data Architecture and Modeling", questions: 30 },
  { id: 3, name: "Document and Content Management", questions: 5 },
  { id: 4, name: "Data Quality Management", questions: 10 },
  { id: 5, name: "Data Catalog and Metadata Management", questions: 20 },
  { id: 6, name: "Master and Reference Data Management", questions: 10 },
  { id: 7, name: "Data Storage and Operations", questions: 30 },
  { id: 8, name: "Data Sharing, Integration and Interoperability", questions: 7 },
  { id: 9, name: "Statistics and Analytics", questions: 32 },
  { id: 10, name: "Data Monetization", questions: 12 },
  { id: 11, name: "Data Security, Privacy and Other Regulations", questions: 10 },
  { id: 12, name: "Data Culture and Literacy", questions: 16 },
]

const sampleQuestions = [
  {
    id: 1,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: true,
  },
  {
    id: 2,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 3,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 4,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 5,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 6,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 7,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 8,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 9,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
  {
    id: 10,
    text: "Has the organization documented the governance model for personal data protection, e.g., with clear roles and responsibilities and reporting lines to embed PDPL compliance into the organization and address situations that may be conflicting internally?",hasIDMC: false,
  },
]

export default function AssessmentQuestionsPage() {
  const params = useParams()
  const router = useRouter()
  const domainId = Number.parseInt(params.domainId as string)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSaved, setShowSaved] = useState(false)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [plans, setPlans] = useState<Record<number, string>>({})

  const [showUploadModal, setShowUploadModal] = useState(false)
  const [currentQuestionId, setCurrentQuestionId] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedDocs, setUploadedDocs] = useState<Record<number, string>>({})
  const [showQuestionSelector, setShowQuestionSelector] = useState(false)
  const [linkedQuestions, setLinkedQuestions] = useState<number[]>([])

  const currentDomain = domains.find((d) => d.id === domainId)
  const isLastDomain = domainId === 12
  const progressPercentage = 100

  const handleSaveAndContinue = () => {
    setShowSaved(true)
    setTimeout(() => {
      setShowSaved(false)
      if (isLastDomain) {
        router.push("/entityco/compliance-submission-success")
      } else {
        router.push(`/entityco/assessment-questions/${domainId + 1}`)
      }
    }, 1000)
  }

  const handleUploadClick = (questionId: number) => {
    setCurrentQuestionId(questionId)
    setShowUploadModal(true)
    setSelectedFile(null)
    setLinkedQuestions([questionId])
  }

  const handleFileSelect = (file: File) => {
    if (file.type === "application/pdf" && file.size <= 50 * 1024 * 1024) {
      setSelectedFile(file)
    } else {
      alert("Please select a PDF file under 50MB")
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }

  const handleUploadFile = () => {
    if (selectedFile && currentQuestionId !== null) {
      setUploadedDocs((prev) => {
        const newDocs = { ...prev }
        linkedQuestions.forEach((qId) => {
          newDocs[qId] = selectedFile.name
        })
        return newDocs
      })
      setShowUploadModal(false)
      setSelectedFile(null)
      setCurrentQuestionId(null)
      setLinkedQuestions([])
      setShowQuestionSelector(false)
    }
  }

  const handleDeleteDoc = (questionId: number) => {
    setUploadedDocs((prev) => {
      const newDocs = { ...prev }
      delete newDocs[questionId]
      return newDocs
    })
  }

  const toggleLinkedQuestion = (questionId: number) => {
    setLinkedQuestions((prev) => {
      if (prev.includes(questionId)) {
        return prev.filter((id) => id !== questionId)
      } else {
        return [...prev, questionId]
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <header className="h-[250px] bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <nav className="px-4 sm:px-6 lg:px-8 py-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo-data-regulations-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                width={250}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/entityco/compliance-assessment"
                className="text-white text-sm hover:text-white/80 transition-colors"
              >
                Compliance Assessment
              </Link>
              <span className="mx-2">|</span>
              {/* <Link
                href="/entityco/statistical-assessment"
                className="text-white text-sm hover:text-white/80 transition-colors"
              >
                Statistical Assessment
              </Link> */}
              {/* <Link
                href="entityco/stakeholder-management"
                className="text-white text-sm hover:text-white/80 transition-colors"
              >
                Stakeholder-Management
              </Link> */}
              <Link
                href="/entityco/dashboard"
                className="text-white text-sm hover:text-white/80 transition-colors"
              >
                Dashboard
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-sm hidden sm:inline">
                  Ask Bayan
                </span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors hidden sm:block">
                <HelpCircle className="w-5 h-5 text-white" />
              </button>
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-colors flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-white/10">
              <div className="flex flex-col gap-3">
                <Link
                  href="/entityco/assessment-domains"
                  className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Compliance Assessment
                </Link>
                {/* <Link
                  href="/entityco/statistical-assessment"
                  className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Statistical Assessment
                </Link> */}
                <Link
                  href="/entityco/dashboard"
                  className="text-white text-sm hover:text-white/80 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </div>
            </div>
          )}

          <div className="mt-4 sm:mt-6">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
              Compliance Assessment
            </h1>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto z-20 -mt-25">
        {/* Header Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div className="flex-1">
              <h2 className="text-[#7A0026] text-2xl font-bold mb-2">
                {currentDomain?.name}
              </h2>
              <p className="text-gray-600 text-base">
                Please Fill Out The Following Form To Assess Your Compliance
                Status ({currentDomain?.questions} Question)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:flex-shrink-0">
              {showSaved && (
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Saved!
                </div>
              )}
              <Link href="/entityco/assessment-domains" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="text-sm border-gray-300 hover:bg-gray-50 w-full sm:w-auto px-6 bg-transparent"
                >
                  Domains list
                </Button>
              </Link>
              <Button
                onClick={handleSaveAndContinue}
                className="bg-[#7A0026] hover:bg-[#5A001C] text-sm w-full sm:w-auto px-6"
              >
                {isLastDomain ? "Submit Assessment" : "Save and Continue"}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300 bg-green-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-gray-900 font-bold text-lg whitespace-nowrap">
                {progressPercentage}%
              </span>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {sampleQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-12 h-12 bg-[#7A0026] rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {question.id}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <p className="text-gray-900 text-sm flex-1">
                      {question.text}
                    </p>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {question.hasIDMC && (
                        <button
                          onClick={() =>
                            console.log("Get IDMC answer for:", question.id)
                          }
                          className="text-white bg-[#7A0026] hover:bg-[#5A001C] text-sm px-3 py-2 rounded-md whitespace-nowrap"
                        >
                          Get Answer From IDMC
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-8 mb-6">
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
                        className="w-5 h-5 text-[#7A0026] border-gray-300 focus:ring-[#7A0026]"
                      />
                      <span className="text-gray-900">Yes</span>
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
                        className="w-5 h-5 text-[#7A0026] border-gray-300 focus:ring-[#7A0026]"
                      />
                      <span className="text-gray-900">No</span>
                    </label>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-900 font-medium text-sm mb-2">
                      Add Plan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={plans[question.id] || ""}
                      onChange={(e) =>
                        setPlans({ ...plans, [question.id]: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 focus:border-[#7A0026] focus:ring-1 focus:ring-[#7A0026] min-h-[100px] resize-none"
                      placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    />
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Upload Supporting Document
                    </p>
                    {uploadedDocs[question.id] ? (
                      <div className="flex items-center gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex-1 flex items-center gap-2 min-w-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#7A0026] rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                              PDF
                            </span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-700 truncate">
                            {uploadedDocs[question.id]}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 flex-shrink-0 text-xs sm:text-sm bg-transparent"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteDoc(question.id)}
                          className="flex-shrink-0"
                        >
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026]/10 text-xs sm:text-sm bg-transparent"
                        onClick={() => handleUploadClick(question.id)}
                      >
                        <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
                        Upload Document
                      </Button>
                    )}
                    {/* <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm whitespace-nowrap self-start">
                        <Info className="w-4 h-4" />
                        Show Reference
                      </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-8 flex justify-end">
          <Button
            onClick={handleSaveAndContinue}
            className="bg-[#7A0026] hover:bg-[#5A001C] px-8 w-full sm:w-auto"
          >
            {isLastDomain ? "Submit Assessment" : "Save and Continue"}
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-8 text-center"></footer>

      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Upload File</h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFile(null);
                  setShowQuestionSelector(false);
                  setLinkedQuestions([]);
                }}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Linked Questions
                  </h4>
                  <p className="text-sm text-gray-600">
                    Which questions do you need to link with this document?
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowQuestionSelector(!showQuestionSelector)}
                  className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026]/10"
                >
                  Select Questions
                </Button>
              </div>

              {showQuestionSelector && (
                <div className="border border-gray-200 rounded-lg p-4 max-h-60 overflow-y-auto bg-gray-50">
                  <div className="space-y-2">
                    {sampleQuestions.map((q) => (
                      <label
                        key={q.id}
                        className="flex items-start gap-3 p-3 hover:bg-white rounded-lg cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={linkedQuestions.includes(q.id)}
                          onChange={() => toggleLinkedQuestion(q.id)}
                          className="mt-1 w-4 h-4 text-[#7A0026] border-gray-300 rounded focus:ring-[#7A0026]"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-sm text-gray-900">
                            Question {q.id}
                          </span>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {q.text}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {linkedQuestions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {linkedQuestions.map((qId) => (
                    <span
                      key={qId}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-[#7A0026] text-white text-sm rounded-full"
                    >
                      Question {qId}
                      <button
                        onClick={() => toggleLinkedQuestion(qId)}
                        className="hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-4">
                Choose file and upload to system
              </p>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                className={`border-2 border-dashed rounded-lg p-8 sm:p-12 text-center transition-colors ${
                  isDragging
                    ? "border-[#7A0026] bg-[#7A0026]/5"
                    : "border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-[#7A0026] rounded-lg flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Drop your PDFs or just uploading
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="border-[#7A0026] text-[#7A0026] hover:bg-[#7A0026]/10"
                  >
                    Browse file
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(file);
                    }}
                    className="hidden"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Only PDF accepted. File size should be less than 50MB
              </p>
            </div>

            {selectedFile && (
              <div className="mb-4 p-3 bg-yellow-50 rounded-lg flex items-center gap-3 border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold">PDF</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFile(null);
                  setShowQuestionSelector(false);
                  setLinkedQuestions([]);
                }}
                className="flex-1 bg-transparent"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUploadFile}
                disabled={!selectedFile || linkedQuestions.length === 0}
                className="flex-1 bg-[#7A0026] hover:bg-[#5A001C] disabled:bg-gray-300"
              >
                Upload File
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
