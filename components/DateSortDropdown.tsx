'use client'
import React, { useState } from 'react';
import { ChevronDown, ArrowUpDown } from 'lucide-react';

export default function DateSortDropdown() {
  const [selectedSort, setSelectedSort] = useState('default');
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'default', label: 'Default Sorting' },
    { value: 'date-asc', label: 'Date: Oldest First' },
    { value: 'date-desc', label: 'Date: Newest First' }
  ];

  return (
    <div className="relative w-full max-w-xs">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full 
          flex 
          items-center 
          justify-between 
          px-4 
          py-3 
          bg-white 
          border 
          border-gray-300 
          rounded-full 
          text-gray-700 
          hover:bg-gray-50 
          focus:outline-none 
          focus:ring-2 
          focus:ring-indigo-500 
          transition-all 
          duration-300
        "
      >
        <div className="flex items-center">
          <ArrowUpDown className="h-5 w-5 mr-2 text-gray-500" />
          {sortOptions.find(option => option.value === selectedSort).label}
        </div>
        <ChevronDown 
          className={`
            h-5 
            w-5 
            text-gray-400 
            transition-transform 
            duration-300 
            ${isOpen ? 'rotate-180' : ''}
          `} 
        />
      </button>

      {isOpen && (
        <div 
          className="
            absolute 
            z-10 
            mt-2 
            w-full 
            bg-white 
            border 
            border-gray-200 
            rounded-lg 
            shadow-lg 
            overflow-hidden
          "
        >
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelectedSort(option.value);
                setIsOpen(false);
              }}
              className={`
                w-full 
                text-left 
                px-4 
                py-3 
                hover:bg-gray-100 
                transition-colors 
                duration-200
                ${selectedSort === option.value 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-700'}
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}