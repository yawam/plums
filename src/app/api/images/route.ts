import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// This handler fetches images by topic ID
export async function GET(req: NextRequest) {
    try {
      const { searchParams } = new URL(req.url);
      const topicId = searchParams.get('topicId');
  
      if (!topicId) {
        return NextResponse.json({ message: 'Topic ID is missing.' }, { status: 400 });
      }
  
      const images = await db.image.findMany({
        where: {
          topicId: topicId // Assuming topicId is a string
        }
      });
  
      return NextResponse.json({ images });
    } catch (error) {
      console.error("Error handling GET request:", error);
      return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
  }