import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const topicData = await req.json();
    console.log(topicData);
    console.log("Title:", topicData.title);
    console.log("Description:", topicData.description);
    console.log("Image URL:", topicData.imageUrl);
    try {
      await db.topic.create({
        data: {
          title: topicData.title,
          description: topicData.description,
          imageUrl: topicData.imageUrl,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json({
      message: "Topic created successfully",
      data: topicData,
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { message: "Failed to create topic" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const topics = await db.topic.findMany();
    return NextResponse.json({ topics });
  } catch (error) {
    console.error("Error handling GET request:", error);
  }
}