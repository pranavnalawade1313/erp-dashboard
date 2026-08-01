import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const purchaseData = [
  { month: "Jan", purchase: 120000 },
  { month: "Feb", purchase: 150000 },
  { month: "Mar", purchase: 180000 },
  { month: "Apr", purchase: 170000 },
  { month: "May", purchase: 210000 },
  { month: "Jun", purchase: 240000 },
  { month: "Jul", purchase: 260000 },
];

const purchaseList = [
  {
    id: "PO101",
    supplier: "ABC Traders",
    product: "Rice 5kg",
    qty: 100,
    amount: "₹45,000",
    status: "Received",
  },
  {
    id: "PO102",
    supplier: "Fresh Foods",
    product: "Sugar",
    qty: 80,
    amount: "₹18,500",
    status: "Pending",
  },
  {
    id: "PO103",
    supplier: "Sun Oil Ltd",
    product: "Oil 1L",
    qty: 150,
    amount: "₹52,000",
    status: "Received",
  },
  {
    id: "PO104",
    supplier: "Daily Needs",
    product: "Milk",
    qty: 200,
    amount: "₹25,000",
    status: "Pending",
  },
];

export default function Purchase() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Purchase Management</h1>
          <p className="text-gray-500">
            Manage suppliers and purchase orders
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + New Purchase
        </button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Today's Purchase</p>
          <h2 className="text-3xl font-bold mt-2">₹52,000</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Monthly Purchase</p>
          <h2 className="text-3xl font-bold mt-2">₹7,85,000</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Purchase Orders</p>
          <h2 className="text-3xl font-bold mt-2">154</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Pending Orders</p>
          <h2 className="text-3xl font-bold mt-2 text-red-600">18</h2>
        </div>

      </div>

      {/* Purchase Chart */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-xl font-bold mb-5">
          Monthly Purchase Trend
        </h2>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={purchaseData}>

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="purchase"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Purchase Table */}

      <div className="bg-white rounded-xl shadow p-6 mt-8">

        <h2 className="text-xl font-bold mb-5">
          Recent Purchases
        </h2>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-3">PO ID</th>
              <th>Supplier</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {purchaseList.map((item) => (

              <tr
                key={item.id}
                className="border-b text-center"
              >

                <td className="p-3">{item.id}</td>

                <td>{item.supplier}</td>

                <td>{item.product}</td>

                <td>{item.qty}</td>

                <td>{item.amount}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      item.status === "Received"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Top Suppliers
          </h2>

          <ul className="space-y-4">

            <li className="flex justify-between">
              <span>ABC Traders</span>
              <strong>₹4,25,000</strong>
            </li>

            <li className="flex justify-between">
              <span>Fresh Foods</span>
              <strong>₹3,60,000</strong>
            </li>

            <li className="flex justify-between">
              <span>Sun Oil Ltd</span>
              <strong>₹2,95,000</strong>
            </li>

            <li className="flex justify-between">
              <span>Daily Needs</span>
              <strong>₹2,20,000</strong>
            </li>

          </ul>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-bold mb-4">
            Purchase Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Total Suppliers</span>
              <strong>32</strong>
            </div>

            <div className="flex justify-between">
              <span>Orders Delivered</span>
              <strong>136</strong>
            </div>

            <div className="flex justify-between">
              <span>Pending Orders</span>
              <strong>18</strong>
            </div>

            <div className="flex justify-between">
              <span>Delivery Rate</span>
              <strong>91%</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}