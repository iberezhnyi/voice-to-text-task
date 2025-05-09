import axios from "axios";

const ASSEMBLY_API_KEY = process.env.ASSEMBLY_API_KEY;

if (!ASSEMBLY_API_KEY) {
  throw new Error("ASSEMBLY_API_KEY is not defined");
}

export const uploadAudioFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    "https://api.assemblyai.com/v2/upload",
    formData,
    {
      headers: {
        Authorization: ASSEMBLY_API_KEY,
      },
    }
  );

  return response.data.upload_url;
};

export const startTranscription = async (audioUrl: string): Promise<string> => {
  const response = await axios.post(
    "https://api.assemblyai.com/v2/transcript",
    {
      audio_url: audioUrl,
    },
    {
      headers: {
        Authorization: ASSEMBLY_API_KEY,
      },
    }
  );

  return response.data.id;
};

export const getTranscriptionResult = async (
  transcriptionId: string
): Promise<string> => {
  const response = await axios.get(
    `https://api.assemblyai.com/v2/transcript/${transcriptionId}`,
    {
      headers: {
        Authorization: ASSEMBLY_API_KEY,
      },
    }
  );

  if (response.data.status === "completed") {
    return response.data.text;
  } else if (response.data.status === "failed") {
    throw new Error("Transcription failed");
  } else {
    throw new Error("Transcription....");
  }
};
