import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// This handler fetches notes by topic ID
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

    const notes = await db.note.findMany({
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

export async function POST(req: NextRequest) {
  try {
    const noteData = await req.json();
    console.log(noteData);
    console.log("Title:", noteData.title);
    console.log("Content:", noteData.content);
    console.log("Topic ID:", noteData.topicId);
    const note = await db.note.create({
      data: {
        title: noteData.title,
        content: noteData.content,
        topicId: noteData.topicId,
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
