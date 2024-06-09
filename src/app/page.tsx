"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewTopicModal from "@/pages/NewTopicModal";
import "remixicon/fonts/remixicon.css";
import TopicCard from "@/components/TopicCard";
import { Topic } from "@prisma/client";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);

  // Function to toggle modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchTopics() {
      try {
        const response = await fetch("/api/topics");
        const data = await response.json();
        setTopics(data.topics);
        console.log(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    }
    fetchTopics();
  }, []);

  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Topics
        </h2>
        <Button
          variant={"plusCircle"}
          size={"plusCircle"}
          onClick={toggleModal}
        >
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      {/* Check if modal is open and render modal */}
      {isModalOpen && <NewTopicModal closeModal={toggleModal} />}

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {topics.map((topic) => (
          <Link key={topic.id} href={`/${topic.id}`}>
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description || ""}
              imageUrl={topic.imageUrl || "/images/placeholder-image.jpg"}
            />
          </Link>
          
        ))}
      </div>
    </main>
  );
}
