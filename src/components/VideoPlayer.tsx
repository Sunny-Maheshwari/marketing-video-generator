type Props = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Props) => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow text-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-700">🎥 Your Video</h2>
      <video src={videoUrl} controls className="w-full rounded border mb-4" />
      <a
        href={videoUrl}
        download
        className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        ⬇️ Download Video
      </a>
    </div>
  );
};

export default VideoPlayer;
