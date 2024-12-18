import {
  getRecentExpenses,
  getRecentIncomes,
  getTotalExpense,
  getTotalIncome,
} from "@/utils/getter";
import Link from "next/link";
import {
  Wallet,
  PlusCircle,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Receipt,
  DollarSign,
  Share,
} from "lucide-react";
import IncomeBarChart from "@/components/ui/IncomeBarChart";
import ExpenseBarChart from "@/components/ui/ExpenseBarChart";
import { getExpensesByCategory, getIncomeByCategory } from "@/utils/crud";

// Helper function to format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

// Mapping for expense categories with colors
const expenseCategoryIcons = {
  FOOD: { icon: "🍽️", color: "bg-orange-100" },
  TRANSPORTATION: { icon: "🚗", color: "bg-blue-100" },
  UTILITIES: { icon: "⚡", color: "bg-yellow-100" },
  ENTERTAINMENT: { icon: "🎉", color: "bg-purple-100" },
  HEALTHCARE: { icon: "🏥", color: "bg-red-100" },
  EDUCATION: { icon: "📚", color: "bg-green-100" },
  SHOPPING: { icon: "🛍️", color: "bg-pink-100" },
  HOUSING: { icon: "🏠", color: "bg-indigo-100" },
  SAVINGS: { icon: "💰", color: "bg-teal-100" },
  OTHER: { icon: "❓", color: "bg-gray-100" },
};

// Mapping for income categories with colors
const incomeCategoryIcons = {
  SALARY: { icon: "💼", color: "bg-green-100" },
  FREELANCE: { icon: "💻", color: "bg-blue-100" },
  INVESTMENT: { icon: "📈", color: "bg-yellow-100" },
  RENTAL: { icon: "🏘️", color: "bg-purple-100" },
  SIDE_HUSTLE: { icon: "🚀", color: "bg-orange-100" },
  BONUS: { icon: "🎁", color: "bg-red-100" },
  GIFT: { icon: "🎈", color: "bg-pink-100" },
  PASSIVE_INCOME: { icon: "💤", color: "bg-teal-100" },
  REFUND: { icon: "💸", color: "bg-indigo-100" },
  OTHER: { icon: "❓", color: "bg-gray-100" },
};

export default async function DashboardPage() {
  let [
    totalExpense,
    totalIncome,
    expenseCategory,
    incomeCategory,
    recentExpenses,
    recentIncomes,
  ] = await Promise.all([
    getTotalExpense(),
    getTotalIncome(),
    getExpensesByCategory(),
    getIncomeByCategory(),
    getRecentExpenses(),
    getRecentIncomes(),
  ]);
  if (!totalIncome) {
    totalIncome = 0;
  }
  if (!totalExpense) {
    totalExpense = 0;
  }
  const currentBalance = (totalIncome ?? 0) - (totalExpense ?? 0);

  console.log(incomeCategory);

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-500 uppercase text-sm mb-2">
                  Total Income
                </h2>
                <p className="text-2xl font-bold text-green-600">
                  ${totalIncome.toLocaleString() || "0"}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500 opacity-70" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-500 uppercase text-sm mb-2">
                  Total Expenses
                </h2>
                <p className="text-2xl font-bold text-red-600">
                  ${totalExpense.toLocaleString()}
                </p>
              </div>
              <TrendingDown className="w-8 h-8 text-red-500 opacity-70" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-500 uppercase text-sm mb-2">
                  Current Balance
                </h2>
                <p
                  className={`text-2xl font-bold ${
                    currentBalance >= 0 ? "text-blue-600" : "text-red-600"
                  }`}
                >
                  ${currentBalance.toLocaleString()}
                </p>
              </div>
              <Wallet className="w-8 h-8 text-blue-500 opacity-70" />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 col-span-1 gap-6 my-5">
          <div className={`col-span-1 ring-4 ring-green-600 rounded-lg `}>
            {" "}
            <IncomeBarChart incomeCategory={incomeCategory} />
          </div>
          <div className={`col-span-1 ring-4 ring-red-600 rounded-lg  `}>
            {" "}
            <ExpenseBarChart expenseCategory={expenseCategory} />
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ring ring-green-600">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-green-500" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Incomes
                </h2>
              </div>
              <Link
                href="/incomes"
                className="text-blue-500 hover:underline flex items-center"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {recentIncomes.length === 0 ? (
              <p className="text-gray-500 text-center">No recent incomes</p>
            ) : (
              <div className="space-y-3">
                {recentIncomes.map((income) => (
                  <div
                    key={income.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 ${
                          incomeCategoryIcons[income.category]?.color ||
                          incomeCategoryIcons["OTHER"].color
                        } rounded-full flex items-center justify-center text-xl`}
                      >
                        {incomeCategoryIcons[income.category]?.icon ||
                          incomeCategoryIcons["OTHER"].icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {income.source}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(income.date)}
                        </p>
                      </div>
                    </div>
                    <span className="text-green-600 font-bold">
                      +${income.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Recent Expenses */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ring ring-red-600">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <Receipt className="w-6 h-6 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Recent Expenses
                </h2>
              </div>
              <Link
                href="/expenses"
                className="text-blue-500 hover:underline flex items-center"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {recentExpenses.length === 0 ? (
              <p className="text-gray-500 text-center">No recent expenses</p>
            ) : (
              <div className="space-y-3">
                {recentExpenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 ${
                          expenseCategoryIcons[expense.category]?.color ||
                          expenseCategoryIcons["OTHER"].color
                        } rounded-full flex items-center justify-center text-xl`}
                      >
                        {expenseCategoryIcons[expense.category]?.icon ||
                          expenseCategoryIcons["OTHER"].icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {expense.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(expense.date)}
                        </p>
                      </div>
                    </div>
                    <span className="text-red-600 font-bold">
                      -${expense.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col space-y-4">
      <Link href="#">
          <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors md:flex items-center justify-center hidden w-44">
            <Share className="w-6 h-6 mr-3" />
            <h1>Share Budget</h1>
          </button>
        </Link>
        <Link href="/addIncome">
          <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors md:flex items-center justify-center hidden w-44">
            <TrendingUp className="w-6 h-6 mr-3" />
            <h1>Add Incomes</h1>
          </button>
        </Link>

        <Link href="/addExpense">
          <button className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors md:flex items-center justify-center hidden w-44">
            <PlusCircle className="w-6 h-6 mr-3" />
            <h1>Add Expenses</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}
