import { ChevronRight } from "lucide-react"

export default function StandardsTab() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-[#6B1B35] to-[#4A1625] rounded-lg p-8 mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Standards</h3>
        <div className="flex items-center gap-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white">6</div>
            <div className="text-sm text-white/80 mt-1">Controls</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">15</div>
            <div className="text-sm text-white/80 mt-1">Specifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white">30</div>
            <div className="text-sm text-white/80 mt-1">Sub-Specifications</div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-foreground mb-6">Data Management Strategy and Governance Standard</h2>

      {/* Three Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Plan Card */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#8A1538]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#8A1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">MRDM-3</div>
              <h3 className="text-xl font-bold text-foreground">Plan</h3>
            </div>
          </div>
        </div>

        {/* Implement Card */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#8A1538]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#8A1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">MRDM-3</div>
              <h3 className="text-xl font-bold text-foreground">Implement</h3>
            </div>
          </div>
        </div>

        {/* Operate Card */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#8A1538]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[#8A1538]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">MRDM-3</div>
              <h3 className="text-xl font-bold text-foreground">Operate</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Plan Section */}
        <div className="space-y-6">
          {/* Data Management Strategy Current State */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-foreground mb-3">Data Management Strategy Current State</h4>
            <div className="space-y-2">
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Business Objectives & Requirements</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">
                    Current State Capabilities Maturity Assessment
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Discovery & Readiness Assessment</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Data Management Strategy Target State */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-foreground mb-3">Data Management Strategy Target State</h4>
            <div className="space-y-2">
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">
                    Data Management Strategy Vision, Mission, and Strategic Objectives
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Platform Architecture</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Management Strategy Roadmap</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Operating Mode</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Implement Section */}
        <div className="space-y-6">
          {/* Data Governance Policy */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-foreground mb-3">Data Governance Policy</h4>
            <div className="space-y-2">
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Governance Policy Creation</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Governance Policy Publication</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Governance Activation */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-foreground mb-3">Governance Activation</h4>
            <div className="space-y-2">
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">
                    Data Organizational Structure & Operating Model
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Committee</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Operate Section */}
        <div className="space-y-6">
          {/* Change & Performance Management */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-foreground mb-3">Change & Performance Management</h4>
            <div className="space-y-2">
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Strategy Socialization</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">Data Management Strategy KPIs</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">
                    Data Management Strategy Monitoring & Reporting
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Data Management Strategy & Governance Policy Refresh */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-foreground mb-3">
              Data Management Strategy & Governance Policy Refresh
            </h4>
            <div className="space-y-2">
              <button className="w-full bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-medium mb-1">FOUNDATIONAL</div>
                  <div className="text-sm font-medium text-foreground">
                    Data Management Strategy & Governance Policy Refresh
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
