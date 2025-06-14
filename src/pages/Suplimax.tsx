import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

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

    const res = await fetch("http://localhost:5000/api/suplimax", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ features, tone, audience, style }),
    });

    const data = await res.json();
    setVideoUrl(data.videoUrl);
    setLoading(false);
  };

  return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center leading-tight">
        🥤 <span className="block sm:inline">Generate Suplimax</span>
        <span className="block sm:inline">Marketing Video</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold block mb-1">Product Features</label>
          <textarea
            className="form-textarea w-full"
            rows={4}
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="e.g. Boosts energy, zero sugar, mango flavor"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold block mb-1">Tone</label>
            <select
              className="form-select w-full"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="energetic">Energetic</option>
              <option value="funny">Funny</option>
              <option value="motivational">Motivational</option>
              <option value="professional">Professional</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-1">Video Style</label>
            <select
              className="form-select w-full"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option value="cinematic">Cinematic</option>
              <option value="animated">Animated</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1">Target Audience</label>
          <input
            type="text"
            className="form-input w-full"
            placeholder="e.g. Athletes, Students, Gamers"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-md hover:opacity-90 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "🎬 Generate Video"}
        </button>
      </form>

      {loading && (
        <div className="text-center mt-6 text-purple-500 font-semibold animate-pulse">
          Generating your video, please wait...
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

export default Suplimax;
