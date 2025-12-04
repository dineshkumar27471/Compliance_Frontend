"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    console.log("[v0] Login attempt:", { email: email.toLowerCase(), passwordLength: password.length })

    const roleRedirects: Record<string, string> = {
      "superadmin@example.com": "/superadmin/dashboard",
      "cdo@example.com": "/entity_cdo/ComplianceAssessment",
      "entityco@example.com": "/entityco/compliance-assessment",
    }

    // Simulate API delay
    // "auditor@example.com": "/auditor/ComplianceAssessment",
    //   "external@example.com": "/external-auditor/ComplianceAssessment",
    await new Promise((resolve) => setTimeout(resolve, 500))

    const normalizedEmail = email.toLowerCase().trim()
    const normalizedPassword = password.trim()
    const redirectUrl = roleRedirects[normalizedEmail]

    console.log("[v0] Redirect URL:", redirectUrl)
    console.log("[v0] Password match:", normalizedPassword === "password123")

    if (redirectUrl && normalizedPassword === "password123") {
      const userRole = normalizedEmail.split("@")[0]
      document.cookie = `user-role=${userRole}; path=/; max-age=86400`

      // Store user info in sessionStorage for static demo
      if (typeof window !== "undefined") {
        sessionStorage.setItem("userEmail", normalizedEmail)
        sessionStorage.setItem("userRole", userRole)
      }
      router.push(redirectUrl)
    } else {
      setError("Invalid email or password")
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left side - Decorative graphics */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-white">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <img
            src="/images/group-201707480284.png"
            alt="Data Analytics Illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-12 bg-gray-50">
        <div className="w-full max-w-[540px] bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <img
              src="/images/logo-data-regulations-white.png"
              alt="DATA REGULATIONS, COMPLIANCE AND STATISTICS"
              className="h-10 sm:h-12 w-auto brightness-0"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#7A0026] mb-2 font-[family-name:var(--font-lusail)]">
            Login to your account
          </h1>

          <p className="text-gray-600 mb-6 sm:mb-8">Welcome to Our Compliance</p>

          <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Ali@example.com"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••"
                  className="w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
                Forgot Password ?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#7A0026] hover:bg-[#5A001C] text-white h-11 sm:h-12 text-base font-medium"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            <p className="text-center text-xs text-gray-500 mt-4 sm:mt-6">
              By entering your email you agree on{" "}
              <Link href="/terms" className="text-[#7A0026] underline hover:text-[#5A001C]">
                Terms and conditions
              </Link>
            </p>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs font-semibold text-blue-900 mb-2">Test Credentials:</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• superadmin@example.com</li>
              <li>• cdo@example.com</li>
              {/* <li>• auditor@example.com</li>
              <li>• external@example.com</li> */}
              <li>• entityco@example.com</li>
              <li className="font-semibold mt-2">Password: password123</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
