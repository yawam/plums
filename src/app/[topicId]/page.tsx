import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import TopicSection from "../_components/topicSection";
import NewTopicButton from "@/pages/NewTopicButton";

const titles = ["Notes", "Images", "Attachments", "Links"];

const TopicPage = async ({ params }: { params: { topicId: string } }) => {
  const topic = await db.topic.findUnique({
    where: { id: params.topicId },
    include: {
      notes: true,
      links: true,
      attachments: true,
      images: true,
      subtopics: true,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold lg:mt-8">
          {topic?.title.toUpperCase()}
        </h2>
        <Link href={"/"}>
          <Button variant={"lArrowCircle"} size={"lArrowCircle"}>
            <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
          </Button>
        </Link>
        {topic && <NewTopicButton topicId={topic.id} />}
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

      {topic?.subtopics && topic.subtopics.length > 0 && (
        <div className="flex flex-col gap-2 mb-10 mt-2 px-4 w-full md:max-w-[80%] md:gap-12 mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Related Topics</h3>
          <div className="flex flex-col gap-2">
            {topic.subtopics.map((subTopic) => (
              <Link 
                key={subTopic.id}
                href={`/${subTopic.id}`}
                className="p-4 border rounded-md"
              >
                <h4 className="text-xl font-semibold">{subTopic.title}</h4>
                <p className="text-sm">{subTopic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default TopicPage;