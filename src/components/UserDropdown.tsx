import React from 'react';
import { ChevronDown } from 'lucide-react';

interface UserDropdownProps {
  value: string;
  onChange?: (value: string) => void;
}

function UserDropdown({ value, onChange }: UserDropdownProps) {
  return (
    <div className="relative w-full">
      <select 
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full p-2 pr-8 border rounded-md bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option>{value}</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
}

export default UserDropdown;