import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

const RealEstate = () => {
  const [style, setStyle] = useState("luxury");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [property, setProperty] = useState({
    address: "12012 Crest Ct, Beverly Hills, CA 90210",
    price: "$10,183,985",
    bedrooms: 5,
    bathrooms: 6.5,
    sqft: 6100,
    features:
      "Luxury estate, three-car garage, landscaped grounds, grand staircase, modern design",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setVideoUrl("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/real-estate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ style, property }),
      });

      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      if (!data.videoUrl) throw new Error("Missing videoUrl in response");

      setVideoUrl(data.videoUrl);
    } catch (error) {
      console.error("Error generating video:", error);
      alert("Failed to generate video. Please check backend or network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center leading-tight">
          🏡 <span className="block sm:inline">Generate Real Estate</span>
          <span className="block sm:inline">Tour Video</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Price</label>
              <input
                className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700"
                value={property.price}
                onChange={(e) =>
                  setProperty({ ...property, price: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Style</label>
              <select
                className="w-full p-3 border rounded bg-white dark:bg-gray-700"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option value="luxury">Luxury</option>
                <option value="family">Family</option>
                <option value="modern">Modern</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700"
              value={property.address}
              onChange={(e) =>
                setProperty({ ...property, address: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Features</label>
            <textarea
              className="w-full p-3 border rounded bg-gray-100 dark:bg-gray-700"
              rows={3}
              value={property.features}
              onChange={(e) =>
                setProperty({ ...property, features: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "🏠 Generate Video"}
          </button>
        </form>

        {loading && (
          <div className="text-center mt-6 text-purple-500 font-semibold animate-pulse">
            Creating your real estate video...
          </div>
        )}

        {videoUrl && !loading && (
          <div className="mt-10">
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEstate;
