import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
        : "text-gray-400 hover:text-white hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gray-900 shadow-md text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-xl font-bold text-purple-400 tracking-wide text-center sm:text-left">
          🚀 Marketing Video Generator
        </h1>

        <div className="flex justify-center sm:justify-end gap-2 flex-wrap">
          <Link to="/suplimax" className={linkClasses("/suplimax")}>
            Suplimax
          </Link>
          <Link to="/real-estate" className={linkClasses("/real-estate")}>
            Real Estate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
