"use client";


import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const AverageCompliantRadar = () => {
  const [selectedEntity, setSelectedEntity] = useState('Entity name');

  const domains = [
    { label: 'A.', name: 'Data Management Strategy and Governance', percentage: '13%', value2024: 50, value2025: 60 },
    { label: 'B.', name: 'Data Architecture and Modeling', percentage: '13%', value2024: 45, value2025: 75 },
    { label: 'C.', name: 'Document and Content Management', percentage: '13%', value2024: 55, value2025: 80 },
    { label: 'D.', name: 'Data Quality Management', percentage: '13%', value2024: 50, value2025: 70 },
    { label: 'E.', name: 'Data Catalog and Metadata Management', percentage: '17%', value2024: 60, value2025: 85 },
    { label: 'F.', name: 'Master and Reference Data Management', percentage: '14%', value2024: 55, value2025: 80 },
    { label: 'G.', name: 'Data Sharing, Integration and Interoperability', percentage: '13%', value2024: 50, value2025: 75 },
    { label: 'H.', name: 'Data Storage and Operations', percentage: '90%', value2024: 70, value2025: 85 },
    { label: 'I.', name: 'Data Monetization', percentage: '13%', value2024: 40, value2025: 65 },
    { label: 'J.', name: 'Statistics and Analytics', percentage: '50%', value2024: 65, value2025: 75 },
    { label: 'K.', name: 'Data Security, Privacy and Other Regulations', percentage: '13%', value2024: 60, value2025: 70 },
    { label: 'L.', name: 'Data Culture and Literacy', percentage: '40%', value2024: 45, value2025: 55 },
  ];

  const radarData = domains.map(domain => ({
    subject: domain.label.replace('.', ''),
    '2024': domain.value2024,
    'Current Year (2025)': domain.value2025,
    fullMark: 100,
  }));

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Average compliant score per domain</h1>
        <div className="relative">
          <select 
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.target.value)}
            className="bg-white text-gray-800 px-6 py-2 pr-10 rounded appearance-none cursor-pointer font-medium text-base"
            style={{ minWidth: '200px' }}
          >
            <option>Entity name</option>
            <option>Ministry of Interior</option>
            <option>Ministry of Education</option>
            <option>Ministry of Public Health</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex p-8 gap-8">
        {/* Domain List - Left Side */}
        <div className="w-1/2">
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-4 pb-3 border-b-2 border-gray-300">
              <div className="col-span-9 text-sm font-semibold text-gray-800">Domain Name</div>
              <div className="col-span-3 text-sm font-semibold text-gray-800 text-center">%</div>
            </div>
            
            {domains.map((domain, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200">
                <div className="col-span-9 text-sm text-gray-800">
                  <span className="font-medium">{domain.label}</span> {domain.name}
                </div>
                <div className="col-span-3 text-sm text-gray-800 text-center font-medium">
                  {domain.percentage}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Radar Chart - Right Side */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          {/* Custom Legend - Top */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-700 font-medium">2024</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg text-gray-700 font-medium">Current Year (2025)</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={500}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#d1d5db" strokeWidth={1} />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#9ca3af', fontSize: 15, fontWeight: 600 }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="2024"
                dataKey="2024"
                stroke="#0e7490"
                fill="#0e7490"
                fillOpacity={0.6}
                strokeWidth={3}
              />
              <Radar
                name="Current Year (2025)"
                dataKey="Current Year (2025)"
                stroke="#22d3ee"
                fill="#22d3ee"
                fillOpacity={0.5}
                strokeWidth={3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AverageCompliantRadar;