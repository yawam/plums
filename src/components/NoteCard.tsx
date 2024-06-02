"use client";

import Image from "next/image";
import Link from "next/link";

interface NoteCardProps {
  note_id: number;
  title: string;
  note: string;
}

const NoteCard = ({ note_id, title, note }: NoteCardProps) => {
  return (
    <Link href={`/notes/${note_id}`} className="cursor-pointer">
        <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl">
            <div className="flex justify-center mb-2">
            </div>
            <div className="px-4">
                <h3>{title}</h3>
                <p className="text-sm">{note}</p>
            </div>
        </div>
    </Link>
  );
};

export default NoteCard;
