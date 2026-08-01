import React from "react";
import {
  IndianRupee,
  Wallet,
  CreditCard,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const transactions = [
  {
    id: "TXN001",
    type: "Sale",
    amount: "₹12,500",
    payment: "UPI",
    status: "Received",
  },
  {
    id: "TXN002",
    type: "Purchase",
    amount: "₹8,300",
    payment: "Cash",
    status: "Paid",
  },
  {
    id: "TXN003",
    type: "Salary",
    amount: "₹35,000",
    payment: "Bank",
    status: "Paid",
  },
  {
    id: "TXN004",
    type: "Electric Bill",
    amount: "₹4,800",
    payment: "Online",
    status: "Pending",
  },
];

export default function Finance() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Finance
          </h1>
          <p className="text-gray-500">
            Financial Overview of Store
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          + Add Transaction
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <h2 className="text-2xl font-bold mt-2">₹38,75,840</h2>
            </div>
            <IndianRupee className="text-green-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Expenses</p>
              <h2 className="text-2xl font-bold mt-2">₹15,24,300</h2>
            </div>
            <Wallet className="text-red-500" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Profit</p>
              <h2 className="text-2xl font-bold mt-2">₹23,51,540</h2>
            </div>
            <TrendingUp className="text-blue-600" size={34} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500">Pending Payments</p>
              <h2 className="text-2xl font-bold mt-2">₹1,20,000</h2>
            </div>
            <CreditCard className="text-orange-500" size={34} />
          </div>
        </div>

      </div>

      {/* Transaction Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Recent Transactions
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Transaction ID</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Payment</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            {transactions.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 font-semibold">
                  {item.id}
                </td>

                <td className="p-4">
                  {item.type}
                </td>

                <td className="p-4">
                  {item.amount}
                </td>

                <td className="p-4">
                  {item.payment}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Pending"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status === "Pending" ? (
                      <TrendingDown
                        className="inline mr-1"
                        size={14}
                      />
                    ) : (
                      <TrendingUp
                        className="inline mr-1"
                        size={14}
                      />
                    )}

                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}