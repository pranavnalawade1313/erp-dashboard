import { Link } from "react-router-dom";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import {
  Home,
  ShoppingCart,
  Package,
  TrendingUp,
  ShoppingBag,
  Users,
  Truck,
  UserCircle,
  FileText,
  BarChart2,
  Tag,
  Bell,
  Settings,
  Calendar,
  ChevronDown,
  AlertCircle,
} from "lucide-react";

// --- MOCK DATA ---
const salesData = [
  { day: 'Mon', sales: 40000 }, { day: 'Tue', sales: 60000 }, { day: 'Wed', sales: 112450 },
  { day: 'Thu', sales: 70000 }, { day: 'Fri', sales: 130000 }, { day: 'Sat', sales: 180000 },
  { day: 'Sun', sales: 90000 }
];

const profitData = [
  { month: 'Jan', profit: 200000 }, { month: 'Feb', profit: 300000 }, { month: 'Mar', profit: 400000 },
  { month: 'Apr', profit: 500000 }, { month: 'May', profit: 600000 }, { month: 'Jun', profit: 700000 },
  { month: 'Jul', profit: 900000 }
];

const categoryData = [
  { name: 'Grocery', value: 45, color: '#3b82f6' },
  { name: 'Beverages', value: 20, color: '#f59e0b' },
  { name: 'Home Care', value: 15, color: '#10b981' },
  { name: 'Personal Care', value: 10, color: '#8b5cf6' },
  { name: 'Others', value: 10, color: '#6b7280' }
];

const paymentData = [
  { name: 'Cash', value: 40, color: '#10b981' },
  { name: 'UPI', value: 30, color: '#3b82f6' },
  { name: 'Card', value: 20, color: '#8b5cf6' },
  { name: 'Wallet', value: 10, color: '#f59e0b' }
];

// --- INTERNAL COMPONENTS ---
const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) => (
  <div
    className={`flex items-center gap-3 px-6 py-3 transition-colors ${
      active
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`}
  >
    <Icon size={20} />
    <span className="font-medium text-sm">{label}</span>
  </div>
);

const StatCard = ({ title, value, icon: Icon, trend, trendUp, bgColor }: any) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">₹ {value}</h3>
      </div>
      <div className={`p-3 rounded-full ${bgColor} text-white`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <span className={`font-semibold ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
        {trendUp ? '↑' : '↓'} {trend}
      </span>
      <span className="text-gray-400 ml-2">vs Last Month</span>
    </div>
  </div>
);

// --- MAIN DASHBOARD COMPONENT ---
export default function ERPDashboard() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50 font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1e293b] flex flex-col justify-between hidden md:flex h-full">
        <div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
              <span className="text-orange-500">BIG</span> BAZAAR
            </h1>
            <p className="text-xs text-slate-400 mt-1">Grocery Shop ERP</p>
          </div>
          <nav className="mt-2 flex flex-col gap-1">

  <Link to="/" className="no-underline">
    <SidebarItem icon={Home} label="Dashboard" active />
  </Link>

  <Link to="/pos" className="no-underline">
    <SidebarItem icon={ShoppingCart} label="POS Billing" />
  </Link>

  <Link to="/inventory" className="no-underline">
    <SidebarItem icon={Package} label="Inventory" />
  </Link>

  <Link to="/sales" className="no-underline">
    <SidebarItem icon={TrendingUp} label="Sales" />
  </Link>

  <Link to="/purchase" className="no-underline">
    <SidebarItem icon={ShoppingBag} label="Purchase" />
  </Link>

  <Link to="/customers" className="no-underline">
    <SidebarItem icon={Users} label="Customers" />
  </Link>

  <Link to="/suppliers" className="no-underline">
    <SidebarItem icon={Truck} label="Suppliers" />
  </Link>

  <Link to="/employees" className="no-underline">
    <SidebarItem icon={UserCircle} label="Employees" />
  </Link>

  <Link to="/finance" className="no-underline">
    <SidebarItem icon={FileText} label="Finance" />
  </Link>

  <Link to="/reports" className="no-underline">
    <SidebarItem icon={BarChart2} label="Reports" />
  </Link>

  <Link to="/offers" className="no-underline">
    <SidebarItem icon={Tag} label="Offers & Discounts" />
  </Link>

  <Link to="/notifications" className="no-underline">
    <SidebarItem icon={Bell} label="Notifications" />
  </Link>

  <Link to="/settings" className="no-underline">
    <SidebarItem icon={Settings} label="Settings" />
  </Link>

</nav>
        </div>
        <div className="p-6 bg-slate-800/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <p className="text-sm font-semibold text-white">Admin User</p>
            <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Online</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        
        {/* HEADER */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-500">Overview of your store</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
              <Calendar size={16} /> 14 July 2026
            </div>
            <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 font-medium cursor-pointer">
              Main Branch <ChevronDown size={16} />
            </div>
            <div className="relative cursor-pointer">
              <Bell size={24} className="text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center font-bold">5</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-blue-200"></div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="p-8 space-y-6">
          
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <StatCard title="Sales Today" value="1,24,560" icon={ShoppingCart} trend="18.6%" trendUp bgColor="bg-green-500" />
            <StatCard title="Total Revenue" value="38,75,840" icon={FileText} trend="21.4%" trendUp bgColor="bg-blue-500" />
            <StatCard title="Total Orders" value="1,248" icon={ShoppingBag} trend="14.7%" trendUp bgColor="bg-purple-500" />
            <StatCard title="Total Customers" value="5,842" icon={Users} trend="16.3%" trendUp bgColor="bg-orange-500" />
            <StatCard title="Profit (This Month)" value="6,45,210" icon={TrendingUp} trend="22.8%" trendUp bgColor="bg-emerald-500" />
          </div>

          {/* Middle Row: Charts & Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Sales Overview Chart */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm lg:col-span-1 xl:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Sales Overview</h3>
                <select className="text-sm border-gray-200 rounded-md bg-gray-50 px-2 py-1"><option>This Week</option></select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} tickFormatter={(val) => `₹ ${val/1000}K`} />
                    <RechartsTooltip />
                    <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Selling & Low Stock */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">Top Selling Products</h3>
                  <a href="#" className="text-blue-500 text-sm font-medium">View All</a>
                </div>
                <div className="space-y-4">
                  {/* Sample rows for top products */}
                  {[
                    {name: "Aashirvaad Atta 5kg", cat: "Grocery", sold: 532, rev: "31,920"},
                    {name: "Fortune Sunflower Oil 1L", cat: "Grocery", sold: 452, rev: "29,380"},
                  ].map((prod, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <div>
                        <p className="font-semibold text-gray-800">{prod.name}</p>
                        <p className="text-gray-400 text-xs">{prod.cat}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-800">₹ {prod.rev}</p>
                        <p className="text-gray-400 text-xs">{prod.sold} Sold</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                 <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">Low Stock Alert</h3>
                  <a href="#" className="text-blue-500 text-sm font-medium">View All</a>
                </div>
                <div className="space-y-3">
                   {[
                    {name: "Aashirvaad Atta 5kg", stock: 8},
                    {name: "Surf Excel Easy Wash", stock: 7},
                  ].map((prod, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500"><AlertCircle size={18}/></div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{prod.name}</p>
                        <p className="text-red-500 text-xs font-medium">Stock: {prod.stock} pcs</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Pies, Bars, and Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* Sales by Category */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Sales by Category</h3>
              <div className="h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={categoryData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xs text-gray-500">Total</span>
                  <span className="font-bold text-gray-800">₹ 38.7M</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Payment Methods</h3>
              <div className="h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={paymentData} innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                      {paymentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xs text-gray-500">Total</span>
                  <span className="font-bold text-gray-800">₹ 38.7M</span>
                </div>
              </div>
            </div>

            {/* Monthly Profit Overview */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm xl:col-span-2">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-gray-800">Monthly Profit Overview</h3>
                  <select className="text-sm border-gray-200 rounded-md bg-gray-50 px-2 py-1"><option>This Year</option></select>
                </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={profitData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} tickFormatter={(val) => `₹ ${val/100000}L`} />
                    <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}