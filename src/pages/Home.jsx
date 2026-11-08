import { Link } from "react-router";

export function Home() {
  return (
    <main>
      <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl">
          <div className="space-y-7">
            <span className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full font-semibold text-blue-700 text-sm">
              Welcome to MyStore
            </span>

            <h1 className="font-extrabold text-gray-900 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
              Discover Products
              <span className="block text-blue-600">You Will Love.</span>
            </h1>

            <p className="max-w-lg text-gray-600 text-base sm:text-lg leading-relaxed">
              Explore our collection of carefully selected products. Find what
              you need with great quality and affordable prices.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 shadow-lg hover:shadow-xl px-6 py-3.5 rounded-xl font-semibold text-white text-sm active:scale-95 transition-all hover:-translate-y-1 duration-200"
              >
                Explore Products
                <span className="text-lg">→</span>
              </Link>

              <span className="font-medium text-gray-500 text-sm">
                Find your favorite products
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200/40 blur-3xl rounded-3xl" />

            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Modern shopping store"
              className="relative shadow-2xl rounded-3xl w-full h-72 sm:h-96 md:h-105 object-cover"
            />

            <div className="-bottom-5 -left-3 sm:-left-6 absolute bg-white shadow-xl p-4 border border-gray-100 rounded-2xl">
              <p className="font-semibold text-gray-900 text-sm">
                Discover More
              </p>
              <p className="mt-1 text-gray-500 text-xs">
                Your shopping journey starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-gray-900 text-3xl tracking-tight">
            Why Choose MyStore?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            We make your shopping experience simple and enjoyable.
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-sm hover:shadow-lg p-7 border border-gray-200 rounded-2xl transition-all hover:-translate-y-1 duration-300">
            <div className="flex justify-center items-center bg-blue-100 mb-5 rounded-xl w-12 h-12 text-2xl">
              ✨
            </div>
            <h3 className="font-bold text-gray-900 text-lg">
              Quality Products
            </h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Discover carefully selected products that meet your needs.
            </p>
          </div>

          <div className="bg-white shadow-sm hover:shadow-lg p-7 border border-gray-200 rounded-2xl transition-all hover:-translate-y-1 duration-300">
            <div className="flex justify-center items-center bg-green-100 mb-5 rounded-xl w-12 h-12 text-2xl">
              💰
            </div>
            <h3 className="font-bold text-gray-900 text-lg">
              Affordable Prices
            </h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Find great products at prices that fit your budget.
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 bg-white shadow-sm hover:shadow-lg p-7 border border-gray-200 rounded-2xl transition-all hover:-translate-y-1 duration-300">
            <div className="flex justify-center items-center bg-purple-100 mb-5 rounded-xl w-12 h-12 text-2xl">
              🛍️
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Easy Shopping</h3>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Browse our collection and find your favorite products easily.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl">
        <div className="bg-blue-600 shadow-blue-600/20 shadow-xl px-6 sm:px-12 py-12 rounded-3xl text-center">
          <h2 className="font-bold text-white text-2xl sm:text-3xl">
            Ready to Start Shopping?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-blue-100 text-sm sm:text-base leading-relaxed">
            Explore our products and discover something you will love.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 mt-7 px-6 py-3 rounded-xl font-semibold text-blue-600 active:scale-95 transition-all hover:-translate-y-1 duration-200"
          >
            Browse Products
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
