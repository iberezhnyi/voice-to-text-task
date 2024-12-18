export default function RecordList() {
  return (
    <div className="flex flex-col bg-gray-900 text-gray-200">
      <div className="bg-gray-800 p-4 text-center text-purple-400 text-2xl font-bold">
        Your Uploaded Files
      </div>

      <div className="flex-1 p-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg text-purple-400 mb-4">Previous Uploads</h3>
          <ul className="space-y-2">
            <li className="bg-gray-700 p-2 rounded">Audio File 1.mp3</li>
            <li className="bg-gray-700 p-2 rounded">Audio File 2.mp3</li>
            <li className="bg-gray-700 p-2 rounded">Audio File 3.mp3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
