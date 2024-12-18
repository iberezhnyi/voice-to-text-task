export default function AudioUploadPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">
        Upload Your Audio File
      </h1>
      <p className="text-gray-300 mb-6">
        Select an audio file and convert it to text using our app.
      </p>

      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg"
      >
        Choose File
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept="audio/*"
        />
      </label>
    </div>
  );
}
