"use client";

import { createExpense } from "@/utils/crud";
import { useActionState } from "react";
import { 
  DollarSign, 
  FileText, 
  Tags, 
  Loader2, 
  CheckCircle2 
} from 'lucide-react';

// Enhanced Category enum with icons and colors
const Category = {
  FOOD: { label: "Food", icon: "🍽️", color: "bg-red-50 text-red-600" },
  TRANSPORTATION: { label: "Transportation", icon: "🚗", color: "bg-blue-50 text-blue-600" },
  UTILITIES: { label: "Utilities", icon: "⚡", color: "bg-yellow-50 text-yellow-600" },
  ENTERTAINMENT: { label: "Entertainment", icon: "🎉", color: "bg-purple-50 text-purple-600" },
  HEALTHCARE: { label: "Healthcare", icon: "🏥", color: "bg-green-50 text-green-600" },
  EDUCATION: { label: "Education", icon: "📚", color: "bg-indigo-50 text-indigo-600" },
  SHOPPING: { label: "Shopping", icon: "🛍️", color: "bg-pink-50 text-pink-600" },
  HOUSING: { label: "Housing", icon: "🏠", color: "bg-gray-50 text-gray-600" },
  SAVINGS: { label: "Savings", icon: "💰", color: "bg-emerald-50 text-emerald-600" },
  OTHER: { label: "Other", icon: "❓", color: "bg-stone-50 text-stone-600" }
};

export default function AddExpense() {
  const [state, formAction, isPending] = useActionState(createExpense, {
    data: null,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Animated gradient header */}
        <div className="h-1 w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient-x"></div>
        
        {/* Form Container */}
        <div className="p-8 space-y-6">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Add Expense
            </h1>
            <p className="text-sm text-gray-500">
              Track your spending efficiently
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" action={formAction}>
            {/* Amount Input */}
            <div className="relative">
              <label 
                htmlFor="amount" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <DollarSign className="mr-2 text-green-500" size={18} />
                Amount
              </label>
              <div className="relative">
                <input
                  required
                  type="number"
                  name="Amount"
                  id="amount"
                  step="1"
                  className="pl-10 block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900"
                  placeholder="Enter amount"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">$</span>
                </div>
              </div>
            </div>

            {/* Description Input */}
            <div>
              <label 
                htmlFor="description" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <FileText className="mr-2 text-blue-500" size={18} />
                Description
              </label>
              <input
                required
                type="text"
                id="description"
                name="Description"
                className="block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900"
                placeholder="What was this expense for?"
              />
            </div>

            {/* Category Select */}
            <div>
              <label 
                htmlFor="category" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <Tags className="mr-2 text-purple-500" size={18} />
                Category
              </label>
              <select
                required
                id="category"
                name="category"
                className="block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-gray-700"
              >
                {Object.keys(Category).map((cat) => (
                  <option 
                    key={cat} 
                    value={cat} 
                    className="flex items-center"
                  >
                    {Category[cat].icon} {Category[cat].label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    Adding Expense...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2" />
                    Add Expense
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Optional Success/Error State Handling */}
      {state?.data && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">Expense added successfully!</span>
        </div>
      )}
    </div>
  );
}

// Enum for categories remains the same
