import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Suplimax from "./pages/Suplimax";
import RealEstate from "./pages/RealEstate";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <div className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/suplimax" />} />
          <Route path="/suplimax" element={<Suplimax />} />
          <Route path="/real-estate" element={<RealEstate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
