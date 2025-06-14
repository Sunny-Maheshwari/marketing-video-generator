import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { motion } from "framer-motion";

const RealEstate = () => {
  const [style, setStyle] = useState("luxury");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const property = {
    address: "12012 Crest Ct, Beverly Hills, CA 90210",
    price: "$10,183,985",
    bedrooms: 5,
    bathrooms: 6.5,
    sqft: 6100,
    features:
      "Luxury estate, three-car garage, landscaped grounds, elegant entrance with grand staircase, modern design, prime Beverly Hills location",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setVideoUrl("https://www.w3schools.com/html/movie.mp4"); // mock
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto bg-[#2A2B30] p-8 rounded-2xl shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-purple-400 mb-6"
        >
          🏡 Real Estate Video Tour Generator
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Property Address
            </label>
            <input
              type="text"
              value={property.address}
              disabled
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1 text-gray-300">
                Price
              </label>
              <input
                type="text"
                value={property.price}
                disabled
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-300">
                Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              >
                <option value="luxury">Luxury</option>
                <option value="family">Family-Friendly</option>
                <option value="modern">Modern</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-300">
              Features
            </label>
            <textarea
              value={property.features}
              disabled
              rows={4}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition"
            disabled={loading}
          >
            {loading ? "Generating Tour..." : "🎬 Generate Video Tour"}
          </button>
        </motion.form>

        {loading && (
          <div className="text-center mt-8 animate-pulse text-purple-400 font-semibold">
            Processing your video tour...
          </div>
        )}

        {videoUrl && !loading && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <VideoPlayer videoUrl={videoUrl} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RealEstate;
