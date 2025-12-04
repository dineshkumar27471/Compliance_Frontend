'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

interface FormData {
  email: string
  qatarId: string
  fullNameEnglish: string
  fullNameArabic: string
  title: string
  qatarMobileNumber: string
  role: string
  company: string
  userImage: File | null
}

export default function AddNewUserPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    qatarId: '',
    fullNameEnglish: '',
    fullNameArabic: '',
    title: '',
    qatarMobileNumber: '',
    role: 'Admin',
    company: '',
    userImage: null,
  })

  const [selectedEntity, setSelectedEntity] = useState('Ministry of Health')

  const handleInputChange = (field: keyof Omit<FormData, 'userImage'>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({
        ...prev,
        userImage: e.target.files![0]
      }))
    }
  }

  const handleCancel = () => {
    router.back()
  }

  const handleSave = () => {
    console.log('Form submitted:', formData)
    router.back()
  }

  

  return (
    <div className="min-h-screen ">
      <Header currentPage="stakeholder" />
      
      {/* Page Header */}
      <div className="header-gradient border-b border-white/20 px-6 py-6">
        <h1 className="text-3xl font-bold text-white">Stakeholder Management</h1>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8">
            <button className="py-4 px-2 font-medium border-b-2 border-transparent text-gray-600 hover:text-gray-900"
            onClick={() => router.push("/stakeholder-management")}
            >
              Entities Directory

            </button>
            <button className="py-4 px-2 font-medium border-b-2 border-[#80192E] text-gray-900">
              Users Directory
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <Card className="rounded-2xl shadow-lg p-8">
          {/* Title Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add New User ({selectedEntity})
            </h2>

            {/* Description with Icon */}
            <div className="flex items-start gap-4 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex-shrink-0 mt-1">
                <BookOpen className="h-5 w-5 text-[#80192E]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Add a new team member on board quickly by filling in their details below:
                </p>
              </div>
            </div>
          </div>

          {/* Form Grid */}
          <form className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="m.almansouri@mot.gov.qa"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Qatar ID
                </label>
                <Input
                  type="text"
                  placeholder="43218540090107"
                  value={formData.qatarId}
                  onChange={handleInputChange('qatarId')}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name In English
                </label>
                <Input
                  type="text"
                  placeholder="Ahmed Al-Mansouri"
                  value={formData.fullNameEnglish}
                  onChange={handleInputChange('fullNameEnglish')}
                  className="w-full"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name In Arabic
                </label>
                <Input
                  type="text"
                  placeholder="احمد المنصوري"
                  value={formData.fullNameArabic}
                  onChange={handleInputChange('fullNameArabic')}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Title
                </label>
                <Input
                  type="text"
                  placeholder="Chief People Officer"
                  value={formData.title}
                  onChange={handleInputChange('title')}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Qatar Mobile Number
                </label>
                <Input
                  type="tel"
                  placeholder="+974 5555 1234"
                  value={formData.qatarMobileNumber}
                  onChange={handleInputChange('qatarMobileNumber')}
                  className="w-full"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Role
                </label>
                <Select value={formData.role} onValueChange={(value) => handleSelectChange('role', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                    <SelectItem value="Auditor">Auditor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  User Image
                </label>
                <div className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 cursor-pointer hover:border-gray-400 transition">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="text-center cursor-pointer">
                    <p className="text-sm text-gray-600">Image</p>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Entity
                </label>
                <Select value={formData.company} onValueChange={(value) => handleSelectChange('company', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select entity name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ministry of Health">Ministry of Health</SelectItem>
                    <SelectItem value="Ministry of Education">Ministry of Education</SelectItem>
                    <SelectItem value="Ministry of Interior">Ministry of Interior</SelectItem>
                    <SelectItem value="Qatar Airways">Qatar Airways</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
              <Button
                type="button"
                variant="outline"
                className="px-8 py-2 border-2 border-[#80192E] text-[#80192E] hover:bg-red-50"
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="px-8 py-2 bg-[#80192E] hover:bg-[#6B152A] text-white"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  )
}
