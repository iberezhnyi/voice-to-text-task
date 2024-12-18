import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const audios = await prisma.audio.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: audios });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Error fetching audio" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
