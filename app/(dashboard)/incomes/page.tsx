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
import EditIncomeButton from "@/components/EditIncomeButton";
import DeleteIncome from "@/components/DeleteIncome";

export default async function IncomesPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.query || "";
  const incomes = await getAllIncomes(query);

  const categoryDetails = {
    SALARY: {
      color: "text-green-600 bg-green-100",
      icon: Briefcase,
      label: "Salary"
    },
    FREELANCE: {
      color: "text-blue-600 bg-blue-100",
      icon: Computer,
      label: "Freelance"
    },
    INVESTMENT: {
      color: "text-yellow-600 bg-yellow-100",
      icon: TrendingDown,
      label: "Investment"
    },
    RENTAL: {
      color: "text-purple-600 bg-purple-100",
      icon: Home,
      label: "Rental"
    },
    SIDE_HUSTLE: {
      color: "text-indigo-600 bg-indigo-100",
      icon: Star,
      label: "Side Hustle"
    },
    BONUS: {
      color: "text-pink-600 bg-pink-100",
      icon: Gift,
      label: "Bonus"
    },
    GIFT: {
      color: "text-red-600 bg-red-100",
      icon: Gift,
      label: "Gift"
    },
    PASSIVE_INCOME: {
      color: "text-emerald-600 bg-emerald-100",
      icon: BanknoteIcon,
      label: "Passive Income"
    },
    REFUND: {
      color: "text-orange-600 bg-orange-100",
      icon: Building,
      label: "Refund"
    },
    OTHER: {
      color: "text-gray-600 bg-gray-100",
      icon: Clipboard,
      label: "Other"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Income Dashboard
            </h1>
          </div>
          <Link 
            href="/addIncome" 
            className="
              flex 
              items-center 
              space-x-2 
              bg-green-600 
              text-white 
              px-4 
              py-2 
              rounded-lg 
              hover:bg-green-700 
              transition-colors 
              duration-300
              shadow-md
              group
            "
          >
            <PlusCircle className="w-5 h-5 group-hover:rotate-180 transition-transform" />
            <span className="text-sm font-medium">Add Income</span>
          </Link>
        </div>

        <Search placeholder="Search incomes by description..." />

        <div className="mt-6">
          {incomes.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <TrendingUp className="mx-auto w-12 h-12 mb-4 text-green-400 opacity-70" />
              <p className="text-gray-500 text-lg">No incomes recorded yet</p>
              <p className="text-gray-400 text-sm mt-2">Start tracking your earnings!</p>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
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
                      py-4 
                      border-b 
                      last:border-b-0 
                      hover:bg-gray-50 
                      transition-colors 
                      duration-200
                      group
                    "
                  >
                    <div className="col-span-3 text-gray-600 flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition" />
                      <span>{income.date.toLocaleDateString()}</span>
                    </div>
                    <div className="col-span-4 flex items-center space-x-3">
                      <CategoryIcon className={`w-6 h-6 ${color} opacity-80`} />
                      <div>
                        <p className="text-gray-800 font-medium">{income.source}</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <p className="font-semibold text-green-700">
                        ${income.amount}
                      </p>
                    </div>
                    <div className="col-span-3 text-right flex items-center justify-end space-x-2">
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
                      <EditIncomeButton income={income}/>
                      <DeleteIncome income={income}/>
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
};