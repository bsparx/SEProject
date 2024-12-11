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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all hover:scale-[1.02]">
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="p-8 space-y-7">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
              Add Income
            </h1>
            <p className="text-sm text-gray-500 tracking-wide">
              Empower your financial journey
            </p>
          </div>

          <form className="space-y-6" action={formAction}>
          <div>
              <label 
                htmlFor="category" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <Tags className="mr-2 text-indigo-500" size={18} />
                Category
              </label>
              <select
                required
                id="category"
                name="category"
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all text-gray-700 hover:border-indigo-300"
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
            <div>
              <label 
                htmlFor="amount" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
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
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all text-gray-900 hover:border-blue-300"
                placeholder="Enter income amount"
              />
            </div>

            <div>
              <label 
                htmlFor="source" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <ArrowDownUp className="mr-2 text-green-500" size={18} />
                Source
              </label>
              <input
                required
                type="text"
                id="source"
                name="Source"
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-gray-900 hover:border-green-300"
                placeholder="Income source"
              />
            </div>

            <div>
              <label 
                htmlFor="date" 
                className="block text-sm font-semibold text-gray-700 mb-2 flex items-center"
              >
                <Calendar className="mr-2 text-teal-500" size={18} />
                Date
              </label>
              <input
                required
                type="date"
                id="date"
                name="Date"
                className="block w-full p-3.5 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all text-gray-900 hover:border-teal-300"
              />
            </div>



            <div className="pt-4">
              <button
                type="submit"
                disabled={isPending}
                className="w-full p-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-50"
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
        <div className="fixed top-4 right-4 bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-xl shadow-lg animate-pulse">
          <span className="block sm:inline">Income added successfully!</span>
        </div>
      )}
    </div>
  );
}