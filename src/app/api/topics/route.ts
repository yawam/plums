import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const topicData = await req.json();
    console.log(topicData);
    console.log("Title:", topicData.title);
    console.log("Description:", topicData.description);
    console.log("Image URL:", topicData.imageUrl);
    console.log("Importance:", topicData.importance);
    try {
      await db.topic.create({
        data: {
          title: topicData.title,
          description: topicData.description,
          imageUrl: topicData.imageUrl,
          importance: topicData.importance,
          parentId: topicData.parentId,
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

export async function PATCH(req: Request) {
  try {
    const editData = await req.json();
    console.log(editData);

    const editedData = await db.topic.update({
      where: {
        id: editData.topicId,
      },
      data: {
        title: editData.title,
        description: editData.description,
        imageUrl: editData.imageUrl,
        importance: editData.importance,
      },
    });

    return NextResponse.json({ editedData });
  } catch (error) {
    console.error("Error handling topic PATCH request:", error);
  }
}

export async function DELETE(req: Request) {
  try {
    const deleteData = await req.json();
    const deletedData = await db.topic.delete({
      where: {
        id: deleteData.topicId,
      },
    });

    return NextResponse.json({ deletedData });
  } catch (error) {}
}
