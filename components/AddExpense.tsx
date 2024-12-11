"use client";

import { createExpense } from "@/utils/crud";
import { useActionState } from "react";
import { 
  DollarSign, 
  FileText, 
  Tags, 
  Loader2, 
  CheckCircle2,
  Calendar 
} from 'lucide-react';

const Category = {
  FOOD: { label: "Food", icon: "🍽️", color: "text-red-700" },
  TRANSPORTATION: { label: "Transportation", icon: "🚗", color: "text-blue-700" },
  UTILITIES: { label: "Utilities", icon: "⚡", color: "text-yellow-700" },
  ENTERTAINMENT: { label: "Entertainment", icon: "🎉", color: "text-purple-700" },
  HEALTHCARE: { label: "Healthcare", icon: "🏥", color: "text-green-700" },
  EDUCATION: { label: "Education", icon: "📚", color: "text-indigo-700" },
  SHOPPING: { label: "Shopping", icon: "🛍️", color: "text-pink-700" },
  HOUSING: { label: "Housing", icon: "🏠", color: "text-gray-700" },
  SAVINGS: { label: "Savings", icon: "💰", color: "text-emerald-700" },
  OTHER: { label: "Other", icon: "❓", color: "text-stone-700" }
};

export default function AddExpense() {
  const [state, formAction, isPending] = useActionState(createExpense, {
    data: null,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.02]">
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-purple-500 to-pink-500"></div>
        
        <div className="p-8 space-y-7">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 mb-3">
              Add Expense
            </h1>
            <p className="text-sm text-gray-500 tracking-wide">
              Manage your financial outflow
            </p>
          </div>

          <form className="space-y-6" action={formAction}>
          <div>
              <label 
                htmlFor="category" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <Tags className="mr-2 text-purple-500" size={18} />
                Category
              </label>
              <select
                required
                id="category"
                name="category"
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 outline-none focus:ring-purple-400 focus:border-purple-400 transition-all text-gray-700 hover:border-purple-300"
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
            <div>
              <label 
                htmlFor="amount" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <DollarSign className="mr-2 text-red-500" size={18} />
                Amount
              </label>
              <input
                required
                type="number"
                name="Amount"
                id="amount"
                min={1}
                step="1"
                className="block w-full p-3.5 border-2 outline-none border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all text-gray-900 hover:border-red-300"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <label 
                htmlFor="description" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <FileText className="mr-2 text-purple-500" size={18} />
                Description
              </label>
              <input
                required
                type="text"
                id="description"
                name="Description"
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all text-gray-900 hover:border-purple-300"
                placeholder="What was this expense for?"
              />
            </div>

            <div>
              <label 
                htmlFor="date" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <Calendar className="mr-2 text-pink-500" size={18} />
                Date
              </label>
              <input
                required
                type="date"
                id="date"
                name="Date"
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all text-gray-900 hover:border-pink-300"
              />
            </div>

      

            <div className="pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full p-3.5 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-red-700 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-50"
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

      {state?.data && (
        <div className="fixed top-4 right-4 bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-lg animate-pulse">
          <span className="block sm:inline">Expense added successfully!</span>
        </div>
      )}
    </div>
  );
}