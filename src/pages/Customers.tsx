import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const customerGrowth = [
  { month: "Jan", customers: 120 },
  { month: "Feb", customers: 180 },
  { month: "Mar", customers: 240 },
  { month: "Apr", customers: 300 },
  { month: "May", customers: 380 },
  { month: "Jun", customers: 450 },
  { month: "Jul", customers: 520 },
];

const customers = [
  {
    id: "C001",
    name: "Rahul Sharma",
    phone: "9876543210",
    city: "Pune",
    visits: 25,
    status: "Active",
  },
  {
    id: "C002",
    name: "Sneha Patil",
    phone: "9988776655",
    city: "Mumbai",
    visits: 18,
    status: "Active",
  },
  {
    id: "C003",
    name: "Amit Joshi",
    phone: "9123456789",
    city: "Nashik",
    visits: 10,
    status: "Inactive",
  },
  {
    id: "C004",
    name: "Priya Deshmukh",
    phone: "9871234567",
    city: "Satara",
    visits: 32,
    status: "Active",
  },
];

export default function Customers() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold">Customers</h1>
          <p className="text-gray-500">
            Manage your customer records
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Customer
        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Total Customers</p>
          <h2 className="text-3xl font-bold mt-2">5,842</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">New This Month</p>
          <h2 className="text-3xl font-bold mt-2">148</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Active Members</p>
          <h2 className="text-3xl font-bold mt-2">4,950</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">VIP Customers</p>
          <h2 className="text-3xl font-bold mt-2">126</h2>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <input
          type="text"
          placeholder="Search customer..."
          className="border rounded-lg px-4 py-2 w-full"
        />

      </div>

      {/* Chart */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-xl font-bold mb-5">
          Customer Growth
        </h2>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={customerGrowth}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Area
                dataKey="customers"
                stroke="#2563eb"
                fill="#93c5fd"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-xl font-bold mb-5">
          Customer List
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3">ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Visits</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer.id}
                className="border-b text-center"
              >

                <td className="p-3">{customer.id}</td>

                <td>{customer.name}</td>

                <td>{customer.phone}</td>

                <td>{customer.city}</td>

                <td>{customer.visits}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      customer.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {customer.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Top Customers
          </h2>

          <ul className="space-y-4">

            <li className="flex justify-between">
              <span>Rahul Sharma</span>
              <strong>₹82,450</strong>
            </li>

            <li className="flex justify-between">
              <span>Priya Deshmukh</span>
              <strong>₹74,250</strong>
            </li>

            <li className="flex justify-between">
              <span>Sneha Patil</span>
              <strong>₹61,100</strong>
            </li>

            <li className="flex justify-between">
              <span>Amit Joshi</span>
              <strong>₹52,900</strong>
            </li>

          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Membership Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Gold Members</span>
              <strong>320</strong>
            </div>

            <div className="flex justify-between">
              <span>Silver Members</span>
              <strong>740</strong>
            </div>

            <div className="flex justify-between">
              <span>Bronze Members</span>
              <strong>1,240</strong>
            </div>

            <div className="flex justify-between">
              <span>Regular Customers</span>
              <strong>3,542</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}