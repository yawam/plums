import { db } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

enum Importance {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const importance = searchParams.get("importance");

    if (
      importance &&
      !Object.values(Importance).includes(importance as Importance)
    ) {
      return NextResponse.json(
        { error: "Invalid importance level" },
        { status: 400 }
      );
    }

    const byImportance = await db.topic.findMany({
      where: {
        importance: importance as Importance | null,
      },
    });

    return NextResponse.json({ byImportance });
  } catch (error) {
    console.error("Error fetching topics by importance:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
