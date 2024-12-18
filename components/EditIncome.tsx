"use client";

import { updateIncome } from "@/utils/crud";
import { useActionState } from "react";
import {
  DollarSign,
  ArrowDownUp,
  Tags,
  Loader2,
  CheckCircle2,
  Calendar,
} from "lucide-react";

// Enhanced Category enum with icons and colors for Income Sources
const IncomeCategory = {
  SALARY: { label: "Salary", icon: "💼", color: "bg-green-50 text-green-600" },
  FREELANCE: {
    label: "Freelance",
    icon: "💻",
    color: "bg-blue-50 text-blue-600",
  },
  INVESTMENT: {
    label: "Investment",
    icon: "📈",
    color: "bg-yellow-50 text-yellow-600",
  },
  RENTAL: {
    label: "Rental",
    icon: "🏘️",
    color: "bg-purple-50 text-purple-600",
  },
  SIDE_HUSTLE: {
    label: "Side Hustle",
    icon: "🚀",
    color: "bg-indigo-50 text-indigo-600",
  },
  BONUS: { label: "Bonus", icon: "🎉", color: "bg-pink-50 text-pink-600" },
  GIFT: { label: "Gift", icon: "🎁", color: "bg-red-50 text-red-600" },
  PASSIVE_INCOME: {
    label: "Passive Income",
    icon: "💤",
    color: "bg-emerald-50 text-emerald-600",
  },
  REFUND: {
    label: "Refund",
    icon: "💸",
    color: "bg-orange-50 text-orange-600",
  },
  OTHER: { label: "Other", icon: "❓", color: "bg-stone-50 text-stone-600" },
};

export default function EditIncome({ income }) {
  const [state, formAction, isPending] = useActionState(updateIncome, {
    id: income.id,
  });

  const dateObject = new Date(income.date.toString()); // Convert to Date object
  const formattedDate = dateObject.toISOString().split("T")[0]; // Extract 'YYYY-MM-DD'

  return (
    <div className="flex items-center justify-center w-full h-full bg-white">
      <div className="w-full max-w-md px-6 py-8 space-y-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Income</h1>
          <p className="text-sm text-gray-500">
            Track your earnings with precision
          </p>
        </div>

        <form className="space-y-6" action={formAction}>
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
              defaultValue={income.category}
              className="block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 outline-none focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-gray-700"
            >
              {Object.keys(IncomeCategory).map((cat) => (
                <option key={cat} value={cat} className="flex items-center">
                  {IncomeCategory[cat].icon} {IncomeCategory[cat].label}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <DollarSign className="mr-2 text-emerald-500" size={18} />
              Amount
            </label>
            <div className="relative">
              <input
                required
                type="number"
                name="Amount"
                id="amount"
                step="1"
                min={1}
                defaultValue={income.amount}
                className="pl-10 block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 outline-none focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-gray-900"
                placeholder="Enter income amount"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">$</span>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <ArrowDownUp className="mr-2 text-blue-500" size={18} />
              Source
            </label>
            <input
              required
              type="text"
              id="source"
              name="Source"
              defaultValue={income.source}
              className="block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm focus:ring-2 outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900"
              placeholder="Where did this income come from?"
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-2 flex items-center"
            >
              <Calendar className="mr-2 text-pink-500" size={18} />
              Date
            </label>
            <input
              required
              type="date"
              defaultValue={formattedDate}
              id="date"
              name="Date"
              className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 outline-none focus:ring-pink-500 focus:border-pink-500 transition-all text-gray-900"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isPending}
              className="w-full p-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 animate-spin" />
                  Editing Income...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2" />
                  Edit Income
                </>
              )}
            </button>
          </div>
        </form>

        {state?.data && (
          <div
            className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline">Income added successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
}
