import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const topicId = searchParams.get('topicId');

        if (!topicId) {
            return NextResponse.json({ message: 'Topic ID is missing.' }, { status: 400 });
        }

        const attachments = await db.attachment.findMany({
            where: {
                topicId: topicId
            }
        });

        return NextResponse.json({ attachments });
    } catch (error) {
        console.error("Error handling GET request:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const attachmentData = await req.json();
        try {
            await db.attachment.create({
                data: {
                    fileUrl: attachmentData.fileUrl,
                    description: attachmentData.description,
                    topicId: attachmentData.topicId,
                },
            });
        } catch (error) {
            console.log(error)
        }
        return NextResponse.json({
            message: "Attachment created successfully",
            data: attachmentData,
          });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json(
        { message: "Failed to create attachment" },
        { status: 500 }
        );
    }
}