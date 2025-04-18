"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const SalesOverviewChart = () => {
  const data = [
    { name: 'Jan', currentYear: 190, previousYear: 500 },
    { name: 'Feb', currentYear: 220, previousYear: 180 },
    { name: 'Mar', currentYear: 200, previousYear: 220 },
    { name: 'Apr', currentYear: 360, previousYear: 270 },
    { name: 'May', currentYear: 370, previousYear: 230 },
    { name: 'Jun', currentYear: 450, previousYear: 250 },
    { name: 'Jul', currentYear: 380, previousYear: 210 },
    { name: 'Aug', currentYear: 290, previousYear: 180 },
    { name: 'Sep', currentYear: 350, previousYear: 200 },
    { name: 'Oct', currentYear: 300, previousYear: 120 },
    { name: 'Nov', currentYear: 210, previousYear: 180 },
    { name: 'Dec', currentYear: 420, previousYear: 150 }
  ];

  const currentYearTotal = data.reduce((acc, item) => acc + item.currentYear, 0);
  const previousYearTotal = data.reduce((acc, item) => acc + item.previousYear, 0);
  const percentageDiff = Math.round((currentYearTotal - previousYearTotal) / previousYearTotal * 100);

  return (
    <div className="bg-white p-6 w-full max-w-4xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Sales overview</h2>
        <p className="text-sm">
          <span className="text-emerald-500 font-medium">(+{percentageDiff}%) more</span> 
          <span className="text-gray-500"> in 2021</span>
        </p>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorCurrentYear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorPreviousYear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3748" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2D3748" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12, fill: '#a0aec0' }}
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 12, fill: '#a0aec0' }}
              domain={[0, 'dataMax + 50']}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                padding: '10px' 
              }} 
              itemStyle={{ 
                color: '#4a5568', 
                fontSize: '12px', 
                fontWeight: 500 
              }}
              labelStyle={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#2d3748', 
                marginBottom: '5px' 
              }}
            />
            
            <Area 
              type="monotone" 
              dataKey="currentYear" 
              stroke="#4FD1C5" 
              fillOpacity={1} 
              fill="url(#colorCurrentYear)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            
            <Area 
              type="monotone" 
              dataKey="previousYear" 
              stroke="#2D3748" 
              fillOpacity={1} 
              fill="url(#colorPreviousYear)" 
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverviewChart;