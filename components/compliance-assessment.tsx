"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ArrowRight, ArrowUpDown } from "lucide-react";

const ComplianceAssessment = () => {
  const chartData = [
    { name: "Not started", value: 20, color: "#B8446B" },
    { name: "In progress", value: 15, color: "#1B5C7D" },
    { name: "Under NPC review", value: 20, color: "#3ABED4" },
    { name: "Re-opened", value: 18, color: "#F59638" },
    { name: "Completed", value: 16, color: "#5CB85C" },
  ];

  const tableData = [
    { entity: "Ministry of Interior", cdo: "Jamal Al-Hayrani", status: "Re-opened", dueDate: "20 - 10 - 2024" },
    { entity: "Ministry of Education", cdo: "Abdullah", status: "Re-opened", dueDate: "20 - 10 - 2024" },
    { entity: "Ministry of Public Health", cdo: "Abdullah Aziz", status: "Re-opened", dueDate: "20 - 10 - 2024" },
    { entity: "Entity name", cdo: "Jamal Al-Hayrani", status: "Re-opened", dueDate: "20 - 10 - 2024" },
    { entity: "Entity name", cdo: "Jamal Al-Hayrani", status: "Re-opened", dueDate: "20 - 10 - 2024" },
  ];

  const statusSummary = [
    { status: "Not started", entities: 20, percent: "20%", color: "#B8446B" },
    { status: "In progress", entities: 15, percent: "15%", color: "#1B5C7D" },
    { status: "Under NPC review", entities: 20, percent: "20%", color: "#3ABED4" },
  ];

  const output = [
    { status: "Re-opened", entities: 18, percent: "18%", color: "#F59638" },
    { status: "Completed", entities: 16, percent: "16%", color: "#5CB85C" },
  ];

  const totalEntities = 89;

  return (
    <div className="w-full bg-gray-50 p-4 sm:p-6 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white p-4 sm:p-6 rounded-t-lg">
        <h1 className="text-xl sm:text-2xl font-semibold">
          Compliance assessment by status
        </h1>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-4 sm:p-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        
        {/* Donut Chart */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs sm:text-sm font-medium text-gray-600">Total entities</p>
            <p className="text-2xl sm:text-4xl font-bold text-gray-900">{totalEntities}</p>
          </div>

          
        </div>

        {/* Legend */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div>
            <div className="grid grid-cols-3 gap-4 mb-2 sm:mb-3 text-sm font-semibold text-gray-700 border-b pb-2">
              <div>Status</div>
              <div># entities</div>
              <div>%</div>
            </div>

            {statusSummary.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center py-2 sm:py-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded" style={{ backgroundColor: item.color }} />
                  {item.status}
                </div>
                <div className="font-medium">{item.entities}</div>
                <div className="font-medium">{item.percent}</div>
              </div>
            ))}
          </div>

          {/* Output */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-2 sm:mb-3 text-sm font-semibold text-gray-700 border-b pb-2">
              <div>Status</div>
              <div># entities</div>
              <div>%</div>
            </div>

            {output.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center py-2 sm:py-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded" style={{ backgroundColor: item.color }} />
                  {item.status}
                </div>
                <div className="font-medium">{item.entities}</div>
                <div className="font-medium">{item.percent}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white mt-6 rounded-b-lg overflow-hidden shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-800">
                  <div className="flex items-center gap-2">
                    Entity name
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-800">CDO</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-800">Status</th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-800">
                  <div className="flex items-center gap-2">
                    Due date
                    <ArrowUpDown size={14} />
                  </div>
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4"></th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-4 sm:px-6 py-3 text-gray-900">{row.entity}</td>
                  <td className="px-4 sm:px-6 py-3 text-gray-900">{row.cdo}</td>
                  <td className="px-4 sm:px-6 py-3">
                    <span className="px-2 sm:px-3 py-1 text-xs sm:text-xs font-medium text-orange-800 bg-orange-100 rounded">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-gray-900">{row.dueDate}</td>
                  <td className="px-4 sm:px-6 py-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <ArrowRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplianceAssessment;
