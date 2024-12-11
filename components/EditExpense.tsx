"use client";

import { updateExpense } from "@/utils/crud";
import { useActionState } from "react";
import {
  DollarSign,
  FileText,
  Tags,
  Loader2,
  CheckCircle2,
  Calendar,
} from "lucide-react";

// Enhanced Category enum with icons and colors
const Category = {
  FOOD: { label: "Food", icon: "🍽️", color: "bg-red-50 text-red-600" },
  TRANSPORTATION: {
    label: "Transportation",
    icon: "🚗",
    color: "bg-blue-50 text-blue-600",
  },
  UTILITIES: {
    label: "Utilities",
    icon: "⚡",
    color: "bg-yellow-50 text-yellow-600",
  },
  ENTERTAINMENT: {
    label: "Entertainment",
    icon: "🎉",
    color: "bg-purple-50 text-purple-600",
  },
  HEALTHCARE: {
    label: "Healthcare",
    icon: "🏥",
    color: "bg-green-50 text-green-600",
  },
  EDUCATION: {
    label: "Education",
    icon: "📚",
    color: "bg-indigo-50 text-indigo-600",
  },
  SHOPPING: {
    label: "Shopping",
    icon: "🛍️",
    color: "bg-pink-50 text-pink-600",
  },
  HOUSING: { label: "Housing", icon: "🏠", color: "bg-gray-50 text-gray-600" },
  SAVINGS: {
    label: "Savings",
    icon: "💰",
    color: "bg-emerald-50 text-emerald-600",
  },
  OTHER: { label: "Other", icon: "❓", color: "bg-stone-50 text-stone-600" },
};

export default function EditExpense({ expense }) {

  const [state, formAction, isPending] = useActionState(updateExpense, {
    id: expense.id,
  });
  const dateObject = new Date(expense.date.toString()); // Convert to Date object
  const formattedDate = dateObject.toISOString().split('T')[0]; // Extract 'YYYY-MM-DD'
  return (
    <div className="flex items-center justify-center w-full h-full bg-white">
      <div className="w-full max-w-md px-6 py-8 space-y-6">
     
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Edit Expense
          </h1>
          <p className="text-sm text-gray-500">
            Track your spending efficiently
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
              defaultValue={expense.category}
              className="block w-full p-3 border-2 border-gray-300 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-gray-700"
            >
              {Object.keys(Category).map((cat) => (
                <option key={cat} value={cat} className="flex items-center">
                  {Category[cat].icon} {Category[cat].label}
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
                className="pl-10 block w-full p-3 border-2 border-gray-300 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-gray-900"
                placeholder="Enter amount"
                defaultValue={expense.amount}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">$</span>
              </div>
            </div>
          </div>

      
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
              defaultValue={expense.description}
              className="block w-full p-3 border-2 border-gray-300 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900"
              placeholder="What was this expense for?"
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
                className="block w-full p-3 border border-gray-300 rounded-lg outline-none shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all text-gray-900"
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
                  Editing Expense...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2" />
                  Edit Expense
                </>
              )}
            </button>
          </div>
        </form>

   
        {state?.data && (
          <div
            className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
            role="alert"
          >
            <span className="block sm:inline">Expense added successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
}
