type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-lg font-semibold mb-2">🎥 Your Generated Video</h2>
      <video
        src={videoUrl}
        controls
        className="w-full h-auto rounded border"
      />
      <a
        href={videoUrl}
        download
        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        ⬇️ Download Video
      </a>
    </div>
  );
};

export default VideoPlayer;
