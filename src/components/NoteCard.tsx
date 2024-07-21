"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Preview } from "./preview";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";
import ConfirmDialog from "./confirmDialog";

interface NoteCardProps {
  note_id: string;
  title: string;
  note: string;
  topicId: string;
}

const NoteCard = ({ note_id, title, note, topicId }: NoteCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async () => {
    setDialogOpen(false);
    try {
      const noteId = note_id;
      const insertDeletedNote = await fetch(
        `/api/notes/noteId?noteId=${noteId}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: note_id,
            title: title,
            content: note,
            topicId: topicId,
          }),
        }
      );
    // DO SOMETHING If DATA RETURNS.. CONTINUE WITH DELETE
    const insertedNote = await insertDeletedNote.json();
    if (insertedNote) {
      const response = await fetch(`/api/notes/noteId?noteId=${noteId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data) {
        toast.success("Note Deleted");
        window.location.reload();
      } else {
        toast.error("Error deleting note");
      }
    }
    } catch (error) {
      toast.error("An error occurred while deleting the note");
    }
  };

  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[180px] shadow-xl p-4 relative cursor-pointer z-20"
      key={note_id}
    >
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={() => setDialogOpen(true)} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>
      <Link href={`/${topicId}/notes/${note_id}`}>
        <h3>{title}</h3>
        <div className="pb-2">
          <Preview value={note} />
        </div>
      </Link>
      
      <ConfirmDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this note?"
      />
    </div>
  );
};

export default NoteCard;
