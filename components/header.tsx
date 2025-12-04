"use client"

import { Bell, Settings, User, BarChart3, ChevronDown, FileText, X, Grid2x2, Sparkles,Accessibility} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import AccessibilityCircleIcon from "@/components/ui/AccessibilityCircleIcon";


interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage = "dashboard" }: HeaderProps) {
  const [showAssessmentsDropdown, setShowAssessmentsDropdown] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [activeTab, setActiveTab] = useState<"all" | "unread" | "read">("unread")
  const [showPushBanner, setShowPushBanner] = useState(true)
  const [showBayanModal, setShowBayanModal] = useState(false)

  const notificationsRef = useRef<HTMLDivElement>(null)
  const assessmentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
      if (assessmentsRef.current && !assessmentsRef.current.contains(event.target as Node)) {
        setShowAssessmentsDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
      <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Image
                src="/images/logo-data-regulations-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                width={250}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <nav className="flex items-center gap-2 pl-10 text-sm relative">
              <Link
                href="/superadmin/dashboard"
                className={`hover:opacity-80 transition ${
                  currentPage === "dashboard" ? "font-semibold" : ""
                }`}
              >
                Dashboard
              </Link>

              <span className="mx-2">|</span>

              <div className="relative" ref={assessmentsRef}>
                <button
                  onClick={() =>
                    setShowAssessmentsDropdown(!showAssessmentsDropdown)
                  }
                  className="flex items-center gap-1 hover:opacity-80 transition"
                >
                  Assessments
                  <ChevronDown className="h-4 w-4" />
                </button>
                {showAssessmentsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                    <Link
                      href="/assessments/compliance"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                      onClick={() => setShowAssessmentsDropdown(false)}
                    >
                      Compliance Assessment
                    </Link>

                    <Link
                      href="/assessments/assign"
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                      onClick={() => setShowAssessmentsDropdown(false)}
                    >
                      Assign Assessment
                    </Link>
                  </div>
                )}
              </div>

              <span className="mx-2">|</span>

              <Link
                href="/stakeholder-management"
                className={`hover:opacity-80 transition ${
                  currentPage === "stakeholder" ? "font-semibold" : ""
                }`}
              >
                Stakeholder Management
              </Link>

              <span className="mx-2">|</span>

              <Link
                href="/regulation-management"
                className={`hover:opacity-80 transition ${
                  currentPage === "regulation" ? "font-semibold" : ""
                }`}
              >
                Regulation Management
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBayanModal(true)}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full text-sm transition flex items-center gap-2 backdrop-blur-sm"
            >
              {/* Sparkle Icon (instead of BarChart3) */}
              <span className="text-white text-lg leading-none">✦</span>

              <span className="text-white">Ask Bayan</span>
            </button>
            <button className="w-9 h-9 flex items-center justify-center  hover:bg-white/10 transition">
              <AccessibilityCircleIcon className="h-5 w-5 text-white" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center  hover:bg-white/10 transition"></button>

            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-[960px] bg-white text-black rounded-lg shadow-xl z-50 max-h-[600px] overflow-hidden">
                  <div className="flex gap-8 px-6 pt-6 pb-4 border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`pb-2 text-sm font-medium transition ${
                        activeTab === "all"
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setActiveTab("unread")}
                      className={`pb-2 text-sm font-medium transition ${
                        activeTab === "unread"
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Unread
                    </button>
                    <button
                      onClick={() => setActiveTab("read")}
                      className={`pb-2 text-sm font-medium transition ${
                        activeTab === "read"
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Read
                    </button>
                  </div>

                  <div className="overflow-y-auto max-h-[500px]">
                    {showPushBanner && (
                      <div className="mx-6 mt-6 p-4 bg-pink-50 rounded-lg flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <Bell className="h-5 w-5 text-primary mt-0.5" />
                          <div className="flex-1">
                            <span className="text-sm text-gray-900">
                              <span className="font-semibold">
                                Turn on push notifications
                              </span>{" "}
                              to know when your video has been watched and
                              interacted with.
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 text-sm font-medium text-primary hover:bg-pink-100 rounded-lg transition">
                            Allow push notifications
                          </button>
                          <button
                            onClick={() => setShowPushBanner(false)}
                            className="px-4 py-2 text-sm font-medium text-primary hover:bg-pink-100 rounded-lg transition"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-4">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                Activity Successfully Added
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">
                                Your new activity "Team Meeting" has been
                                successfully added.
                              </p>
                              <p className="text-xs text-gray-500">
                                Last Wednesday at 9:42 AM
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 rounded-lg transition">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        {currentPage === "dashboard" && (
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white">
                Hello Amira (DRC)
              </h1>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition">
                  Compliance Assessment
                </button>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition">
                  2024
                </button>
                <button className="px-4 py-2 bg-white text-primary hover:bg-white/90 rounded-lg text-sm font-medium transition">
                  Export
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {showBayanModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Bayan</h2>
                <button
                  onClick={() => setShowBayanModal(false)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-12">
                Ask me about your organization's compliance status, track
                progress, or get insights on Qatar's legal and regulatory
                requirements. I'm here to help you stay compliant!
              </p>

              {/* Action Cards */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                {/* Assessments Card */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-4">
                    <Grid2x2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Assessments
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Evaluate compliance with Qatar's laws and regulations.
                  </p>
                </div>

                {/* Results Card */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-4">
                    <Grid2x2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Results
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    View your compliance results, stay informed, and track your
                    progress.
                  </p>
                </div>
              </div>

              {/* Input Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Start a conversation with Bayan"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary transition pr-14"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center hover:opacity-90 transition">
                  <Sparkles className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
