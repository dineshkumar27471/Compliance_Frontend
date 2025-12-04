"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Menu, Bell, Settings, HelpCircle, Plus, Pencil, Trash2, ArrowUpDown, ChevronLeft } from "lucide-react"
import { Sparkles, X } from "lucide-react";
import { useRouter } from "next/navigation";


import Image from "next/image"

export default function StakeholderManagement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showAddUserModal, setShowAddUserModal] = useState(false)

    const router = useRouter();

    const handleLogout = () => {
    router.push("/login");
  };

  const users = [
    {
      id: 1,
      name: "Ali Aziz",
      email: "ali.aziz@moi.gov.qa",
      phone: "+974 5555 1234",
      role: "Compliance Assessment Lead",
      roleColor: "text-blue-600 bg-blue-50",
      title: "Data Scientist",
      avatar: "/ali-aziz.jpg",
    },
    {
      id: 2,
      name: "Abdulrahman Suleiman",
      email: "abdulrahman.suleiman@moi.gov.qa",
      phone: "+974 5555 1234",
      role: "Statistical Assessment Lead",
      roleColor: "text-amber-600 bg-amber-50",
      title: "Data Scientist",
      avatar: "/abdulrahman-suleiman.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="h-[200px] bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Image
                src="/images/logo-data-regulations-white.png"
                alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
                width={250}
                height={60}
                className="h-8 sm:h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/entity_cdo/ComplianceAssessment"
                className="text-sm text-white hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Compliance Assessment
              </Link>
               <Link
                  href="/entity_cdo/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Stakeholder Management
                </Link>
              <Link
                href="/entity_cdo/dashboard"
                className="text-sm text-white hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Dashboard
              </Link>
            </nav>


            {/* Right Side Icons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm hover:text-gray-300 transition-colors flex items-center gap-1 whitespace-nowrap">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs">Ask Bayan</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <HelpCircle className="w-4 h-4" />
              </button>
              <button className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={handleLogout}
                className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0"
              >
                <img
                  src="/placeholder-user.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-3">
                <Link
                  href="/entityco/ComplianceAssessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Compliance Assessment
                </Link>
                {/* <Link
                  href="/entityco/statistical-assessment"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Statistical Assessment
                </Link> */}
                <Link
                  href="/entityco/stakeholder-management"
                  className="text-sm hover:text-gray-300 transition-colors break-words border-b border-white pb-1"
                >
                  Stakeholder Management
                </Link>
                <Link
                  href="/entityco/dashboard"
                  className="text-sm hover:text-gray-300 transition-colors break-words"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm text-left hover:text-gray-300 transition-colors"
                >
                  Logout
                </button>
              </div>
            </nav>
          )}
        </div>

        {/* Greeting */}
        <div className="container mx-auto px-4 py-4 sm:py-8">
          
          
        </div>
      </header>
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 z-20 -mt-30">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-900 text-white">
              Users Directory <span className="text-gray-500">(02 Users)</span>
            </h1>
          </div>
          <Button className="bg-[#7A0026] hover:bg-[#5A001C] text-white" onClick={() => setShowAddUserModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>

        {/* Users Table - Desktop */}
        <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#7A0026] text-white">
            <div className="grid grid-cols-[50px_2fr_2fr_1.5fr_1.5fr_1.5fr_100px] gap-4 px-6 py-4 items-center">
              <Checkbox className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#7A0026]" />
              <div className="flex items-center gap-2">
                <span className="font-semibold">User Full Name</span>
                <ArrowUpDown className="h-4 w-4" />
              </div>
              <div className="font-semibold">Email</div>
              <div className="font-semibold">Qatar Mobile</div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Role</span>
                <ArrowUpDown className="h-4 w-4" />
              </div>
              <div className="font-semibold">Title</div>
              <div></div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-[50px_2fr_2fr_1.5fr_1.5fr_1.5fr_100px] gap-4 px-6 py-4 items-center hover:bg-gray-50"
              >
                <Checkbox />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium text-gray-900">{user.name}</span>
                </div>
                <div className="text-gray-700">{user.email}</div>
                <div className="text-gray-700">{user.phone}</div>
                <div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${user.roleColor}`}>
                    {user.role}
                  </span>
                </div>
                <div className="text-gray-700">{user.title}</div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-gray-900">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Users Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-sm p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox />
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-600">{user.title}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2 pl-11">
                <div className="text-sm">
                  <span className="text-gray-500">Email:</span> <span className="text-gray-700">{user.email}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Phone:</span> <span className="text-gray-700">{user.phone}</span>
                </div>
                <div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${user.roleColor}`}>
                    {user.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>


      {/* Add New User Modal */}
      <Dialog open={showAddUserModal} onOpenChange={setShowAddUserModal}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
          {/* Modal Header with dark background */}
          <div className="bg-[#1F090D] text-white p-6 rounded-t-lg">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setShowAddUserModal(false)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <DialogTitle className="text-2xl font-bold">Add New User</DialogTitle>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-8 space-y-6">
            {/* Info Banner */}
            <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-[#7A0026] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <p className="text-gray-900 font-medium">
                Bring new team members on board quickly by filling in their details below:
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m.almansouri@moi.gov.qa" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qatarId">Qatar ID</Label>
                  <Input id="qatarId" placeholder="43218540901107" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullNameEn">Full Name In English</Label>
                  <Input id="fullNameEn" placeholder="Ahmed Al-Mansouri" className="border-gray-300" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullNameAr">Full Name In Arabic</Label>
                  <Input id="fullNameAr" placeholder="أحمد المنصوري" className="border-gray-300" dir="rtl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Chief People Officer" className="border-gray-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Qatar Mobile Number</Label>
                  <Input id="mobile" placeholder="+974 5555 1234" className="border-gray-300" />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue placeholder="Compliance Assessment Lead" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compliance">Compliance Assessment Lead</SelectItem>
                      <SelectItem value="statistical">Statistical Assessment Lead</SelectItem>
                      <SelectItem value="data-scientist">Data Scientist</SelectItem>
                      <SelectItem value="analyst">Data Analyst</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="px-8 bg-transparent"
                  onClick={() => setShowAddUserModal(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#7A0026] hover:bg-[#5A001C] text-white px-8">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
