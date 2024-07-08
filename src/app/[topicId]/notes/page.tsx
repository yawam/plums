"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NoteCard from "@/components/NoteCard";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { Note } from "@prisma/client";
import NewNoteModal from "@/pages/NewNoteModal";

const Notes = () => {
  const router = useRouter();
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;
  const [notes, setNotes] = useState<Note[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchNotesByTopic(topicId: string) {
      try {
        const response = await fetch(`/api/notes?topicId=${topicId}`);
        const data = await response.json();
        setNotes(data.notes);
        console.log(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    // Fetch notes for the current topicId
    if (topicId) {
      fetchNotesByTopic(topicId);
    }
  }, [topicId]); // Include topicId in the dependency array to trigger fetchNotesByTopic when it changes

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Notes
        </h2>
        <Button
          variant={"lArrowCircle"}
          size={"lArrowCircle"}
          onClick={router.back}
        >
          <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
        </Button>
        <Button
          variant={"plusCircle"}
          size={"plusCircle"}
          onClick={toggleModal}
        >
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      {/* Check if modal is open and render modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <NewNoteModal topicId={topicId} closeModal={toggleModal} />
        </div>
      )}

      <div className="flex flex-col w-full gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 z-30">
        {notes.map((notes) => (
          <Link key={notes.id} href={`/${topicId}/notes/${notes.id}`}>
            {" "}
            {/* Get the topicID to put here*/}
            <NoteCard
              note_id={notes.id}
              title={notes.title}
              note={notes.content}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
