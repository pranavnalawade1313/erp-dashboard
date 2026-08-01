import React, { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Package,
} from "lucide-react";

export default function Inventory() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Aashirvaad Atta",
      category: "Grocery",
      stock: 120,
      price: 350,
    },
    {
      id: 2,
      name: "Fortune Oil",
      category: "Grocery",
      stock: 85,
      price: 180,
    },
    {
      id: 3,
      name: "Surf Excel",
      category: "Home Care",
      stock: 45,
      price: 220,
    },
    {
      id: 4,
      name: "Colgate Toothpaste",
      category: "Personal Care",
      stock: 60,
      price: 95,
    },
    {
      id: 5,
      name: "Dove Soap",
      category: "Personal Care",
      stock: 15,
      price: 60,
    },
    {
      id: 6,
      name: "Maggi Noodles",
      category: "Food",
      stock: 250,
      price: 15,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-slate-100 min-h-screen">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Inventory
          </h1>

          <p className="text-gray-500">
            Manage all products in your store
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          <Plus size={18} />
          Add Product
        </button>

      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-5 rounded-xl shadow">

          <Package className="text-blue-600 mb-3" size={35} />

          <p className="text-gray-500">Total Products</p>

          <h2 className="text-3xl font-bold">
            {products.length}
          </h2>

        </div>

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="text-gray-500">Low Stock</p>

          <h2 className="text-3xl font-bold text-red-600">
            {products.filter((p) => p.stock < 20).length}
          </h2>

        </div>

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="text-gray-500">Categories</p>

          <h2 className="text-3xl font-bold">
            4
          </h2>

        </div>

        <div className="bg-white p-5 rounded-xl shadow">

          <p className="text-gray-500">In Stock</p>

          <h2 className="text-3xl font-bold text-green-600">
            {products.filter((p) => p.stock > 0).length}
          </h2>

        </div>

      </div>

      {/* Search */}

      <div className="flex justify-between items-center mb-6">

        <div className="relative w-80">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white"
          />

        </div>

      </div>

      {/* Product Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">Product</th>

              <th className="text-left">Category</th>

              <th className="text-left">Stock</th>

              <th className="text-left">Price</th>

              <th className="text-left">Status</th>

              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold">
                  {product.name}
                </td>

                <td>
                  {product.category}
                </td>

                <td>
                  {product.stock}
                </td>

                <td>
                  ₹ {product.price}
                </td>

                <td>

                  {product.stock < 20 ? (

                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                      Low Stock
                    </span>

                  ) : (

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      Available
                    </span>

                  )}

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-lg text-white">
                      <Edit size={18} />
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 p-2 rounded-lg text-white">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}