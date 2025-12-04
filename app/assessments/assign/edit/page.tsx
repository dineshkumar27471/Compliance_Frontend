'use client'

import Header from '@/components/header'
import { useState } from 'react'
import { ChevronDown, Edit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const entityData = [
  { id: 1, name: 'Ministry of Interior', cdo: 'Jamal Al-Hagrani', score: '18%' },
  { id: 2, name: 'Ministry of Interior', cdo: 'Jamal Al-Hagrani', score: '18%' },
  { id: 3, name: 'Ministry of Interior', cdo: 'Jamal Al-Hagrani', score: '18%' },
  { id: 4, name: 'Ministry of Interior', cdo: 'Jamal Al-Hagrani', score: '18%' },
]

export default function CreateAssessment() {
  const router = useRouter()
  const [role, setRole] = useState('CDO')
  const [assessmentType, setAssessmentType] = useState('Statistical Assessment')
  const [entities, setEntities] = useState('Ministry of Interior')
  const [deadline, setDeadline] = useState('20 - 10 - 2024')

  return (
    <div className="min-h-screen">
      <Header currentPage="assign-assessments" />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1F090D] to-[#330818] px-6 py-8">
        <h1 className="text-3xl font-bold text-white">Edit Assessment</h1>
      </div>

      {/* Form Section */}
      <div className="px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Edited Assessment</h2>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Role Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Role</label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#80192E]"
                >
                  <option>CDO</option>
                  <option>Auditor</option>
                  <option>Manager</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Assessment Type Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Assessment Type</label>
              <div className="relative">
                <select
                  value={assessmentType}
                  onChange={(e) => setAssessmentType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#80192E]"
                >
                  <option>Statistical Assessment</option>
                  <option>Compliance Assessment</option>
                  <option>Both</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Entities Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Entities</label>
              <div className="relative">
                <select
                  value={entities}
                  onChange={(e) => setEntities(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#80192E]"
                >
                  <option>Ministry of Interior</option>
                  <option>Ministry of Health</option>
                  <option>Ministry of Education</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Submission Deadline */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Submission Deadline</label>
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80192E] md:w-64"
            />
          </div>

          {/* Entities Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-100">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Entity name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">CDO</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Score</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {entityData.map((entity) => (
                  <tr key={entity.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{entity.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{entity.cdo}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium text-xs">
                        {entity.score}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-gray-600 hover:text-[#80192E] transition">
                        <Edit2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button className="bg-[#80192E] hover:bg-[#6B1E2F] text-white">Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
