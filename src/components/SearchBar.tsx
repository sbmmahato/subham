import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

function SearchBar({ placeholder = "Search Repositories", onChange }: SearchBarProps) {
  return (
    <div className="relative w-full md:w-[44vh]">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-md"
      />
    </div>
  );
}

export default SearchBar;