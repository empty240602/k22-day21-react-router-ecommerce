import { useNavigate, useParams } from "react-router";
import { products } from "../data/product.js";

export function ProductDetail() {
  const { id } = useParams();
  let navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  return product ? (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-6xl">
      <div className="gap-10 md:gap-12 grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm p-5 md:p-8 border border-gray-200 rounded-2xl">
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full min-h-72 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <span className="bg-blue-50 px-4 py-1.5 rounded-full w-fit font-medium text-blue-600 text-sm">
            {product.category}
          </span>

          <h1 className="font-bold text-gray-900 text-2xl sm:text-3xl tracking-tight">
            {product.name}
          </h1>

          <p className="text-gray-600 text-base leading-relaxed">
            {product.description}
          </p>

          <div className="pt-5 border-gray-200 border-t">
            <p className="font-medium text-gray-500 text-sm">Price</p>

            <p className="mt-2 font-bold text-green-600 text-3xl">
              {product.price.toLocaleString("vi-VN")}đ
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 shadow-sm px-5 py-2.5 border border-gray-300 hover:border-blue-500 rounded-lg font-semibold text-gray-700 hover:text-blue-600 text-sm active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="text-lg">←</span>
            Back to Products
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center px-4 min-h-[60vh] text-center">
      <h2 className="font-bold text-gray-800 text-3xl">Product Not Found</h2>

      <p className="mt-3 text-gray-500">
        Sorry, the product you are looking for does not exist.
      </p>
    </div>
  );
}
