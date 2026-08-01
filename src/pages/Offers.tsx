import {
  Tag,
  Percent,
  Gift,
  Calendar,
  Plus,
} from "lucide-react";

const offers = [
  {
    code: "SAVE10",
    title: "10% OFF on Grocery",
    discount: "10%",
    valid: "31 Aug 2026",
    status: "Active",
  },
  {
    code: "FESTIVE20",
    title: "20% OFF on Shopping",
    discount: "20%",
    valid: "15 Sep 2026",
    status: "Active",
  },
  {
    code: "BUY1GET1",
    title: "Buy 1 Get 1 Free",
    discount: "BOGO",
    valid: "10 Aug 2026",
    status: "Expired",
  },
  {
    code: "NEWUSER",
    title: "Flat ₹200 OFF",
    discount: "₹200",
    valid: "30 Dec 2026",
    status: "Active",
  },
];

export default function Offers() {
  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Offers & Discounts
          </h1>

          <p className="text-gray-500">
            Manage Coupons and Promotional Offers
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          <Plus size={18}/>
          Create Offer
        </button>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded-xl shadow">
          <Tag className="text-blue-600 mb-3" size={35}/>
          <p className="text-gray-500">Total Offers</p>
          <h2 className="text-3xl font-bold">25</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <Percent className="text-green-600 mb-3" size={35}/>
          <p className="text-gray-500">Active Offers</p>
          <h2 className="text-3xl font-bold">18</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <Gift className="text-purple-600 mb-3" size={35}/>
          <p className="text-gray-500">Coupons Used</p>
          <h2 className="text-3xl font-bold">1,245</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <Calendar className="text-orange-600 mb-3" size={35}/>
          <p className="text-gray-500">Expired</p>
          <h2 className="text-3xl font-bold">7</h2>
        </div>

      </div>

      {/* Offers Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <div className="p-5 border-b">
          <h2 className="text-xl font-bold">
            Available Offers
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Coupon Code</th>
              <th className="p-4 text-left">Offer</th>
              <th className="p-4 text-left">Discount</th>
              <th className="p-4 text-left">Valid Till</th>
              <th className="p-4 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {offers.map((offer) => (

              <tr
                key={offer.code}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold">
                  {offer.code}
                </td>

                <td className="p-4">
                  {offer.title}
                </td>

                <td className="p-4">
                  {offer.discount}
                </td>

                <td className="p-4">
                  {offer.valid}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      offer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {offer.status}
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