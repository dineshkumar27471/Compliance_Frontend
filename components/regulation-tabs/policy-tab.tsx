import { Download, Printer, Mail, Phone } from "lucide-react"

export default function PolicyTab() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-8">
          {/* Section 1 */}
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#8A1538] rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Develop and refresh</h3>
                <p className="text-sm text-foreground leading-relaxed">
                  Develop and refresh on a yearly basis a Data Management Strategy spanning across 4 years in alignment
                  with the National Data and Statistics Strategy. The strategy shall outline comprehensively the
                  Entity's data strategic objectives and initiatives tailored across all 12 domains of National Data
                  Management Framework.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#8A1538] rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Align and comply</h3>
                <p className="text-sm text-foreground leading-relaxed">
                  Align and comply its data management strategy with the Digital agenda 2030 and the Third National
                  Development Strategy strategic objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#8A1538] rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Design and activate</h3>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Design and activate a Data Operating Model to support the implementation of the data management
                  strategy. The Operating Model shall define the data organization structure, including data committee,
                  and working groups charters for the Entity. Additionally, it will specify the essential data
                  management roles across the Entity, in alignment with the National Data Standards.
                </p>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Develop and publish a data governance policy in alignment with the statements provisioned in this
                  policy and the structure provided in the National Data standards to provide a strong mandate to the
                  Entity data program and initiatives. The policy shall support the activation of the data operating
                  model, including the appointment and fulfillment of the essential data management roles necessary for
                  the Entity in alignment with the National Data Standards.
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  In defining the strategic roadmap and its initiatives, the Entity shall prioritize the development of
                  the related NDS3.0 indicators provided by the National Planning Council
                </p>
              </div>
            </div>
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
