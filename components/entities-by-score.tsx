import React from 'react';
import { ChevronRight } from 'lucide-react';

const EntitiesByScoreRange = ({ 
  chartData = [
    { label: 'Score below 20%', count: 20, percentage: '22.47%', color: '#9b6ba8' },
    { label: 'Score between 21%-40%', count: 17, percentage: '19.10%', color: '#b07199' },
    { label: 'Score between 41%-60%', count: 15, percentage: '16.85%', color: '#c4758a' },
    { label: 'Score between 61%-80%', count: 25, percentage: '28.09%', color: '#8b3952' },
    { label: 'Score between 81%-100%', count: 12, percentage: '13.48%', color: '#5a2434' }
  ],
  tableData = [
    { entity: 'Ministry of Interior', cdo: 'Jamal Al-Hayrani', score: '98%', date: '20 - 10 - 2024' },
    { entity: 'Ministry of Education', cdo: 'Abdullah', score: '93%', date: '20 - 10 - 2024' },
    { entity: 'Ministry of Public Health', cdo: 'Abdullah Aziz', score: '91%', date: '20 - 10 - 2024' },
    { entity: 'Entity name', cdo: 'Jamal Al-Hayrani', score: '93%', date: '20 - 10 - 2024' },
    { entity: 'Entity name', cdo: 'Jamal Al-Hayrani', score: '94%', date: '20 - 10 - 2024' }
  ],
  title = "Entities by score range"}) => {
  const maxCount = Math.max(...chartData.map(d => d.count));

  return (
    <div
      className="relative overflow-hidden text-xl rounded-lg absolute top-0 left-0 w-fullrelative "
      style={{
        background: "linear-gradient(90deg, #80192E 0%, #330818 100%)",
      }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8b3952] to-[#5a2434] text-white px-8 py-6 rounded-t-lg">
        <h2 className="text-2xl font-semibold">Entities by score range</h2>
      </div>

      {/* Chart Section */}
     <div className="bg-gray-50 px-8 py-12">

  {/* CHART + LEGEND SIDE BY SIDE */}
  <div className="flex flex-col lg:flex-row items-start justify-center gap-16">

    {/* CHART SECTION LEFT */}
    <div className="flex items-end justify-center  gap-12 mb-12 h-80">
      {chartData.map((item, index) => {
        const height = (item.count / maxCount) * 100;
        return (
          <div key={index} className="flex flex-col items-center gap-4">
            <span className="text-gray-700 font-medium text-lg">{item.count}</span>

            <div
              className="relative"
              style={{
                width: "80px",
                height: `${height * 2.5}px`,
                minHeight: "100px",
              }}
            >
              {/* 3D BAR */}
              <div
                className="absolute bottom-0 w-full rounded-t-md"
                style={{
                  height: "100%",
                  background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                  boxShadow: `
                    inset -2px -2px 8px rgba(0,0,0,0.2),
                    inset 2px 2px 8px rgba(255,255,255,0.1),
                    4px 4px 12px rgba(0,0,0,0.15)
                  `,
                  transform: "perspective(600px) rotateY(-15deg)",
                  transformOrigin: "bottom center",
                }}
              >
                {/* TOP FACE */}
                <div
                  className="absolute top-0 left-0 w-full h-4 rounded-t-md"
                  style={{
                    background: `linear-gradient(180deg, ${item.color}22 0%, transparent 100%)`,
                    transform: "translateY(-50%) rotateX(60deg)",
                    transformOrigin: "top center",
                  }}
                />

                {/* RIGHT FACE */}
                <div
                  className="absolute top-0 right-0 h-full"
                  style={{
                    width: "8px",
                    background: `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 100%)`,
                    transform: "translateX(4px) rotateY(30deg)",
                    transformOrigin: "left center",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* LEGEND SECTION RIGHT */}
    <div className="grid grid-cols-1 pt-20 pr-20 gap-y-6 min-w-[300px]">
      {chartData.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div
              className="w-5 h-5 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>

          <div className="flex items-center gap-8 min-w-[120px]">
            <span className="text-gray-900 font-semibold">{item.count}</span>
            <span className="text-gray-600 font-medium">{item.percentage}</span>
          </div>
        </div>
      ))}
    </div>

  </div>
</div>

      {/* Table Header */}
      <div className="bg-[#d4c4b0] px-8 py-4 border-t border-gray-300">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-3 flex items-center gap-2">
            <span className="text-gray-800 font-medium">Entity name</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
          <div className="col-span-3 text-gray-800 font-medium">CDO</div>
          <div className="col-span-2 text-gray-800 font-medium">Score</div>
          <div className="col-span-3 flex items-center gap-2">
            <span className="text-gray-800 font-medium">Submission Date</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-200">
        {tableData.map((row, index) => (
          <div 
            key={index}
            className="bg-white hover:bg-gray-50 transition-colors px-8 py-5 cursor-pointer"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 text-gray-900 font-medium">{row.entity}</div>
              <div className="col-span-3 text-gray-700">{row.cdo}</div>
              <div className="col-span-2 text-gray-700">{row.score}</div>
              <div className="col-span-3 text-gray-700">{row.date}</div>
              <div className="col-span-1 flex justify-end">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntitiesByScoreRange;