import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { motion } from "framer-motion";

const Suplimax = () => {
  const [features, setFeatures] = useState("");
  const [tone, setTone] = useState("energetic");
  const [audience, setAudience] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setVideoUrl("");

    try {
      const res = await fetch("http://localhost:5000/api/suplimax", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features, tone, audience, style }),
      });

      const data = await res.json();
      console.log(data.videoUrl);
      setVideoUrl(data.videoUrl);
    } catch (error) {
      console.error("Error generating video:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-red-100 to-pink-200 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-red-600 mb-6"
        >
          🥤 Suplimax Video Generator
        </motion.h1>

        <div className="flex justify-center mb-8">
          <img
            src="https://via.placeholder.com/120x180.png?text=Suplimax+Drink"
            alt="Suplimax"
            className="rounded-xl shadow-lg"
          />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block font-semibold mb-1">Product Features</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              rows={4}
              placeholder="e.g. Boosts energy, zero sugar, mango flavor..."
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Tone</label>
            <select
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="energetic">Energetic</option>
              <option value="professional">Professional</option>
              <option value="funny">Funny</option>
              <option value="motivational">Motivational</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Target Audience</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              placeholder="e.g. Athletes, Gamers, Students"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Video Style</label>
            <select
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option value="cinematic">Cinematic</option>
              <option value="animated">Animated</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "🔘 Generate Video"}
          </button>
        </motion.form>

        {loading && (
          <div className="text-center mt-8 animate-pulse text-red-500 font-semibold">
            Please wait while we generate your Suplimax video...
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

export default Suplimax;
