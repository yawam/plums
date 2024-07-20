import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const images = await db.recently_Deleted_Image.findMany({});
    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const imageData = await request.json();

    const insertDeletedImage = await db.recently_Deleted_Image.create({
      data: {
        id: imageData.id,
        imageUrl: imageData.imageUrl,
        description: imageData.description,
        topicId: imageData.topicId,
      },
    });
    return NextResponse.json({ insertDeletedImage });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
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
    const deletedImage = await db.recently_Deleted_Image.delete({
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
