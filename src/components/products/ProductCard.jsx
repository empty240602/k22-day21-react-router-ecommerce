import { Link } from "react-router";

export function ProductCard({ product }) {
  return (
    <div className="group bg-white shadow-sm hover:shadow-lg border border-gray-200 rounded-xl overflow-hidden transition-all hover:-translate-y-1 duration-300">
      <div className="bg-gray-100 aspect-4/3 overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          />
        </Link>
      </div>

      <div className="space-y-3 p-4">
        <Link to={`/products/${product.id}`}>
          <h2 className="font-semibold text-gray-900 group-hover:text-blue-600 text-lg transition-colors cursor-pointer">
            {product.name}
          </h2>
        </Link>

        <p className="min-h-10 text-gray-500 text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <span className="inline-block bg-blue-50 px-3 py-1 rounded-full font-medium text-blue-600 text-xs">
          {product.category}
        </span>

        <p className="pt-3 border-gray-100 border-t font-bold text-green-600 text-xl">
          {`${product.price.toLocaleString("vi-VN")}đ`}
        </p>
      </div>
    </div>
  );
}
