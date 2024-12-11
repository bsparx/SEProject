'use client'
import React, { useState } from 'react';
import { 
  Globe, 
  DollarSign, 
  Moon, 
  HelpCircle, 
  ChevronRight, 
  Check, 
  Sun
} from 'lucide-react';

export default function PreferencesPage() {
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Preferences</h1>
      

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Globe className="w-6 h-6 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Language</h2>
              <p className="text-gray-600">Select your preferred language</p>
            </div>
          </div>
          <div className="relative">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <DollarSign className="w-6 h-6 text-green-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Currency</h2>
              <p className="text-gray-600">Choose your default currency</p>
            </div>
          </div>
          <div className="relative">
            <select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="appearance-none w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="USD">USD</option>
              <option value="PKR">PKR (Rs)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Moon className="w-6 h-6 text-indigo-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Dark Mode</h2>
              <p className="text-gray-600">Toggle dark mode for better visibility</p>
            </div>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`
              w-16 h-8 
              flex items-center 
              rounded-full 
              p-1 
              transition-all 
              duration-300 
              ${darkMode ? 'bg-indigo-600 justify-end' : 'bg-gray-300 justify-start'}
            `}
          >
            <div
              className={`
                w-6 h-6 
                rounded-full 
                bg-white 
                shadow-md 
                transform 
                transition-transform 
                duration-300
                flex items-center justify-center
              `}
            >
              {darkMode ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-yellow-500" />}
            </div>
          </button>
        </div>
      </div>
      

      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <HelpCircle className="w-6 h-6 text-orange-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Help & Support</h2>
              <p className="text-gray-600">Watch our tutorial video</p>
            </div>
          </div>
          <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span className="font-medium">Watch Video</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}