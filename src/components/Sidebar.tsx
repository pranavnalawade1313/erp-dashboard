import { Link } from "react-router-dom";
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
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "POS Billing", icon: ShoppingCart, path: "/pos" },
  { name: "Inventory", icon: Package, path: "/inventory" },
  { name: "Sales", icon: TrendingUp, path: "/sales" },
  { name: "Purchase", icon: ShoppingBag, path: "/purchase" },
  { name: "Customers", icon: Users, path: "/customers" },
  { name: "Suppliers", icon: Truck, path: "/suppliers" },
  { name: "Employees", icon: UserCircle, path: "/employees" },
  { name: "Finance", icon: FileText, path: "/finance" },
  { name: "Reports", icon: BarChart2, path: "/reports" },
  { name: "Offers", icon: Tag, path: "/offers" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          <span className="text-orange-500">BIG</span> BAZAAR
        </h1>
        <p className="text-sm text-gray-400">Grocery Shop ERP</p>
      </div>

      <nav className="mt-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}