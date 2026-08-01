import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const supplierPerformance = [
  { name: "ABC Traders", value: 35, color: "#2563eb" },
  { name: "Fresh Foods", value: 25, color: "#10b981" },
  { name: "Sun Oil Ltd", value: 20, color: "#f59e0b" },
  { name: "Daily Needs", value: 20, color: "#ef4444" },
];

const suppliers = [
  {
    id: "SUP001",
    name: "ABC Traders",
    city: "Pune",
    phone: "9876543210",
    orders: 145,
    status: "Active",
  },
  {
    id: "SUP002",
    name: "Fresh Foods",
    city: "Mumbai",
    phone: "9871234567",
    orders: 98,
    status: "Active",
  },
  {
    id: "SUP003",
    name: "Sun Oil Ltd",
    city: "Nashik",
    phone: "9123456789",
    orders: 86,
    status: "Pending",
  },
  {
    id: "SUP004",
    name: "Daily Needs",
    city: "Satara",
    phone: "9988776655",
    orders: 120,
    status: "Active",
  },
];

export default function Suppliers() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">Suppliers</h1>
          <p className="text-gray-500">
            Manage supplier information
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Supplier
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Total Suppliers</p>
          <h2 className="text-3xl font-bold mt-2">42</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Active Suppliers</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">36</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Pending Deliveries</p>
          <h2 className="text-3xl font-bold mt-2 text-orange-500">8</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">449</h2>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <input
          type="text"
          placeholder="Search supplier..."
          className="w-full border rounded-lg px-4 py-2"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-xl font-bold mb-5">
          Supplier List
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3">Supplier ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Phone</th>
              <th>Orders</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {suppliers.map((supplier) => (

              <tr
                key={supplier.id}
                className="border-b text-center"
              >

                <td className="p-3">{supplier.id}</td>

                <td>{supplier.name}</td>

                <td>{supplier.city}</td>

                <td>{supplier.phone}</td>

                <td>{supplier.orders}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      supplier.status === "Active"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {supplier.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Performance Chart */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-5">
            Supplier Performance
          </h2>

          <div className="h-72">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={supplierPerformance}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={90}
                >

                  {supplierPerformance.map((item, index) => (

                    <Cell
                      key={index}
                      fill={item.color}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Summary */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-5">
            Supplier Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>Best Supplier</span>
              <strong>ABC Traders</strong>
            </div>

            <div className="flex justify-between">
              <span>Average Delivery</span>
              <strong>3 Days</strong>
            </div>

            <div className="flex justify-between">
              <span>Pending Payments</span>
              <strong>₹2,45,000</strong>
            </div>

            <div className="flex justify-between">
              <span>Delivery Success</span>
              <strong>95%</strong>
            </div>

            <div className="flex justify-between">
              <span>Total Purchase Value</span>
              <strong>₹18,75,000</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}