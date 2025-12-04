"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function AddEntityPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    entityNameEnglish: "",
    entityNameArabic: "",
    entityLogo: "",
  })

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({
        ...prev,
        userImage: e.target.files![0]
      }))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New entity created:", formData)
    router.push("/stakeholder-management")
  }

  const handleCancel = () => {
    router.push("/stakeholder-management")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section with Tabs */}
      <div className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/stakeholder-management"
            className="flex items-center gap-2 text-white hover:opacity-80 mb-4 w-fit"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </Link>
          <h1 className="text-3xl font-bold mb-8">Stakeholder Management</h1>

          {/* Tabs Navigation */}
          <div className="flex gap-8 border-b border-white/20">
            <Link href="/stakeholder-management" className="pb-3 hover:border-b-2 hover:border-white transition">
              Entities Directory
            </Link>
            <Link href="/stakeholder-management" className="pb-3 hover:border-b-2 hover:border-white transition">
              Users Directory
            </Link>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-10">
          {/* Updated Title and Info Box */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Entity</h2>

          {/* Info Box */}
          <div className="flex gap-4 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-[#80192E]">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded bg-[#80192E] text-white">
                <Building2 className="h-5 w-5" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Add a new entity on board quickly by filling in their details below:
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Entity Name English</label>
                <Input
                  type="text"
                  name="entityNameEnglish"
                  placeholder="Qatar Airways"
                  value={formData.entityNameEnglish}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Entity Name Arabic</label>
                <Input
                  type="text"
                  name="entityNameArabic"
                  placeholder="الخطوط القطرية القطرية"
                  value={formData.entityNameArabic}
                  onChange={handleInputChange}
                  dir="rtl"
                  className="bg-white border-gray-300"
                />
              </div>
            </div>

            {/* Row 2 */}
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

            {/* Buttons */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t">
              <Link href="/stakeholder-management">
                <Button variant="outline" className="border-[#80192E] text-[#80192E] hover:bg-red-50 bg-transparent">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" className="bg-[#80192E] hover:bg-[#6B152A] text-white">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
