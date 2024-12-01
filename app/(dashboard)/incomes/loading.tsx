import { TrendingUp, PlusCircle, Calendar, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-100">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h1 className="text-xl font-semibold text-gray-800">
              Your Incomes
            </h1>
          </div>
          <div
            className="
              flex 
              items-center 
              space-x-2 
              text-green-600 
              opacity-50 
              cursor-not-allowed
            "
          >
            <PlusCircle className="w-4 h-4" />
            <span className="text-sm">Add Income</span>
          </div>
        </div>

        {/* Search Skeleton */}
        <div className="animate-pulse mb-6">
          <div className="h-10 bg-gray-200 rounded-md"></div>
        </div>

        {/* Income List Skeleton */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 border-b px-4 py-3">
            <div className="col-span-3 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Date
            </div>
            <div className="col-span-4 text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Source
            </div>
            <div className="col-span-2 text-xs uppercase tracking-wider text-gray-500 font-semibold text-right">
              Amount
            </div>
            <div className="col-span-3 text-xs uppercase tracking-wider text-gray-500 font-semibold text-right">
              Category
            </div>
          </div>

          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="
                grid 
                grid-cols-12 
                items-center 
                px-4 
                py-3 
                border-b 
                last:border-b-0 
                animate-pulse
              "
            >
              <div className="col-span-3 flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="col-span-4 flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="col-span-2 text-right">
                <div className="h-4 bg-gray-200 rounded w-3/4 ml-auto"></div>
              </div>
              <div className="col-span-3 text-right">
                <div className="h-4 bg-gray-200 rounded w-1/2 ml-auto inline-block"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading Incomes...</span>
        </div>
      </div>
    </div>
  );
}
