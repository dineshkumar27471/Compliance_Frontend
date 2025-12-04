'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CreateAssignmentModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: AssignmentFormData) => void
}

export interface AssignmentFormData {
  assessmentName: string
  entities: string[]
  assessmentType: string
  submissionDeadline: string
}

export default function CreateAssignmentModal({ isOpen, onClose, onSubmit }: CreateAssignmentModalProps) {
  const [formData, setFormData] = useState<AssignmentFormData>({
    assessmentName: '',
    entities: [],
    assessmentType: 'Compliance Assessment',
    submissionDeadline: ''
  })

  const [selectedEntities, setSelectedEntities] = useState<string[]>([])

  const entities = [
    'Ministry of Health',
    'Ministry of Education',
    'Ministry of Finance',
    'Ministry of Justice',
    'Ministry of Transport',
    'Ministry of Interior',
    'Ministry of Foreign Affairs'
  ]

  const handleEntityToggle = (entity: string) => {
    setSelectedEntities(prev => 
      prev.includes(entity) 
        ? prev.filter(e => e !== entity)
        : [...prev, entity]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      entities: selectedEntities
    })
    setFormData({
      assessmentName: '',
      entities: [],
      assessmentType: 'Compliance Assessment',
      submissionDeadline: ''
    })
    setSelectedEntities([])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#1F090D] to-[#330818] px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Create New Assessment Assignment</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Assessment Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Assessment Name *
            </label>
            <input
              type="text"
              required
              value={formData.assessmentName}
              onChange={(e) => setFormData({ ...formData, assessmentName: e.target.value })}
              placeholder="Enter assessment name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80192E]"
            />
          </div>

          {/* Assessment Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Assessment Type *
            </label>
            <select
              value={formData.assessmentType}
              onChange={(e) => setFormData({ ...formData, assessmentType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80192E] bg-white"
            >
              <option value="Compliance Assessment">Compliance Assessment</option>
              <option value="Statistical">Statistical Assessment</option>
            </select>
          </div>

          {/* Submission Deadline */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Submission Deadline *
            </label>
            <input
              type="date"
              required
              value={formData.submissionDeadline}
              onChange={(e) => setFormData({ ...formData, submissionDeadline: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#80192E]"
            />
          </div>

          {/* Entities Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Select Entities * ({selectedEntities.length} selected)
            </label>
            <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
              {entities.map((entity) => (
                <label key={entity} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <input
                    type="checkbox"
                    checked={selectedEntities.includes(entity)}
                    onChange={() => handleEntityToggle(entity)}
                    className="w-4 h-4 text-[#80192E] rounded focus:ring-2 focus:ring-[#80192E]"
                  />
                  <span className="ml-3 text-sm text-gray-700">{entity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 justify-end pt-4 border-t">
            <Button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 bg-[#80192E] hover:bg-[#6B1E2F] text-white rounded-lg transition"
            >
              Create Assignment
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
