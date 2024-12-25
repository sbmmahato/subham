import React from 'react';
import x from '../../assets/logo.jpg'

const stats = [
  { label: 'Language Support', value: '30+' },
  { label: 'Developers', value: '10K+' },
  { label: 'Hours Saved', value: '100K+' }
];

function LoginStats() {
  return (
    <div className="w-[447px] h-[170px] bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-5">
      <div className="flex items-center mb-2">
        <img src={x} alt="CodeAnt AI" className="h-6 w-6 mr-2" />
        <span className="text-[15px] font-medium text-[#1A1A1A]">AI to Detect & Autofix Bad Code</span>
      </div><div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between px-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="font-bold text-2xl mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoginStats;