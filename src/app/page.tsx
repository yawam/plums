"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import NewTopicModal from "@/pages/NewTopicModal";
import "remixicon/fonts/remixicon.css";
import TopicCard from "@/components/TopicCard";
import { Topic } from "@prisma/client";
import { FaPencil } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import EditTopicModal from "@/pages/EditTopicModal";
import toast from "react-hot-toast";
import OnDeleteModal from "@/pages/OnDeleteModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [currentImportance, setCurrentImportance] = useState<string | null>(
    null
  );

  // Function to toggle modal state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleEditModal = (topic?: Topic) => {
    setCurrentTopic(topic || null);
    setIsEditing(!isEditing);
  };

  const toggleDeleteModal = (topic?: Topic) => {
    setCurrentTopic(topic || null);
    setIsDeleting(!isDeleting);
  };

  const fetchTopics = useCallback(async () => {
    try {
      const response = await fetch("/api/topics");
      const data = await response.json();
      setTopics(data.topics);
      console.log(data);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  }, []);

  const fetchTopicsByImportance = useCallback(
    async (importance: string | null) => {
      if (!importance) {
        fetchTopics();
        return;
      }

      try {
        const response = await fetch(
          `/api/topics/importance?importance=${importance}`
        );
        const data = await response.json();
        setTopics(data.byImportance);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    },
    [fetchTopics]
  );

  useEffect(() => {
    fetchTopics();
  }, [fetchTopics]);

  useEffect(() => {
    if (currentImportance) {
      fetchTopicsByImportance(currentImportance);
    } else {
      fetchTopics();
    }
  }, [currentImportance, fetchTopics, fetchTopicsByImportance]);

  const handleReset = () => {
    setCurrentImportance(null);
    fetchTopics();
  };

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
      <div className="flex justify-start mx-8 px-8 space-x-2">
        <p className="self-end text-xl p-2">Tags/Labels:</p>
        <Button variant="outline" onClick={() => setCurrentImportance("LOW")}>
          LOW
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentImportance("MEDIUM")}
        >
          MEDIUM
        </Button>
        <Button variant="outline" onClick={() => setCurrentImportance("HIGH")}>
          HIGH
        </Button>
        <Button variant="outline" onClick={handleReset}>
          ALL TOPICS
        </Button>
      </div>

      {/* Check if modal is open and render modal */}
      {isModalOpen && 
        <div className="fixed inset-0 z-50">
          <NewTopicModal closeModal={toggleModal} />
        </div>
      }

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-6 z-30">
        {/* {!topics.length && <p>No topics yet</p>} */}
        {topics.map((topic) => (
          <div key={topic.id} className="relative">
            <FaPencil
              onClick={() => toggleEditModal(topic)}
              size={35}
              className=" text-white absolute bottom-2 left-2 cursor-pointer transition ease-linear p-2 hover:bg-black hover:bg-opacity-50 hover:shadow-xl rounded-xl"
            />
            <BsTrash
              onClick={() => {
                toggleDeleteModal(topic);
              }}
              size={35}
              className="hover:text-white absolute bottom-2 right-2 cursor-pointer transition ease-linear p-2 hover:bg-black hover:bg-opacity-50 hover:shadow-xl rounded-xl"
            />
            {isEditing && (
              <EditTopicModal
                topicId={currentTopic?.id || ""}
                topic_title={currentTopic?.title || ""}
                topic_description={currentTopic?.description || ""}
                topic_imageUrl={
                  currentTopic?.imageUrl || "/images/placeholder-image.jpg"
                }
                importance={currentTopic?.importance || ""}
                closeModal={toggleEditModal}
              />
            )}

            {isDeleting && (
              <OnDeleteModal
                closeModal={toggleDeleteModal}
                topicId={currentTopic?.id || ""}
                topic_title={currentTopic?.title || ""}
              />
            )}
            <Link href={`/${topic.id}`}>
              <TopicCard
                key={topic.id}
                title={topic.title}
                description={topic.description || ""}
                imageUrl={topic.imageUrl || "/images/placeholder-image.jpg"}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
