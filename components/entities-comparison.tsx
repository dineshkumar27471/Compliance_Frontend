"use client";

import React, { useState } from "react";

interface ChartItem {
  name: string;
  percentage: number;
}

const EntitiesComparison: React.FC = () => {
  const entityOptions: string[] = [
    "Select Entity",
    "Ministry of Interior",
    "Ministry of Education",
    "Ministry of Public Health",
    "Ministry of Finance",
    "Ministry of Transportation",
    "Ministry of Agriculture",
    "Ministry of Energy",
    "Ministry of Tourism",
  ];

  const chartData: ChartItem[] = [
    { name: "Ministry of Interior", percentage: 62 },
    { name: "Ministry of Education", percentage: 77 },
    { name: "Ministry of Public Health", percentage: 83 },
    { name: "Ministry of Finance", percentage: 93 },
    { name: "Ministry of Transportation", percentage: 55 },
    { name: "Ministry of Agriculture", percentage: 68 },
    { name: "Ministry of Energy", percentage: 74 },
    { name: "Ministry of Tourism", percentage: 88 },
  ];

  const [selectedEntities, setSelectedEntities] = useState<string[]>([
    "Select Entity",
    "Select Entity",
    "Select Entity",
    "Select Entity",
  ]);

  const handleEntityChange = (index: number, value: string) => {
    const updated = [...selectedEntities];
    updated[index] = value;
    setSelectedEntities(updated);
  };

  // Chart data (0% if Select Entity)
  const dynamicChartData = selectedEntities.map((entity) => {
    const found = chartData.find((c) => c.name === entity);
    return found ? found : { name: entity, percentage: 0 };
  });

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-6">
        <h1 className="text-2xl font-semibold">Entities comparison</h1>
      </div>

      {/* Main Layout */}
      <div className="flex p-12 gap-16">
        {/* Left Side */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Select Entity
          </h2>

          <div className="space-y-6">
            {selectedEntities.map((entity, index) => (
              <div key={index} className="relative">
                <select
                  value={entity}
                  onChange={(e) => handleEntityChange(index, e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded text-gray-700 appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  {entityOptions.map((option, idx) => {
                    const isAlreadySelected =
                      selectedEntities.includes(option) &&
                      option !== entity &&
                      option !== "Select Entity";

                    return (
                      <option
                        key={idx}
                        value={option}
                        disabled={isAlreadySelected}
                        className={isAlreadySelected ? "text-gray-400" : ""}
                      >
                        {option}
                      </option>
                    );
                  })}
                </select>

                {/* Dropdown arrow */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side chart */}
        <div className="flex-1">
          <div className="relative pl-16 pr-8" style={{ height: "450px" }}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 900 450"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Grid */}
              {[50, 130, 210, 290, 370].map((y, i) => (
                <line
                  key={i}
                  x1="60"
                  y1={y}
                  x2="860"
                  y2={y}
                  stroke="#d1d5db"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              ))}

              {/* Y labels */}
              <text x="30" y="55" fill="#6b7280">100</text>
              <text x="40" y="135" fill="#6b7280">80</text>
              <text x="40" y="215" fill="#6b7280">60</text>
              <text x="40" y="295" fill="#6b7280">40</text>
              <text x="40" y="375" fill="#6b7280">20</text>
              <text x="50" y="410" fill="#6b7280">0</text>

              {/* Bars */}
              {dynamicChartData.map((item, index) => {
                const x = 200 + index * 180;
                const barHeight = (item.percentage / 100) * 320;
                const y = 370 - barHeight;

                const isDisabled = item.name === "Select Entity";

                return (
                  <g key={index}>
                    {/* Bar */}
                    <rect
                      x={x}
                      y={isDisabled ? 370 : y}
                      width="70"
                      height={isDisabled ? 0 : barHeight}
                      fill={isDisabled ? "#cbd5e1" : "#0e7490"}
                      className="transition-all duration-500"
                    />

                    {/* Percentage label */}
                    {!isDisabled && (
                      <text
                        x={x + 35}
                        y={y - 8}
                        textAnchor="middle"
                        fill="#1f2937"
                        fontSize="15"
                        fontWeight="600"
                      >
                        {item.percentage}%
                      </text>
                    )}

                    {/* Entity label */}
                    <text
                      x={x + 35}
                      y="400"
                      textAnchor="middle"
                      fill="#6b7280"
                      fontSize="13"
                    >
                      {item.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntitiesComparison;
