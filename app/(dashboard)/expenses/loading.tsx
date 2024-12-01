import { Loader2, Wallet, Calendar } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Loading State */}
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100">
          <div className="flex items-center space-x-3">
            <Wallet className="w-5 h-5 text-red-500" />
            <h1 className="text-xl font-semibold text-gray-800">
              Your Expenses
            </h1>
          </div>
          <div className="animate-pulse">
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Search Bar Loading State */}
        <div className="animate-pulse mb-6">
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Expenses Table Loading State */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Table Header */}
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

          {/* Loading Rows */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="grid grid-cols-12 items-center px-4 py-3 border-b last:border-b-0 animate-pulse"
            >
              <div className="col-span-3 flex items-center space-x-2">
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-4 flex items-center space-x-3">
                <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="col-span-2 text-right">
                <div className="h-4 w-16 bg-gray-200 rounded ml-auto"></div>
              </div>
              <div className="col-span-3 text-right">
                <div className="h-4 w-20 bg-gray-200 rounded ml-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Loading Indicator */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading Expenses...</span>
        </div>
      </div>
    </div>
  );
}