// "use client"

// import Header from "@/components/header"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronDown, FileDown } from "lucide-react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { Suspense } from "react"

// function EntityResultsContent() {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const entityName = searchParams.get("name") || "Ministry of Foreign Affairs"
//   const type = searchParams.get("type") || "Self-assessment"
//   const cdoSubmitter = searchParams.get("cdo") || "Ahmad ALI"
//   const due = searchParams.get("due") || "January 1, 2025 - December 31, 2025"
//   const submittedBy = searchParams.get("submittedBy") || "Abdullah Sultan"
//   const status = searchParams.get("status") || "Pending"

//   const domains = [
//     { id: "01", name: "Economic Performance And Diversification", score: 55 },
//     { id: "02", name: "Data Architecture and Modeling", score: 10 },
//     { id: "03", name: "Document and Content Management", score: 70 },
//     { id: "04", name: "Data Quality Management", score: 10 },
//     { id: "05", name: "Data Catalog and Metadata Management", score: 55 },
//     { id: "06", name: "Master and Reference Data Management", score: 72 },
//     { id: "07", name: "Data Storage and Operations", score: 68 },
//     { id: "08", name: "Data Monetization", score: 73 },
//     { id: "09", name: "Statistics and Analytics", score: 60 },
//     { id: "10", name: "Data Security, Privacy & Other Regulations", score: 52 },
//     { id: "11", name: "Data Culture and Literacy", score: 10 },
//     { id: "12", name: "Data Sharing, Integration & Interoperability", score: 70 },
//   ]

//   const getScoreColor = (score: number) => {
//     if (score >= 70) return "bg-green-500"
//     if (score >= 50) return "bg-yellow-500"
//     return "bg-red-500"
//   }

//   const controlsData = [
//     { name: "Economic Performance And Diversification", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Architecture and Modeling", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Document and Content Management", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Quality Management", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Catalog and Metadata Management", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Master and Reference Data Management", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Storage and Operations", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Monetization", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Statistics and Analytics", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Security, Privacy and Other Regulations", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Culture and Literacy", score: 50, notComplete: 3, complete: 3, controls: 6 },
//     { name: "Data Sharing, Integration and Interoperability", score: 50, notComplete: 3, complete: 3, controls: 6 },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header currentPage="compliance-assessments" />

//       <div className="header-gradient px-6 py-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => router.back()}
//               className="text-white hover:text-gray-200 transition"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <h2 className="text-2xl font-bold text-white">Entity Details</h2>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <select className="bg-[#8A1538] text-white px-4 py-2 rounded-lg border border-white/20 appearance-none pr-10 font-semibold cursor-pointer">
//                 <option>Compliance Assessment</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
//             </div>

//             <div className="relative">
//               <select className="bg-[#8A1538] text-white px-4 py-2 rounded-lg border border-white/20 appearance-none pr-10 font-semibold cursor-pointer">
//                 <option>2024</option>
//                 <option>2023</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
//             </div>

//             <Button className="bg-white text-[#8A1538] hover:bg-gray-100 font-semibold">
//               <FileDown className="h-4 w-4 mr-2" />
//               Export
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="px-6 py-8">
//         {/* Entity Header Info */}
//         <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">
//             {entityName}
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//             <div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <span className="text-[#8A1538]">📋</span>
//                 <span>
//                   <strong>Type:</strong> {type}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <span className="text-[#8A1538]">📅</span>
//                 <span>
//                   <strong>Due:</strong> {due}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <span className="text-[#8A1538]">👤</span>
//                 <span>
//                   <strong>Submitted by CDO:</strong> {cdoSubmitter}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <span className="text-[#8A1538]">👥</span>
//                 <span>
//                   <strong>Submitted by CDO:</strong> {submittedBy}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <span className="text-[#8A1538]">🔄</span>
//                 <span>
//                   <strong>Status:</strong> {status}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Assessment Score and Score Breakdown */}
//         <div className="bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-lg p-8 mb-6 shadow-md">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Assessment Score Gauge */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-6">
//                 Assessment Score:
//               </h3>
//               <div className="flex flex-col items-center">
//                 <div className="relative w-64 h-64">
//                   <svg viewBox="0 0 200 200" className="w-full h-full">
//                     <circle
//                       cx="100"
//                       cy="100"
//                       r="80"
//                       fill="none"
//                       stroke="rgba(255,255,255,0.2)"
//                       strokeWidth="16"
//                       strokeDasharray="377 377"
//                       strokeDashoffset="94"
//                       transform="rotate(-90 100 100)"
//                     />
//                     <circle
//                       cx="100"
//                       cy="100"
//                       r="80"
//                       fill="none"
//                       stroke="#F5C563"
//                       strokeWidth="16"
//                       strokeDasharray="377 377"
//                       strokeDashoffset="113"
//                       strokeLinecap="round"
//                       transform="rotate(-90 100 100)"
//                     />
//                     <circle cx="180" cy="100" r="6" fill="white" />
//                   </svg>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="text-6xl font-bold text-white">70%</div>
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-white font-semibold mt-4">
//                   Your Score is average
//                 </p>
//                 <p className="text-white/80 text-sm mt-2">
//                   Last Check on 21 Apr, View Assessment Answers
//                 </p>
//               </div>

//               <div className="mt-6 bg-white/10 rounded-lg p-4">
//                 <p className="text-white text-sm">
//                   This indicates that your organization meets basic compliance
//                   standards but requires further improvements to achieve full
//                   alignment with regulatory requirements.
//                 </p>
//               </div>
//             </div>

//             {/* Score Breakdown By Domains */}
//             <div>
//               <h3 className="text-xl font-bold text-white mb-6">
//                 Score Breakdown By Domains
//               </h3>
//               <div className="space-y-3">
//                 {domains.map((domain) => (
//                   <div key={domain.id} className="flex items-center gap-4">
//                     <div className="flex-shrink-0 w-8 text-white/70 text-sm font-semibold">
//                       {domain.id}
//                     </div>
//                     <div className="flex-shrink-0 w-32 text-white text-sm">
//                       {domain.name}
//                     </div>
//                     <div
//                       className={`flex-shrink-0 w-10 h-8 rounded flex items-center justify-center text-white font-bold text-sm ${getScoreColor(
//                         domain.score
//                       )}`}
//                     >
//                       {domain.score}
//                     </div>
//                     <div
//                       className="flex-1 rounded-full h-8 overflow-hidden"
//                       style={{
//                         background: "transparent",
//                         border: "1px solid rgba(255, 255, 255, 0.2)",
//                       }}
//                     >
//                       <div
//                         className="h-full"
//                         style={{
//                           width: `${domain.score}%`,
//                           background:
//                             "linear-gradient(90deg, #D7D2C3 0%, #E4C7BB 40%, #F2BEB4 100%)",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Controls Breakdown Per Domain */}
//         <div className="bg-[#8A1538] rounded-lg p-6 mb-6">
//           <h3 className="text-xl font-bold text-white mb-4">
//             Controls breakdown per domain
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           {controlsData.map((control, idx) => (
//             <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border">
//               <h4 className="font-semibold text-sm text-gray-900 mb-3 min-h-[40px]">
//                 {control.name}
//               </h4>
//               <div className="flex items-center justify-between mb-2">
//                 <div className="text-2xl font-bold text-gray-900">
//                   {control.score}%
//                 </div>
//                 <div className="text-sm text-green-600 flex items-center gap-1">
//                   <span>↗</span>
//                   <span>
//                     +{control.complete}/{control.controls}W
//                   </span>
//                 </div>
//               </div>
//               <div className="space-y-2 text-xs">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
//                     <span className="text-gray-600">Not Complete</span>
//                   </div>
//                   <span className="font-semibold">{control.notComplete}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                     <span className="text-gray-600">Complete</span>
//                   </div>
//                   <span className="font-semibold">{control.complete}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <div className="w-2 h-2 rounded-full bg-gray-900"></div>
//                     <span className="text-gray-600">Controls</span>
//                   </div>
//                   <span className="font-semibold">{control.controls}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Domain Movement Chart */}
//         <div className="bg-[#8A1538] rounded-lg p-6">
//           <h3 className="text-xl font-bold text-white mb-6">
//             Number of domains moved from non-compliant to compliant across
//             years:
//           </h3>

//           <div className="bg-white rounded-lg p-6">
//             <div className="h-96 flex items-end justify-around gap-4">
//               {/* 2023 */}
//               <div className="flex-1 flex flex-col items-center">
//                 <div className="w-full relative" style={{ height: "100%" }}>
//                   <div className="absolute bottom-0 w-full space-y-1">
//                     <div className="bg-green-400 h-20 rounded-t flex items-center justify-center text-xs font-bold">
//                       9
//                     </div>
//                     <div className="bg-orange-300 h-16 flex items-center justify-center text-xs font-bold">
//                       8
//                     </div>
//                     <div className="bg-orange-400 h-12 flex items-center justify-center text-xs font-bold">
//                       7
//                     </div>
//                     <div className="bg-red-400 h-16 flex items-center justify-center text-xs font-bold">
//                       6
//                     </div>
//                     <div className="bg-pink-400 h-20 flex items-center justify-center text-xs font-bold">
//                       5 - 8
//                     </div>
//                     <div className="bg-red-500 h-24 rounded-b flex items-center justify-center text-xs font-bold text-white">
//                       4 - 3
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-700 mt-4">
//                   Ended 19 sep 2023
//                 </p>
//               </div>

//               {/* 2024 */}
//               <div className="flex-1 flex flex-col items-center">
//                 <div className="w-full relative" style={{ height: "100%" }}>
//                   <div className="absolute bottom-0 w-full space-y-1">
//                     <div className="bg-green-500 h-16 rounded-t flex items-center justify-center text-xs font-bold">
//                       9
//                     </div>
//                     <div className="bg-orange-400 h-32 flex items-center justify-center text-xs font-bold">
//                       7
//                     </div>
//                     <div className="bg-red-400 h-20 flex items-center justify-center text-xs font-bold">
//                       1
//                     </div>
//                     <div className="bg-pink-300 h-28 flex items-center justify-center text-xs font-bold">
//                       5 - 2
//                     </div>
//                     <div className="bg-red-500 h-24 rounded-b flex items-center justify-center text-xs font-bold text-white">
//                       8 - 3 - 4
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-700 mt-4">
//                   Ended 19 sep 2024
//                 </p>
//               </div>

//               {/* 2025 */}
//               <div className="flex-1 flex flex-col items-center">
//                 <div className="w-full relative" style={{ height: "100%" }}>
//                   <div className="absolute bottom-0 w-full space-y-1">
//                     <div className="bg-green-400 h-48 rounded-t flex items-center justify-center text-xs font-bold">
//                       9
//                     </div>
//                     <div className="bg-orange-400 h-20 flex items-center justify-center text-xs font-bold">
//                       11
//                     </div>
//                     <div className="bg-red-500 h-32 rounded-b flex items-center justify-center text-xs font-bold text-white">
//                       10 - 12
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-sm font-semibold text-gray-700 mt-4">
//                   Ended 19 sep 2025
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function EntityResults() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <EntityResultsContent />
//     </Suspense>
//   )
// }

"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronDown, FileDown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"

function EntityResultsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const entityName = searchParams.get("name") || "Ministry of Foreign Affairs"
  const type = searchParams.get("type") || "Self-assessment"
  const cdoSubmitter = searchParams.get("cdo") || "Ahmad ALI"
  const due = searchParams.get("due") || "January 1, 2025 - December 31, 2025"
  const submittedBy = searchParams.get("submittedBy") || "Abdullah Sultan"
  const status = searchParams.get("status") || "Pending"

  const domains = [
    { id: "01", name: "Economic Performance And Diversification", score: 55 },
    { id: "02", name: "Data Architecture and Modeling", score: 10 },
    { id: "03", name: "Document and Content Management", score: 70 },
    { id: "04", name: "Data Quality Management", score: 10 },
    { id: "05", name: "Data Catalog and Metadata Management", score: 55 },
    { id: "06", name: "Master and Reference Data Management", score: 72 },
    { id: "07", name: "Data Storage and Operations", score: 68 },
    { id: "08", name: "Data Monetization", score: 73 },
    { id: "09", name: "Statistics and Analytics", score: 60 },
    { id: "10", name: "Data Security, Privacy & Other Regulations", score: 52 },
    { id: "11", name: "Data Culture and Literacy", score: 10 },
    { id: "12", name: "Data Sharing, Integration & Interoperability", score: 70 },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 70) return "bg-green-500"
    if (score >= 50) return "bg-yellow-500"
    return "bg-red-500"
  }

  const controlsData = [
    { name: "Economic Performance And Diversification", score: 50, notComplete: 5, complete: 10, controls: 12, yoyChange: -0.04 },
    { name: "Data Architecture and Modeling", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.02 },
    { name: "Document and Content Management", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.05 },
    { name: "Data Quality Management", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: -0.01 },
    { name: "Data Catalog and Metadata Management", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.03 },
    { name: "Master and Reference Data Management", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.04 },
    { name: "Data Storage and Operations", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: -0.02 },
    { name: "Data Monetization", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.06 },
    { name: "Statistics and Analytics", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.01 },
    { name: "Data Security, Privacy and Other Regulations", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: -0.03 },
    { name: "Data Culture and Literacy", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.07 },
    { name: "Data Sharing, Integration and Interoperability", score: 50, notComplete: 3, complete: 3, controls: 6, yoyChange: 0.02 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="compliance-assessments" />

      <div className="header-gradient px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="text-white hover:text-gray-200 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold text-white">Entity Details</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="bg-[#8A1538] text-white px-4 py-2 rounded-lg border border-white/20 appearance-none pr-10 font-semibold cursor-pointer">
                <option>Compliance Assessment</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
            </div>

            <div className="relative">
              <select className="bg-[#8A1538] text-white px-4 py-2 rounded-lg border border-white/20 appearance-none pr-10 font-semibold cursor-pointer">
                <option>2024</option>
                <option>2023</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
            </div>

            <Button className="bg-white text-[#8A1538] hover:bg-gray-100 font-semibold">
              <FileDown className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        {/* Entity Header Info */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {entityName}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#8A1538]">📋</span>
                <span>
                  <strong>Type:</strong> {type}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#8A1538]">📅</span>
                <span>
                  <strong>Due:</strong> {due}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#8A1538]">👤</span>
                <span>
                  <strong>Submitted by CDO:</strong> {cdoSubmitter}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#8A1538]">👥</span>
                <span>
                  <strong>Submitted by CDO:</strong> {submittedBy}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="text-[#8A1538]">🔄</span>
                <span>
                  <strong>Status:</strong> {status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Score and Score Breakdown */}
        <div className="bg-gradient-to-r from-[#7A0026] to-[#5C1F3A] rounded-lg p-8 mb-6 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Assessment Score Gauge */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Assessment Score:
              </h3>
              <div className="flex flex-col items-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="16"
                      strokeDasharray="377 377"
                      strokeDashoffset="94"
                      transform="rotate(-90 100 100)"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#F5C563"
                      strokeWidth="16"
                      strokeDasharray="377 377"
                      strokeDashoffset="113"
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                    />
                    <circle cx="180" cy="100" r="6" fill="white" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white">70%</div>
                    </div>
                  </div>
                </div>
                <p className="text-white font-semibold mt-4">
                  Your Score is average
                </p>
                <p className="text-white/80 text-sm mt-2">
                  Last Check on 21 Apr, View Assessment Answers
                </p>
              </div>

              <div className="mt-6 bg-white/10 rounded-lg p-4">
                <p className="text-white text-sm">
                  This indicates that your organization meets basic compliance
                  standards but requires further improvements to achieve full
                  alignment with regulatory requirements.
                </p>
              </div>
            </div>

            {/* Score Breakdown By Domains */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Score Breakdown By Domains
              </h3>
              <div className="space-y-3">
                {domains.map((domain) => (
                  <div key={domain.id} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 text-white/70 text-sm font-semibold">
                      {domain.id}
                    </div>
                    <div className="flex-shrink-0 w-32 text-white text-sm">
                      {domain.name}
                    </div>
                    <div
                      className={`flex-shrink-0 w-10 h-8 rounded flex items-center justify-center text-white font-bold text-sm ${getScoreColor(
                        domain.score
                      )}`}
                    >
                      {domain.score}
                    </div>
                    <div
                      className="flex-1 rounded-full h-8 overflow-hidden"
                      style={{
                        background: "transparent",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <div
                        className="h-full"
                        style={{
                          width: `${domain.score}%`,
                          background:
                            "linear-gradient(90deg, #D7D2C3 0%, #E4C7BB 40%, #F2BEB4 100%)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls Breakdown Per Domain */}
        <div className="bg-[#8A1538] rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-white mb-4">
            Controls breakdown per domain
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {controlsData.map((control, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow border border-gray-200">
              <h4 className="font-semibold text-base text-gray-900 mb-6 leading-snug min-h-[48px]">
                {control.name}
              </h4>
              
              <div className="flex items-end gap-2 mb-8">
                <div className="text-4xl font-bold text-gray-900">
                  {control.score}%
                </div>
                <span className="text-xs text-gray-500 mb-2 font-normal">Score</span>
                <div className="ml-auto flex items-center gap-1 mb-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                  <span className="text-xs text-gray-600">
                    {control.yoyChange > 0 ? '+' : ''}{control.yoyChange}% YoY
                  </span>
                </div>
              </div>
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-orange-500 text-base">{control.notComplete}</span>
                  <div className="w-10 h-1.5 rounded-full bg-orange-500"></div>
                  <span className="text-orange-500 text-xs text-center leading-tight font-normal">Non-Compliant</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-green-600 text-base">{control.complete}</span>
                  <div className="w-10 h-1.5 rounded-full bg-green-600"></div>
                  <span className="text-green-600 text-xs text-center leading-tight font-normal">Compliant</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-gray-900 text-base">{control.controls}</span>
                  <div className="w-10 h-1.5 rounded-full bg-gray-900"></div>
                  <span className="text-gray-900 text-xs text-center leading-tight font-normal">Controls</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Domain Movement Chart */}
        
      </div>
    </div>
  );
}

export default function EntityResults() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EntityResultsContent />
    </Suspense>
  )
}
