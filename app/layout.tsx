import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const lusail = localFont({
  src: "./fonts/Lusail+ Regular.ttf",
  variable: "--font-lusail",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NPC Compliance",
  description: "developed By Dk",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/npc-favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/npc-favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/npc-favicon.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${lusail.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
