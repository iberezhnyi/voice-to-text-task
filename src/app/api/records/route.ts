import { NextResponse, NextRequest } from "next/server";
import {
  uploadAudioFile,
  startTranscription,
  getTranscriptionResult,
} from "@/lib/assembly";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const audioUrl = await uploadAudioFile(file);

    const transcriptionId = await startTranscription(audioUrl);

    return NextResponse.json({ transcriptionId }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const transcriptionId = searchParams.get("transcriptionId");

  if (!transcriptionId) {
    return NextResponse.json(
      { error: "Transcription ID is required" },
      { status: 400 }
    );
  }

  try {
    const result = await getTranscriptionResult(transcriptionId);

    return NextResponse.json({ text: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
