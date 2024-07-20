import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// get all recently deleted notes
export async function GET() {
  try {
    const recentlyDeleted = await db.recently_Deleted_Note.findMany();
    return NextResponse.json({ recentlyDeleted });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { message: "Internal server error: Get recently deleted" },
      { status: 500 }
    );
  }
}

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

    const deletedNote = await db.recently_Deleted_Note.delete({
      where: {
        id: noteId,
      },
    });

    return NextResponse.json({ deletedNote });
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return NextResponse.json(
      { message: "Internal server error: Delete recently deleted" },
      { status: 500 }
    );
  }
}
