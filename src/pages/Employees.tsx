import React from "react";
import { UserCircle, Mail, Phone, BadgeCheck } from "lucide-react";

const employees = [
  {
    id: "EMP001",
    name: "Rahul Sharma",
    department: "Sales",
    email: "rahul@bigbazaar.com",
    phone: "9876543210",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya Patel",
    department: "Inventory",
    email: "priya@bigbazaar.com",
    phone: "9876501234",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Amit Singh",
    department: "Finance",
    email: "amit@bigbazaar.com",
    phone: "9988776655",
    status: "Inactive",
  },
  {
    id: "EMP004",
    name: "Sneha Joshi",
    department: "Customer Service",
    email: "sneha@bigbazaar.com",
    phone: "9123456789",
    status: "Active",
  },
];

export default function Employees() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Employees
          </h1>
          <p className="text-gray-500">
            Manage Employee Details
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          + Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Employee</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <UserCircle className="text-blue-600" />
                    </div>

                    <div>
                      <p className="font-semibold">
                        {emp.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {emp.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  {emp.department}
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    {emp.email}
                  </div>
                </td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    {emp.phone}
                  </div>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      emp.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <BadgeCheck
                      className="inline mr-1"
                      size={14}
                    />
                    {emp.status}
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