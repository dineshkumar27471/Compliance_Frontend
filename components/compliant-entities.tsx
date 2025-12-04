import React from 'react';

const CompliantBarChart = () => {
  const data = [
    { domain: 'Data Management Strategy and Governance', compliant: 14, nonCompliant: 10 },
    { domain: 'Data Architecture and Modeling', compliant: 5, nonCompliant: 12 },
    { domain: 'Document and Content Management', compliant: 10, nonCompliant: 12 },
    { domain: 'Data Quality Management', compliant: 5, nonCompliant: 14 },
    { domain: 'Data Catalog and Metadata Management', compliant: 5, nonCompliant: 14 },
    { domain: 'Data Storage and Operations', compliant: 5, nonCompliant: 8 },
    { domain: 'Statistics and Analytics', compliant: 10, nonCompliant: 14 },
    { domain: 'Data Monetization', compliant: 7, nonCompliant: 8 },
    { domain: 'Economic Performance And Diversification', compliant: 8, nonCompliant: 4 },
    { domain: 'Data Sharing, Integration and Interoperability', compliant: 5, nonCompliant: 14 },
    { domain: 'Data Security, Privacy and Other Regulations', compliant: 10, nonCompliant: 5 },
  ];

  const maxValue = 28; // Maximum total height for scaling

  return (
    <div className="w-full bg-white p-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-6 rounded-t-lg mb-12">
        <h1 className="text-2xl font-semibold">Number of (compliant -non-compliant) entities per domain</h1>
      </div>

      {/* Chart Container */}
      <div className="px-8">
        <div className="flex items-end justify-around gap-6 h-96 mb-8">
          {data.map((item, index) => {
            const compliantHeight = (item.compliant / maxValue) * 100;
            const nonCompliantHeight = (item.nonCompliant / maxValue) * 100;
            
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Bar Container */}
                <div className="relative flex flex-col items-center" style={{ height: '350px' }}>
                  <div className="absolute bottom-0 flex flex-col items-center" style={{ width: '16px' }}>
                    {/* Compliant Bar (Green) - Top */}
                    <div className="relative flex flex-col items-center w-full">
                      <span className="text-xs font-semibold text-gray-700 mb-1">
                        {item.compliant}
                      </span>
                      <div 
                        className="w-full bg-[#5EAFD4] rounded-t"
                        style={{ height: `${compliantHeight * 3.5}px` }}
                      ></div>
                    </div>
                    
                    {/* Non-Compliant Bar (Red) - Bottom */}
                    <div className="relative flex flex-col items-center w-full">
                      <div 
                        className="w-full bg-[#B62C60] rounded-b"
                        style={{ height: `${nonCompliantHeight * 3.5}px` }}
                      ></div>
                      <span className="text-xs font-semibold text-gray-700 mt-1">
                        {item.nonCompliant}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Label */}
                <div className="mt-6 text-center" style={{ width: '90px' }}>
                  <p className="text-xs text-gray-700 leading-tight">
                    {item.domain}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-end items-center gap-8 mt-12">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#5EAFD4] rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#B62C60] rounded-full"></div>
            <span className="text-sm text-gray-700 font-medium">Non-compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompliantBarChart;