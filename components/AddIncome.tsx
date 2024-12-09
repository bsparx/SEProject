"use client";

import { createIncome } from "@/utils/crud";
import { useActionState } from "react";
import { 
  DollarSign, 
  ArrowDownUp, 
  Tags, 
  Loader2, 
  CheckCircle2,
  Calendar 
} from 'lucide-react';

const IncomeCategory = {
  SALARY: { label: "Salary", icon: "💼", color: "text-blue-700" },
  FREELANCE: { label: "Freelance", icon: "💻", color: "text-teal-700" },
  INVESTMENT: { label: "Investment", icon: "📈", color: "text-green-700" },
  RENTAL: { label: "Rental", icon: "🏘️", color: "text-indigo-700" },
  SIDE_HUSTLE: { label: "Side Hustle", icon: "🚀", color: "text-purple-700" },
  BONUS: { label: "Bonus", icon: "🎉", color: "text-emerald-700" },
  GIFT: { label: "Gift", icon: "🎁", color: "text-rose-700" },
  PASSIVE_INCOME: { label: "Passive Income", icon: "💤", color: "text-sky-700" },
  REFUND: { label: "Refund", icon: "💸", color: "text-amber-700" },
  OTHER: { label: "Other", icon: "❓", color: "text-gray-700" }
};

export default function AddIncome() {
  const [state, formAction, isPending] = useActionState(createIncome, {
    data: null,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-green-500"></div>
        
        <div className="p-6 space-y-6">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Add Income
            </h1>
            <p className="text-sm text-gray-600">
              Track your financial progress
            </p>
          </div>

          <form className="space-y-5" action={formAction}>
            <div>
              <label 
                htmlFor="amount" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <DollarSign className="mr-2 text-blue-500" size={18} />
                Amount
              </label>
              <input
                required
                type="number"
                name="Amount"
                id="amount"
                min={1}
                step="1"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900"
                placeholder="Enter income amount"
              />
            </div>

            <div>
              <label 
                htmlFor="source" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <ArrowDownUp className="mr-2 text-green-500" size={18} />
                Source
              </label>
              <input
                required
                type="text"
                id="source"
                name="Source"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900"
                placeholder="Income source"
              />
            </div>

            <div>
              <label 
                htmlFor="date" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <Calendar className="mr-2 text-teal-500" size={18} />
                Date
              </label>
              <input
                required
                type="date"
                id="date"
                name="Date"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all text-gray-900"
              />
            </div>

            <div>
              <label 
                htmlFor="category" 
                className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
              >
                <Tags className="mr-2 text-indigo-500" size={18} />
                Category
              </label>
              <select
                required
                id="category"
                name="category"
                className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-700"
              >
                {Object.keys(IncomeCategory).map((cat) => (
                  <option 
                    key={cat} 
                    value={cat}
                    className="flex items-center"
                  >
                    {IncomeCategory[cat].icon} {IncomeCategory[cat].label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" />
                    Adding Income...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2" />
                    Add Income
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {state?.data && (
        <div className="fixed top-4 right-4 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg shadow-md">
          <span className="block sm:inline">Income added successfully!</span>
        </div>
      )}
    </div>
  );
}