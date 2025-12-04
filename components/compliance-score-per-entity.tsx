'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar } from 'recharts'

const data = [
  { entity: 'Ministry of Interior', score1: 75, score2: 80 },
  { entity: 'Ministry of Education', score1: 82, score2: 85 },
  { entity: 'Ministry of Public Health', score1: 68, score2: 72 },
  { entity: 'Ministry of Finance', score1: 78, score2: 81 },
  { entity: 'Ministry of Transportation', score1: 85, score2: 88 },
  { entity: 'Ministry of Agriculture', score1: 72, score2: 75 },
  { entity: 'Ministry of Energy', score1: 80, score2: 83 },
  { entity: 'Ministry of Tourism', score1: 65, score2: 70 },
]

export default function ComplianceScorePerEntity() {
  return (
    <Card className="border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-white p-4 sm:p-6 rounded-t-lg">
        <CardTitle className="text-lg">Compliance score per Entities</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="entity" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score1" stroke="#3b82f6" name="Initial Score" strokeWidth={2} />
            <Line type="monotone" dataKey="score2" stroke="#22c55e" name="Latest Score" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
