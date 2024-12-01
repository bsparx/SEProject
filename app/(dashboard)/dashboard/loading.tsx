import { Loader2 } from "lucide-react";
import { Coins } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center items-center mb-6">
          <Coins className="w-16 h-16 text-blue-600 animate-pulse" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Penny Pilot
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
          <p className="text-gray-600">
            Loading your financial insights...
          </p>
        </div>
        <div className="mt-8 max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}