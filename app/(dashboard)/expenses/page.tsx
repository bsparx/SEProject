import Search from "@/components/Search";
import Link from "next/link";
import { getAllExpenses } from "@/utils/getter";
import { 
  Wallet, 
  TrendingUp, 
  Calendar, 
  Tag, 
  PlusCircle
} from "lucide-react";

export default async function ExpensesPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || "";
  const expenses = await getAllExpenses(query);

  const categoryColors = {
    Food: "text-red-500",
    Transport: "text-blue-500",
    Entertainment: "text-purple-500",
    Utilities: "text-green-500",
    Shopping: "text-pink-500",
    Default: "text-gray-500"
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100">
          <div className="flex items-center space-x-3">
            <Wallet className="w-5 h-5 text-red-500" />
            <h1 className="text-xl font-semibold text-gray-800">
              Expense Tracker
            </h1>
          </div>
          <Link 
            href="/addExpense" 
            className="
              flex 
              items-center 
              space-x-2 
              text-red-600 
              hover:text-red-700 
              transition-colors 
              duration-200
            "
          >
            <PlusCircle className="w-4 h-4" />
            <span className="text-sm">Add Expense</span>
          </Link>
        </div>

        <Search />

        <div className="mt-6 space-y-4">
          {expenses.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <TrendingUp className="mx-auto w-10 h-10 mb-3 text-red-400" />
              <p>No expenses found</p>
            </div>
          ) : (
            expenses.map((e) => {
              const categoryColor = categoryColors[e.category] || categoryColors["Default"];

              return (
                <div
                  key={e.id}
                  className="
                    flex 
                    justify-between 
                    items-center 
                    py-3 
                    border-b 
                    border-gray-100 
                    last:border-b-0
                    hover:bg-red-50
                 
                    rounded-full 
                    px-4
                    transition-colors 
                    duration-200
                  "
                >
                  <div className="flex items-center space-x-4">
                    <Tag className={`w-4 h-4 ${categoryColor} opacity-70`} />
                    <div>
                      <p className="text-gray-800 font-medium">{e.description}</p>
                      <p className="text-sm text-gray-500">{e.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600 text-sm">
                      {e.date.toLocaleDateString()}
                    </span>
                    <p className="font-semibold text-red-600">
                      ${e.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}