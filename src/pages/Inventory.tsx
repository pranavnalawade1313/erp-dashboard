export default function Inventory() {
  const products = [
    {
      id: 1,
      name: "Rice 5kg",
      category: "Grocery",
      price: 450,
      stock: 50,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Sugar 1kg",
      category: "Grocery",
      price: 55,
      stock: 8,
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Sunflower Oil 1L",
      category: "Oil",
      price: 180,
      stock: 35,
      status: "In Stock",
    },
    {
      id: 4,
      name: "Surf Excel",
      category: "Cleaning",
      price: 220,
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "Tea Powder",
      category: "Beverages",
      price: 140,
      stock: 18,
      status: "Low Stock",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Inventory Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all your store products.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
          + Add Product
        </button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">Total Products</p>
          <h1 className="text-4xl font-bold mt-3">250</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">In Stock</p>
          <h1 className="text-4xl font-bold text-green-600 mt-3">220</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">Low Stock</p>
          <h1 className="text-4xl font-bold text-orange-500 mt-3">20</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-500">Out of Stock</p>
          <h1 className="text-4xl font-bold text-red-600 mt-3">10</h1>
        </div>

      </div>

      {/* Search */}

      <div className="flex justify-between items-center mb-6">

        <input
          type="text"
          placeholder="Search Product..."
          className="border border-gray-300 rounded-lg px-4 py-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
          Search
        </button>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4">ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {products.map((product) => (

              <tr
                key={product.id}
                className="text-center border-b hover:bg-gray-50"
              >

                <td className="p-4">{product.id}</td>

                <td>{product.name}</td>

                <td>{product.category}</td>

                <td>₹{product.price}</td>

                <td>{product.stock}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      product.status === "In Stock"
                        ? "bg-green-500"
                        : product.status === "Low Stock"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    }`}
                  >
                    {product.status}
                  </span>

                </td>

                <td>

                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>

                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                    Delete
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