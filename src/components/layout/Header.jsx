import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="top-0 z-50 sticky bg-white/95 shadow-sm backdrop-blur-md border-gray-200 border-b">
      <nav className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
        <NavLink
          to="/"
          className="font-extrabold text-blue-600 text-2xl tracking-tight"
        >
          MyStore<span className="text-gray-900">.</span>
        </NavLink>
        <ul className="flex items-center gap-2 sm:gap-6">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
