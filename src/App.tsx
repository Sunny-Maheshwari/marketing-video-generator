import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Suplimax from "./pages/Suplimax";
import RealEstate from "./pages/RealEstate";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/suplimax" />} />
        <Route path="/suplimax" element={<Suplimax />} />
        <Route path="/real-estate" element={<RealEstate />} />
      </Routes>
    </>
  );
}

export default App;
