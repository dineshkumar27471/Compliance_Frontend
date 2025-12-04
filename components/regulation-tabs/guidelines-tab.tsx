import { Download, DownloadCloud, Printer, Mail, Phone } from "lucide-react"

export default function GuidelinesTab() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-8">
          {/* Domain Overview Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#8A1538] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Domain Overview</h3>
          </div>

          <p className="text-sm text-foreground leading-relaxed mb-6">
            The Data Management Strategy and Governance domain enables organizations to align data management with
            business goals, ensuring compliance and optimizing data use. It focuses on assessing the current state,
            defining a target state, and implementing governance to unlock data's full potential.
          </p>

          {/* Key Components Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#8A1538] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Key Components of the Data Management Strategy and Governance Domain
            </h3>
          </div>

          {/* Component 1 */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-foreground mb-3">1. Data Management Strategy Current State</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground ml-4">
              <li>Business Objectives and Requirements.</li>
              <li>Current State Capabilities Maturity Assessment.</li>
              <li>Data Discovery and Readiness Assessments.</li>
            </ul>
          </div>

          {/* Component 2 */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-foreground mb-3">2. Data Management Strategy Target State</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground ml-4">
              <li>Data Management Strategy Vision, Mission, and Strategic Objectives.</li>
              <li>Data Platform Architecture.</li>
              <li>Data Management Strategy Roadmap.</li>
              <li>Data Operating Model.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        {/* Quick Action Card */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Quick action</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
              <Download className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-foreground">Download</span>
            </button>
            <button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
              <DownloadCloud className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-foreground">Download Full Suite</span>
            </button>
            <button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-md hover:bg-gray-50 transition-colors">
              <Printer className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-foreground">Print</span>
            </button>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-foreground">datagovnice@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-foreground">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
