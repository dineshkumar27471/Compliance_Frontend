"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

const kpiData = [
  {
    value: "80%",
    label: "Average Compliance Score",
    subtitle: "Out of 100",
    change: "",
    icon: "/002.png",
  },
  {
    value: "12",
    label: "Pending Reviews",
    subtitle: "",
    change: "3 from last week",
    icon: "/001.png",
  },
  {
    value: "70",
    label: "Completed Assessments", 
    subtitle: "",
    change: "3 from last week",
    icon: "/002.png",
  },
]

export default function KpiCards() {
  return (
    <div
      className="relative overflow-hidden text-xl rounded-lg absolute top-0 left-0 w-fullrelative"
      style={{
        background: "linear-gradient(90deg, #80192E 0%, #330818 100%)",
      }}
    >
      <div className="absolute right-0 top-0 bottom-0 w-2/5 pointer-events-none">
        <Image
          src="/images/e0814ed9e90cb09f06294eaa8e75f948840bf1c9-20-281-29.png"
          alt="Digital transformation"
          fill
          className="object-cover object-left opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 px-8 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-1">Key performance indicators</h2>
          <p className="text-sm text-white/70">last update on</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpiData.map((kpi, index) => (
            <Card key={index} className="border-0 bg-black/20 backdrop-blur-md shadow-lg">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="mb-6">
                  <Image
                    src={kpi.icon || "/placeholder.svg"}
                    alt={kpi.label}
                    width={60}
                    height={60}
                    className="opacity-90"
                  />
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-6xl font-bold text-white">{kpi.value}</span>
                  {kpi.change && <TrendingUp className="h-6 w-6 text-green-400 mb-2" />}
                  {kpi.subtitle && <TrendingUp className="h-6 w-6 text-green-400 mb-2" />}
                </div>

                {kpi.subtitle && <div className="text-base text-white/90 mb-3">{kpi.subtitle}</div>}
                {kpi.change && <div className="text-base text-green-400 mb-3">{kpi.change}</div>}

                <div className="text-lg font-medium text-white/90">{kpi.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
