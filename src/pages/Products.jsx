import { ProductCard } from "../components/products/ProductCard";
import { products } from "../data/product.js";
import { useSearchParams } from "react-router";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword") || "";
  const category = searchParams.get("category") || "";

  const categories = [...new Set(products.map((item) => item.category))];

  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(keyword.toLowerCase()) &&
      (!category || item.category === category)
    );
  });

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
      <div className="mb-8">
        <h1 className="font-bold text-gray-900 text-3xl sm:text-4xl tracking-tight">
          Our Products
        </h1>
        <p className="mt-2 text-gray-500 text-sm">
          Discover our collection of products.
        </p>
      </div>

      <div className="mb-10">
        <div className="relative max-w-lg">
          <span className="left-4 absolute inset-y-0 flex items-center text-gray-400 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.34-4.34m0 0A7.5 7.5 0 1 0 6.05 6.05a7.5 7.5 0 0 0 10.61 10.61Z"
              />
            </svg>
          </span>

          <input
            type="text"
            value={keyword}
            onChange={(e) =>
              setSearchParams((prevParams) => {
                prevParams.set("keyword", e.target.value);
                return prevParams;
              })
            }
            placeholder="Search products..."
            className="bg-white shadow-sm py-3 pr-4 pl-12 border border-gray-300 focus:border-blue-500 rounded-xl outline-none focus:ring-4 focus:ring-blue-100 w-full text-gray-900 placeholder:text-gray-400 text-sm transition-all"
          />
        </div>

        <div className="flex flex-col gap-1 mt-3">
          <label
            htmlFor="category"
            className="font-semibold text-gray-700 text-sm"
          >
            Choose a category
          </label>

          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) =>
              setSearchParams((prevParams) => {
                prevParams.set("category", e.target.value);

                return prevParams;
              })
            }
            className="bg-white shadow-sm px-4 py-3 border border-gray-200 hover:border-gray-300 focus:border-blue-500 rounded-xl outline-none focus:ring-4 focus:ring-blue-100 w-full sm:w-64 text-gray-700 text-sm transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-gray-800 text-lg">Product List</h2>

        <span className="text-gray-500 text-sm">
          {filteredProducts.length} products found
        </span>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-gray-50 px-4 border border-gray-300 border-dashed rounded-2xl min-h-64 text-center">
          <h3 className="font-semibold text-gray-800 text-xl">
            No products found
          </h3>
          <p className="mt-2 text-gray-500 text-sm">
            Try searching with another keyword.
          </p>
        </div>
      )}
    </div>
  );
}
