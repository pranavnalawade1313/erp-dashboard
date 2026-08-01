import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { day: "Mon", sales: 12000 },
  { day: "Tue", sales: 18000 },
  { day: "Wed", sales: 22000 },
  { day: "Thu", sales: 16000 },
  { day: "Fri", sales: 28000 },
  { day: "Sat", sales: 35000 },
  { day: "Sun", sales: 25000 },
];

const recentSales = [
  {
    bill: "1001",
    customer: "Rahul",
    product: "Rice 5kg",
    amount: "₹450",
    payment: "UPI",
    status: "Paid",
  },
  {
    bill: "1002",
    customer: "Sneha",
    product: "Oil 1L",
    amount: "₹180",
    payment: "Cash",
    status: "Paid",
  },
  {
    bill: "1003",
    customer: "Amit",
    product: "Sugar",
    amount: "₹55",
    payment: "Card",
    status: "Paid",
  },
  {
    bill: "1004",
    customer: "Priya",
    product: "Milk",
    amount: "₹90",
    payment: "UPI",
    status: "Paid",
  },
];

export default function Sales() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Sales Dashboard</h1>
          <p className="text-gray-500">Manage your sales</p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Export Report
        </button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Today's Sales</h3>
          <h2 className="text-3xl font-bold mt-2">₹45,250</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Monthly Sales</h3>
          <h2 className="text-3xl font-bold mt-2">₹8,45,320</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Orders</h3>
          <h2 className="text-3xl font-bold mt-2">245</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-gray-500">Profit</h3>
          <h2 className="text-3xl font-bold mt-2">₹1,25,450</h2>
        </div>

      </div>

      {/* Chart */}

      <div className="bg-white mt-8 rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-5">
          Weekly Sales
        </h2>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={salesData}>

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="sales"
                fill="#2563eb"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Table */}

      <div className="bg-white mt-8 rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-5">
          Recent Sales
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3">Bill No</th>

              <th>Customer</th>

              <th>Product</th>

              <th>Amount</th>

              <th>Payment</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {recentSales.map((sale) => (

              <tr
                key={sale.bill}
                className="border-b text-center"
              >

                <td className="p-3">{sale.bill}</td>

                <td>{sale.customer}</td>

                <td>{sale.product}</td>

                <td>{sale.amount}</td>

                <td>{sale.payment}</td>

                <td>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                    {sale.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Top Selling Products
          </h2>

          <ul className="space-y-4">

            <li className="flex justify-between">
              <span>Rice 5kg</span>
              <span>250 Sold</span>
            </li>

            <li className="flex justify-between">
              <span>Oil 1L</span>
              <span>220 Sold</span>
            </li>

            <li className="flex justify-between">
              <span>Sugar</span>
              <span>180 Sold</span>
            </li>

            <li className="flex justify-between">
              <span>Milk</span>
              <span>160 Sold</span>
            </li>

          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Sales Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Highest Sale</span>
              <strong>₹12,500</strong>
            </div>

            <div className="flex justify-between">
              <span>Average Sale</span>
              <strong>₹850</strong>
            </div>

            <div className="flex justify-between">
              <span>Lowest Sale</span>
              <strong>₹55</strong>
            </div>

            <div className="flex justify-between">
              <span>Payment Success</span>
              <strong>98%</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}