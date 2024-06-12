import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const notes = await db.note.findMany();
      return NextResponse.json({ notes });
    } catch (error) {
      console.error("Error handling GET request:", error);
    }
  }