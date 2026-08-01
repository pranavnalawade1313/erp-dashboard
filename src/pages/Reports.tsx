import React from "react";
import {
  FileBarChart,
  TrendingUp,
  ShoppingCart,
  Users,
  IndianRupee,
  Download,
} from "lucide-react";

const reports = [
  {
    name: "Daily Sales Report",
    date: "14 July 2026",
    status: "Generated",
  },
  {
    name: "Monthly Revenue Report",
    date: "July 2026",
    status: "Generated",
  },
  {
    name: "Inventory Report",
    date: "14 July 2026",
    status: "Generated",
  },
  {
    name: "Customer Report",
    date: "14 July 2026",
    status: "Pending",
  },
];

export default function Reports() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Reports
          </h1>
          <p className="text-gray-500">
            Business Analytics & Reports
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex gap-2 items-center">
          <Download size={18} />
          Export Report
        </button>
      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow p-5">
          <TrendingUp className="text-green-600 mb-3" size={35}/>
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-2xl font-bold">₹38,75,840</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <ShoppingCart className="text-blue-600 mb-3" size={35}/>
          <p className="text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold">1,248</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <Users className="text-purple-600 mb-3" size={35}/>
          <p className="text-gray-500">Customers</p>
          <h2 className="text-2xl font-bold">5,842</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <IndianRupee className="text-orange-600 mb-3" size={35}/>
          <p className="text-gray-500">Profit</p>
          <h2 className="text-2xl font-bold">₹6,45,210</h2>
        </div>

      </div>

      {/* Reports Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="p-5 border-b flex items-center gap-2">
          <FileBarChart className="text-blue-600"/>
          <h2 className="text-xl font-bold">
            Generated Reports
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Report Name</th>
              <th className="p-4 text-left">Generated On</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>

            {reports.map((report, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold">
                  {report.name}
                </td>

                <td className="p-4">
                  {report.date}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      report.status === "Generated"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {report.status}
                  </span>

                </td>

                <td className="p-4">

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Download size={16}/>
                    Download
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}