import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { 
  Receipt, 
  DollarSign, 
  BarChart, 
  Home, 
  Coins
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-gray-50 block">
        {/* Top Navigation */}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo and App Name */}
            <div className="flex items-center space-x-3">
              <Coins className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Penny Pilot</h1>
            </div>
  
            {/* Navigation Menu */}
            <nav className="flex items-center space-x-6">
              <NavItem 
                href="/dashboard" 
                icon={<Home className="w-5 h-5" />} 
                label="Dashboard" 
              />
              <NavItem 
                href="/expenses" 
                icon={<Receipt className="w-5 h-5" />} 
                label="Expenses" 
              />
              <NavItem 
                href="/incomes" 
                icon={<DollarSign className="w-5 h-5" />} 
                label="Incomes" 
              />
              <NavItem 
                href="/reports" 
                icon={<BarChart className="w-5 h-5" />} 
                label="Reports" 
              />
            </nav>
  
            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10 border-2 border-blue-500",
                  }
                }} 
              />
            </div>
          </div>
        </header>
  
        {/* Main content with adjusted padding */}
        <main className="w-full h-full pt-20">
          {children}
        </main>
      </div>
    );
  }
  

// Helper component for navigation items
function NavItem({ 
  href, 
  icon, 
  label 
}: { 
  href: string, 
  icon: React.ReactNode, 
  label: string 
}) {
  return (
    <Link 
      href={href} 
      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
    >
      <div className="group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </Link>
  );
}