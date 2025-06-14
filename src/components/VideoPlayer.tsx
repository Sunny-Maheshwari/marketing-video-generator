import { useState } from "react";

type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  const [downloading] = useState(false);

  const handleDownload = () => {
    const downloadUrl = `http://localhost:5000/api/download?url=${encodeURIComponent(
      videoUrl
    )}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "video.mp4");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow text-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">
        🎥 Your Video
      </h2>
      <video src={videoUrl} controls className="w-full rounded border mb-4" />
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
      >
        {downloading ? "Downloading..." : "⬇️ Download Video"}
      </button>
    </div>
  );
};

export default VideoPlayer;
