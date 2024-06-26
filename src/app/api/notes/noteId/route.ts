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

// PATCHING note by noteID i create  it for note content updates
export async function PATCH(req: NextRequest) {
  try {
    const notesData = await req.json();

    const updateData = {
      ...(notesData.title && { title: notesData.title }),
      ...(notesData.content && { content: notesData.content }),
    };

    //logic above updates the note fields depending on which data exists

    const note = await db.note.update({
      where: {
        id: notesData.noteId,
      },
      data: updateData,
    });

    return NextResponse.json({ note });
  } catch (error) {
    console.error("Error handling PATCH request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
