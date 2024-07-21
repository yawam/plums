import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import TopicSection from "../_components/topicSection";

const titles = ["Notes", "Images", "Attachments", "Links"];

const TopicPage = async ({ params }: { params: { topicId: string } }) => {
  const topic = await db.topic.findUnique({
    where: { id: params.topicId }, // Ensure id is treated as string
    include: {
      notes: true,
      links: true,
      attachments: true,
      images: true,
    },
  });

  // console.log('Topic', topic)

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold lg:mt-8">
          {topic?.title.toUpperCase()}
        </h2>
        <Link href={"/"}>
          <Button variant={"lArrowCircle"} size={"lArrowCircle"}>
            <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
          </Button>
        </Link>
      </div>

      {topic?.description && (
        <div className="w-full">
          <p className="text-sm text-center">{topic?.description}</p>
        </div>
      )}

      <div className="flex flex-col gap-2 mb-10 mt-2 px-4 w-full md:max-w-[80%] md:gap-12 mx-auto">
        {titles.map((title) => (
          <TopicSection key={title} title={title} topicId={topic?.id} />
        ))}
      </div>
    </div>
  );
};

export default TopicPage;
