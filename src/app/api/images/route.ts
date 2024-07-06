import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

// This handler fetches images by topic ID
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

    const images = await db.image.findMany({
      where: {
        topicId: topicId, // Assuming topicId is a string
      },
    });

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const imageData = await req.json();
    try {
      await db.image.create({
        data: {
          description: imageData.description,
          imageUrl: imageData.imageUrl,
          topicId: imageData.topicId,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return NextResponse.json({
      message: "Image created successfully",
      data: imageData,
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { message: "Failed to create image" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { imageId } = await req.json();
    if (!imageId) {
      return NextResponse.json(
        { message: "Image ID is missing." },
        { status: 400 }
      );
    }
    const deletedImage = await db.image.delete({
      where: {
        id: imageId,
      },
    });
    return NextResponse.json({ deletedImage });
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
