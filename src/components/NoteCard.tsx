"use client";

import toast from "react-hot-toast";
import { Preview } from "./preview";
import { BsTrash } from "react-icons/bs";

interface NoteCardProps {
  note_id: string;
  title: string;
  note: string;
}

const NoteCard = ({ note_id, title, note }: NoteCardProps) => {
  const handleDelete = async () => {
    const noteId = note_id;
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
  };
  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[180px] shadow-xl p-4 relative cursor-pointer z-20"
      key={note_id}
    >
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={handleDelete} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>

      <h3>{title}</h3>
      <div className="pb-2">
        <Preview value={note} />
      </div>
    </div>
  );
};

export default NoteCard;
