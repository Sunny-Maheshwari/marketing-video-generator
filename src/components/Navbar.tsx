import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/suplimax" className="hover:underline">Suplimax Video</Link>
      <Link to="/real-estate" className="hover:underline">Real Estate Tour</Link>
    </nav>
  );
};

export default Navbar;
