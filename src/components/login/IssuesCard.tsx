import React from 'react';
import { PieChart, TrendingUp } from 'lucide-react';

function IssuesCard() {
  return (
    <div className="w-[270px] h-[164px] bg-white rounded-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] pl-8 pr-8 pt-6 relative z-10 -mt-6 ml-auto mr-12">
      <div className="flex items-center justify-between mb-2.5">
        <div className="bg-[#9c90fa3c] p-3 rounded-[100px]">
          <PieChart className="h-6 w-6 text-[#9D90FA]" />
        </div>
        <div className="flex items-center text-green-500 bg-green-100/50 px-2 py-1 rounded-full">
          <TrendingUp className="h-3 w-3 mr-1" />
          <span className="text-xs">14%</span>
          <span className="text-xs text-gray-500 ml-1">This week</span>
        </div>
      </div>
      <div className="text-sm text-gray-500 ">Issues Fixed</div>
      <div className="text-[32px] font-bold">500K+</div>
    </div>
  );
}

export default IssuesCard;