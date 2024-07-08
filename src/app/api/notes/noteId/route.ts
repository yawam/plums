import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// This handler fetches note by noteID
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

    const note = await db.note.findUnique({
      where: {
        id: noteId, // Assuming noteId is a string
      },
    });

    return NextResponse.json({ note });
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

// DELETE note by noteID
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const noteId = searchParams.get("noteId");
    if (!noteId) {
      return NextResponse.json(
        { message: "Note Id is missing." },
        { status: 400 }
      );
    }

    const deletedNote = await db.note.delete({
      where: {
        id: noteId,
      },
    });

    return NextResponse.json({ deletedNote });
  } catch {
    return NextResponse.json(
      { message: "Internal server error deleting note" },
      { status: 500 }
    );
  }
}
