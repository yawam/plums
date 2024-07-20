"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NoteCard from "@/components/NoteCard";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { Recently_Deleted_Note } from "@prisma/client";
import NewNoteModal from "@/pages/NewNoteModal";
import RecentlyDeletedNoteCard from "@/components/recentlyDeletedNoteCard";
import { BsTrash } from "react-icons/bs";

const Notes = () => {
  const router = useRouter();
  const params = useParams() as { topicId?: string };
  //   const topicId = params.topicId;
  const [notes, setNotes] = useState<Recently_Deleted_Note[]>([]);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const toggleModal = () => {
  //     setIsModalOpen(!isModalOpen);
  //   };

  useEffect(() => {
    async function fetchRecentlyDeletedNotes() {
      try {
        const response = await fetch(`/api/recentlyDeletedNotes`, {
          method: "GET",
        });
        const data = await response.json();
        console.log(data.recentlyDeleted);
        setNotes(data.recentlyDeleted);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
    fetchRecentlyDeletedNotes();
  }, []); // Include topicId in the dependency array to trigger fetchNotesByTopic when it changes

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-xl md:text-4xl ml-4 tracking-widest align-middle font-semibold">
          Recently Deleted Notes
        </h2>
        <Button
          variant={"lArrowCircle"}
          size={"lArrowCircle"}
          onClick={router.back}
        >
          <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
        </Button>
      </div>

      <div className="flex flex-col w-full gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 z-30">
        {notes.map((notes) => (
          <RecentlyDeletedNoteCard
            key={notes.id}
            note_id={notes.id}
            title={notes.title}
            note={notes.content}
            topicId={notes.topicId}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
