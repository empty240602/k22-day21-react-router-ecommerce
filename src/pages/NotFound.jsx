export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-[70vh] text-center">
      <h2 className="font-extrabold text-blue-600 text-8xl tracking-tight">
        404
      </h2>

      <p className="mt-4 font-semibold text-gray-800 text-xl">Page Not Found</p>

      <p className="mt-2 text-gray-500 text-sm">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
