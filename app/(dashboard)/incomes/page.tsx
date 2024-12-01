import Search from "@/components/Search";
import Link from "next/link";
import { getAllIncomes } from "@/utils/getter";
import { 
  Wallet, 
  TrendingUp, 
  Calendar, 
  PlusCircle,
  Briefcase,     
  Computer,         
  TrendingDown,          
  Film,        
  Building,   
  Star,
  Gift, 
  Home,        
  BanknoteIcon,       
  Clipboard    
} from "lucide-react";

export default async function IncomesPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || "";
  const incomes = await getAllIncomes(query);

  const categoryDetails = {
    SALARY: {
      color: "text-green-500 bg-green-50",
      icon: Briefcase,
      label: "Salary"
    },
    FREELANCE: {
      color: "text-blue-500 bg-blue-50",
      icon: Computer,
      label: "Freelance"
    },
    INVESTMENT: {
      color: "text-yellow-500 bg-yellow-50",
      icon: TrendingDown,
      label: "Investment"
    },
    RENTAL: {
      color: "text-purple-500 bg-purple-50",
      icon: Home,
      label: "Rental"
    },
    SIDE_HUSTLE: {
      color: "text-indigo-500 bg-indigo-50",
      icon: Star,
      label: "Side Hustle"
    },
    BONUS: {
      color: "text-pink-500 bg-pink-50",
      icon: Gift,
      label: "Bonus"
    },
    GIFT: {
      color: "text-red-500 bg-red-50",
      icon: Gift,
      label: "Gift"
    },
    PASSIVE_INCOME: {
      color: "text-emerald-500 bg-emerald-50",
      icon: BanknoteIcon,
      label: "Passive Income"
    },
    REFUND: {
      color: "text-orange-500 bg-orange-50",
      icon: Building,
      label: "Refund"
    },
    OTHER: {
      color: "text-gray-500 bg-gray-50",
      icon: Clipboard,
      label: "Other"
    }
  };

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
          <Link 
            href="/addIncome" 
            className="
              flex 
              items-center 
              space-x-2 
              text-green-600 
              hover:text-green-700 
              transition-colors 
              duration-200
            "
          >
            <PlusCircle className="w-4 h-4" />
            <span className="text-sm">Add Income</span>
          </Link>
        </div>

        <Search placeholder="Search incomes..." />

        <div className="mt-6">
          {incomes.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <TrendingUp className="mx-auto w-10 h-10 mb-3 text-green-400" />
              <p>No incomes found</p>
            </div>
          ) : (
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

              {incomes.map((income) => {
                const { color, icon: CategoryIcon, label } = 
                  categoryDetails[income.category] || categoryDetails["OTHER"];

                return (
                  <div
                    key={income.id}
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
                      <span>{income.date.toLocaleDateString()}</span>
                    </div>
                    <div className="col-span-4 flex items-center space-x-3">
                      <CategoryIcon className={`w-5 h-5 ${color} opacity-70`} />
                      <div>
                        <p className="text-gray-800 font-medium">{income.source}</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <p className="font-semibold text-green-700">
                        ${income.amount}
                      </p>
                    </div>
                    <div className="col-span-3 text-right">
                      <span className={`
                        inline-block 
                        px-2 
                        py-1 
                        text-xs 
                        rounded-full 
                        ${color}
                        bg-opacity-20 
                        text-opacity-90
                      `}>
                        {label}
                      </span>
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