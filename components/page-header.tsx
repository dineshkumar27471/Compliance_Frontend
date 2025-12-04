"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, X, Bell, Settings, HelpCircle, Sparkles } from "lucide-react"

interface NavLink {
  label: string
  href: string
  active?: boolean
}

interface PageHeaderProps {
  navLinks: NavLink[]
  userRole: string
  userName?: string
}

export function PageHeader({ navLinks, userRole, userName }: PageHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    router.push("/login")
  }

  return (
    <header className="bg-gradient-to-r from-[#1F090D] to-[#330818] text-white">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm hover:text-gray-300 transition-colors whitespace-nowrap ${
                  link.active ? "border-b-2 border-white" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Utility Icons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm whitespace-nowrap">
              <Sparkles className="w-4 h-4" />
              <span>Ask Bayan</span>
            </button>
            <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="relative w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button
              onClick={handleLogout}
              className="w-10 h-10 rounded-full bg-white/20 overflow-hidden hover:ring-2 ring-white transition-all flex-shrink-0"
            >
              <Image
                src="/placeholder-user.png"
                alt="User"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = '<span class="text-sm">👤</span>'
                  }
                }}
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white flex-shrink-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm hover:text-gray-300 transition-colors ${
                    link.active ? "border-b border-white pb-1" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button onClick={handleLogout} className="text-sm text-left hover:text-gray-300 transition-colors">
                Logout
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
