import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {
  Receipt,
  DollarSign,
  BarChart,
  Home,
  Coins,
  Moon,
  Sun,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isDarkMode = true;
  
  return (
    <div className="min-h-screen bg-gray-50 block">
  
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
  
          <div className="flex items-center space-x-3">
            <Coins className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Penny Pilot</h1>
            {/* <button
              className={`
           w-14 h-7 
           flex items-center 
           rounded-full 
           p-1 
           transition-all 
           duration-300 
           ${
             isDarkMode
               ? "bg-blue-600 justify-end"
               : "bg-gray-300 justify-start"
           }
         `}
            >
              <div
                className={`
             w-5 h-5 
             rounded-full 
             bg-white 
             shadow-md 
             transform 
             transition-transform 
             duration-300
           `}
              >
                {isDarkMode ? (
                  <Moon className="w-full h-full p-1 text-blue-600" />
                ) : (
                  <Sun className="w-full h-full p-1 text-yellow-500" />
                )}
              </div>
            </button> */}
          </div>

     
          <nav className="flex items-center space-x-6">
            <NavItem
              href="/dashboard"
              icon={<Home className="w-5 h-5" />}
              label="Dashboard"
            />

            <NavItem
              href="/incomes"
              icon={<DollarSign className="w-5 h-5" />}
              label="Incomes"
            />
            <NavItem
              href="/expenses"
              icon={<Receipt className="w-5 h-5" />}
              label="Expenses"
            />
            <NavItem 
                href="/preferences" 
                icon={<BarChart className="w-5 h-5" />} 
                label="Preferences" 
              />
          </nav>

      
          <div className="flex items-center space-x-4">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10 border-2 border-blue-500",
                },
              }}
            />
          </div>
        </div>
      </header>

      <main className="w-full h-full pt-20">{children}</main>
    </div>
  );
}


function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
    >
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
