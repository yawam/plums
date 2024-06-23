"use client";

import { Preview } from "./preview";
import { BsTrash } from "react-icons/bs";

interface NoteCardProps {
  note_id: string;
  title: string;
  note: string;
}

const NoteCard = ({ note_id, title, note }: NoteCardProps) => {
  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[180px] shadow-xl p-4 relative cursor-pointer"
      key={note_id}
    >
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl">
        <BsTrash
          size={25}
          onClick={() => {}} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>

      <h3>{title}</h3>
      <Preview value={note} />
    </div>
  );
};

export default NoteCard;
