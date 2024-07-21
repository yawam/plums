import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import TopicSection from "../_components/topicSection";
import NewTopicButton from "@/pages/NewTopicButton";
import TopicCard from "@/components/TopicCard";

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
        <div className="flex flex-col gap-2 mb-10 mt-[100px] px-4 w-full md:max-w-[80%] md:gap-12 mx-auto">
          <h2 className="text-[50px] text-neutral-400 font-semibold mb-4">Related Topics</h2>
          <div className="flex flex-wrap w-full gap-4 justify-center">
            {topic.subtopics.map((subTopic) => (
              <Link 
                key={subTopic.id}
                href={`/${subTopic.id}`}
                className="w-[250px]"
              >
                <TopicCard
                  key={subTopic.id}
                  title={subTopic.title}
                  description={subTopic.description || ""}
                  imageUrl={subTopic.imageUrl || ""}
                />
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

// This is added to pull changes in github

export default TopicPage;