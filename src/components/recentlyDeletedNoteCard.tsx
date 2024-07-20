"use client";

import toast from "react-hot-toast";
import { Preview } from "./preview";
import { IoArrowUndoOutline } from "react-icons/io5";
import Link from "next/link";
import { BsTrash } from "react-icons/bs";

interface RecentlyDeletedNoteCardProps {
  note_id: string;
  title: string;
  note: string;
  topicId: string;
}

const RecentlyDeletedNoteCard = ({
  note_id,
  title,
  note,
  topicId,
}: RecentlyDeletedNoteCardProps) => {
  const handleRestore = async () => {
    const noteId = note_id;
    const restoreNote = await fetch(`/api/notes`, {
      method: "POST",
      body: JSON.stringify({
        id: note_id,
        title: title,
        content: note,
        topicId: topicId,
      }),
    });
    // DO SOMETHING If DATA RETURNS.. CONTINUE WITH DELETE
    const restoredNote = await restoreNote.json();
    if (restoredNote) {
      const response = await fetch(
        `/api/recentlyDeletedNotes?noteId=${noteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (data) {
        toast.success("Note Restored");
        window.location.reload();
      } else {
        toast.error("Error restoring note");
      }
    }
  };

  const handleDelete = async () => {
    const noteId = note_id;
    const deleteForever = await fetch(
      `/api/recentlyDeletedNotes?noteId=${noteId}`,
      {
        method: "DELETE",
      }
    );
    const data = await deleteForever.json();
    if (data) {
      toast.success("Note Deleted");
      window.location.reload();
    } else {
      toast.error("Error deleting note");
    }
  };

  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[180px] shadow-xl p-4 relative overflow-hidden cursor-pointer z-20"
      key={note_id}
    >
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <IoArrowUndoOutline
          size={25}
          onClick={handleRestore} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>
      <Link href={`/${topicId}/notes/${note_id}`}>
        <h3>{title}</h3>
        <div className="pb-2">
          <Preview value={note} />
        </div>
      </Link>
      <div className="absolute bottom-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={handleDelete} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>
    </div>
  );
};

export default RecentlyDeletedNoteCard;
