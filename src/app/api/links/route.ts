import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// This handler fetches link by topic ID
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const topicId = searchParams.get("topicId");

    if (!topicId) {
      return NextResponse.json(
        { message: "Topic ID is missing." },
        { status: 400 }
      );
    }

    const notes = await db.link.findMany({
      where: {
        topicId: topicId, // Assuming topicId is a string
      },
    });

    return NextResponse.json({ notes });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

//POSTING note by topic ID

export async function POST(req: NextRequest) {
  try {
    const linkData = await req.json();
    
    const note = await db.link.create({
      data: {
        description: linkData.description,
        url: linkData.url,
        topicId: linkData.topicId,
      },
    });
    return NextResponse.json({ note });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
