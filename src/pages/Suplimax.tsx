import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";

const Suplimax = () => {
  const [features, setFeatures] = useState("");
  const [tone, setTone] = useState("energetic");
  const [audience, setAudience] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for API call
    setVideoUrl("https://example.com/video.mp4"); // simulate
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        🥤 Suplimax Marketing Video Generator
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold block mb-1">Product Features</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="e.g. Boosts energy, zero sugar, mango flavor..."
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Tone</label>
          <select
            className="w-full p-2 border rounded"
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
          <label className="font-semibold block mb-1">Target Audience</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="e.g. Athletes, Gamers, Students"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="font-semibold block mb-1">Video Style</label>
          <select
            className="w-full p-2 border rounded"
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
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          🔘 Generate Video
        </button>
      </form>

      {videoUrl && (
        <div className="mt-10">
          <VideoPlayer videoUrl={videoUrl} />
        </div>
      )}
    </div>
  );
};

export default Suplimax;
