import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

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

// export async function GET_BY_ID(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { id } = req.query; // Retrieving ID from route parameters

//   try {
//     const topic = await db.topic.findUnique({
//       where: { id: String(id) }, // Ensure id is treated as string
//     });

//     if (!topic) {
//       return res.status(404).json({ message: 'Topic not found' });
//     }

//     return res.status(200).json({ topic });
//   } catch (error) {
//     console.error('Error fetching topic:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }