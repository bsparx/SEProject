import { 
  Wallet, 
  TrendingUp, 
  PieChart, 
  CheckCircle, 
  Star, 
  ChevronRight,
  Coins,
  BarChart3,
  Layers
} from "lucide-react";

export default function Home() {
  const LogoIcon = () => (
    <div className="flex items-center justify-center bg-indigo-100 rounded-full p-3">
      <Coins className="h-8 w-8 text-indigo-600" strokeWidth={2} />

    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-indigo-100 font-inter antialiased">
      {/* Animated Header with Blur Effect */}
      <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:space-x-10">
            <div className="flex items-center space-x-4">
              <LogoIcon />
              <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">
                PennyPilot
              </h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a 
                href="#features" 
                className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                Testimonials
              </a>
            </nav>
            <div className="flex space-x-4">
              <a
                href="/sign-in"
                className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                Sign In
              </a>
              <a
                href="/sign-up"
                className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              >
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-16 py-16">
        <div className="space-y-6">
          <div className="bg-indigo-100 rounded-full w-max px-4 py-2 text-indigo-700 text-sm font-medium">
            💡 Financial Management Simplified
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Take Control of Your <span className="text-indigo-600">Financial Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-xl">
            Empower your financial future with intelligent budgeting, seamless expense tracking, and personalized insights that transform how you manage money.
          </p>
          <div className="flex space-x-4">
            <a
              href="/sign-up"
              className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors group"
            >
              Start Your Journey
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute -inset-2 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
          <div className="relative z-10 flex items-center justify-center">
            <Layers className="h-96 w-96 text-indigo-300" strokeWidth={1} />
          </div>
        </div>
      </main>

      {/* Features Section with Enhanced Cards */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Smart Finances
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Smart Budgeting",
                description: "Intelligent budget creation and tracking that adapts to your lifestyle.",
                color: "text-green-500"
              },
              {
                icon: TrendingUp,
                title: "Expense Insights",
                description: "Real-time tracking and categorization of every financial transaction.",
                color: "text-blue-500"
              },
              {
                icon: PieChart,
                title: "Financial Analytics",
                description: "Comprehensive reports and visualizations of your financial health.",
                color: "text-purple-500"
              }
            ].map(({ icon: Icon, title, description, color }, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className={`mb-4 flex items-center justify-center ${color}`}>
                  <Icon className="h-12 w-12" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Hover Effects */}
      <section id="testimonials" className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "PennyPilot transformed my financial management. The insights helped me save 20% more each month!",
                name: "Jane D.",
                rating: 5
              },
              {
                quote: "I love how intuitive and powerful the budget tracking is. It's like having a financial advisor in my pocket.",
                name: "Mark T.",
                rating: 5
              }
            ].map(({ quote, name, rating }, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="italic text-gray-600 mb-4">"{quote}"</p>
                <div className="font-semibold text-indigo-800">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© 2024 PennyPilot. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            {/* Social links would go here */}
          </div>
        </div>
      </footer>
    </div>
  );
}