"use client";

import { useState, ChangeEvent } from "react";

const AudioUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null); // Сбрасываем ошибку при выборе нового файла
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please select an audio file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch("/api/records", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "An error occurred while uploading the file.");
        setLoading(false);
        return;
      }

      const { transcriptionId } = await response.json();

      // Polling for transcription result
      const fetchResult = async () => {
        try {
          const resultResponse = await fetch(
            `/api/records?transcriptionId=${transcriptionId}`
          );

          if (!resultResponse.ok) {
            throw new Error("Failed to fetch transcription result.");
          }

          const resultData = await resultResponse.json();
          setResult(resultData.text);
          setLoading(false);
        } catch (err) {
          // Retry after a delay if the result is not ready yet
          setTimeout(fetchResult, 5000);
        }
      };

      fetchResult();
    } catch (error: any) {
      setError(error.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        Upload Audio File
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Select an Audio File
        </label>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-gray-300 bg-gray-700 p-2 rounded cursor-pointer focus:outline-none focus:ring focus:ring-purple-500"
        />

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`mt-4 w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Submit"}
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-700 rounded text-sm text-gray-300">
            <p className="font-semibold text-purple-400 mb-1">Result:</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioUpload;
