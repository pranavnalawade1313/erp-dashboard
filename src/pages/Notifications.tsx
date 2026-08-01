import React from "react";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "Order #ORD1025 has been placed successfully.",
    time: "5 mins ago",
    type: "success",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Low Stock Alert",
    message: "Aashirvaad Atta 5kg has only 8 items left.",
    time: "20 mins ago",
    type: "warning",
    icon: Package,
  },
  {
    id: 3,
    title: "New Customer Registered",
    message: "Rahul Sharma created a new account.",
    time: "1 hour ago",
    type: "info",
    icon: Users,
  },
  {
    id: 4,
    title: "Payment Received",
    message: "₹12,500 received via UPI.",
    time: "2 hours ago",
    type: "success",
    icon: CheckCircle,
  },
  {
    id: 5,
    title: "Supplier Delivery Delayed",
    message: "Milk products delivery delayed by 2 hours.",
    time: "Today",
    type: "warning",
    icon: AlertTriangle,
  },
];

export default function Notifications() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Notifications
          </h1>
          <p className="text-gray-500">
            Latest Store Updates & Alerts
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Mark All Read
        </button>
      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-5">
          <Bell className="text-blue-600 mb-3" size={35}/>
          <p className="text-gray-500">Total Notifications</p>
          <h2 className="text-3xl font-bold">25</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <CheckCircle className="text-green-600 mb-3" size={35}/>
          <p className="text-gray-500">Read</p>
          <h2 className="text-3xl font-bold">18</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <Bell className="text-orange-500 mb-3" size={35}/>
          <p className="text-gray-500">Unread</p>
          <h2 className="text-3xl font-bold">7</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <AlertTriangle className="text-red-500 mb-3" size={35}/>
          <p className="text-gray-500">Alerts</p>
          <h2 className="text-3xl font-bold">4</h2>
        </div>

      </div>

      {/* Notification List */}

      <div className="bg-white rounded-xl shadow">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Recent Notifications
          </h2>
        </div>

        <div>

          {notifications.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.id}
                className="flex items-center justify-between p-5 border-b hover:bg-gray-50"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center
                    ${
                      item.type === "success"
                        ? "bg-green-100 text-green-600"
                        : item.type === "warning"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {item.message}
                    </p>
                  </div>

                </div>

                <span className="text-sm text-gray-400">
                  {item.time}
                </span>

              </div>

            );

          })}

        </div>

      </div>

    </div>
  );
}