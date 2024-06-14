"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import NoteCard from "@/components/NoteCard";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { Note } from "@prisma/client";

const Notes = () => {
  const router = useRouter();
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;
  const [notes, setNotes] = useState<Note[]>([]);

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
    <main className="flex flex-col">
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
        <Button variant={"plusCircle"} size={"plusCircle"} onClick={() => {}}>
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {!notes.length && <p>Create your first note</p>}
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
    </main>
  );
};

export default Notes;
