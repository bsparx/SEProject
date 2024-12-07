import Search from "@/components/Search";
import Link from "next/link";
import { getAllExpenses } from "@/utils/getter";
import {
  Wallet,
  TrendingUp,
  Calendar,
  PlusCircle,
  Utensils,
  Car,
  Zap,
  Film,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Home,
  PiggyBank,
  Clipboard,
} from "lucide-react";
import Modal from "@/components/EditExpenseButton";
import EditExpenseButton from "@/components/EditExpenseButton";
import DeleteExpense from "@/components/DeleteExpense";

export default async function ExpensesPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || "";
  const expenses = await getAllExpenses(query);

  const categoryDetails = {
    FOOD: {
      color: "text-brown-500 bg-brown-50",
      icon: Utensils,
      label: "Food",
    },
    TRANSPORTATION: {
      color: "text-blue-500 bg-blue-50",
      icon: Car,
      label: "Transportation",
    },
    UTILITIES: {
      color: "text-yellow-500 bg-yellow-50",
      icon: Zap,
      label: "Utilities",
    },
    ENTERTAINMENT: {
      color: "text-purple-500 bg-purple-50",
      icon: Film,
      label: "Entertainment",
    },
    HEALTHCARE: {
      color: "text-red-500 bg-red-50",
      icon: HeartPulse,
      label: "Healthcare",
    },
    EDUCATION: {
      color: "text-indigo-500 bg-indigo-50",
      icon: GraduationCap,
      label: "Education",
    },
    SHOPPING: {
      color: "text-pink-500 bg-pink-50",
      icon: ShoppingBag,
      label: "Shopping",
    },
    HOUSING: {
      color: "text-orange-500 bg-orange-50",
      icon: Home,
      label: "Housing",
    },
    SAVINGS: {
      color: "text-emerald-500 bg-emerald-50",
      icon: PiggyBank,
      label: "Savings",
    },
    OTHER: {
      color: "text-gray-500 bg-gray-50",
      icon: Clipboard,
      label: "Other",
    },
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100">
          <div className="flex items-center space-x-3">
            <Wallet className="w-5 h-5 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-800">
              Your Expenses
            </h1>
          </div>
          <Link
            href="/addExpense"
            className="
              flex 
              items-center 
              space-x-2 
              bg-red-600 
              text-white 
              px-4 
              py-2 
              rounded-lg 
              hover:bg-red-700 
              transition-colors 
              duration-300
              shadow-md
              group
            "
          >
            <PlusCircle className="w-5 h-5 group-hover:rotate-180 transition-transform" />
            <span className="text-sm font-medium">Add Expense</span>
          </Link>
        </div>

        <Search placeholder={"Search Expenses by description..."}/>

        <div className="mt-6">
          {expenses.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <TrendingUp className="mx-auto w-10 h-10 mb-3 text-red-400" />
              <p>No expenses found</p>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-12 bg-gray-50 border-b px-4 py-3">
                <div className="col-span-3 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Date
                </div>
                <div className="col-span-4 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Description
                </div>
                <div className="col-span-2 text-xs uppercase tracking-wider text-gray-500 font-semibold text-right">
                  Amount
                </div>
                <div className="col-span-3 text-xs uppercase tracking-wider text-gray-500 font-semibold text-right">
                  Category
                </div>
              </div>

              {expenses.map((e) => {
                const {
                  color,
                  icon: CategoryIcon,
                  label,
                } = categoryDetails[e.category] || categoryDetails["OTHER"];

                return (
                  <div
                    key={e.id}
                    className="
                      grid 
                      grid-cols-12 
                      items-center 
                      px-4 
                      py-3 
                      border-b 
                      last:border-b-0 
                      hover:bg-gray-50 
                      transition-colors 
                      duration-200
                    "
                  >
                    <div className="col-span-3 text-gray-600 flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{e.date.toLocaleDateString()}</span>
                    </div>
                    <div className="col-span-4 flex items-center space-x-3">
                      <CategoryIcon className={`w-5 h-5 ${color} opacity-70`} />
                      <div>
                        <p className="text-gray-800 font-medium">
                          {e.description}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <p className="font-semibold text-gray-800">${e.amount}</p>
                    </div>
                    <div className="col-span-3 text-right">
                      <span
                        className={`
                        inline-block 
                        px-2 
                        py-1 
                        text-xs 
                        rounded-full 
                        ${color}
                        bg-opacity-20 
                        text-opacity-90
                      `}
                      >
                        {label}
                      </span>
                      <EditExpenseButton expense={e} />
                      <DeleteExpense expense={e} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
