import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// This handler fetches notes by noteID
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const noteId = searchParams.get("noteId");

    if (!noteId) {
      return NextResponse.json(
        { message: "Note Id is missing." },
        { status: 400 }
      );
    }

    const notes = await db.note.findMany({
      where: {
        id: noteId, // Assuming noteId is a string
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
