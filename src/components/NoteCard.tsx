"use client";

interface NoteCardProps {
  note_id: number;
  title: string;
  note: string;
}

const NoteCard = ({ note_id, title, note }: NoteCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4" key={note_id}>
      <h3>{title}</h3>
      <p className="text-sm">{note}</p>
    </div>
  );
};

export default NoteCard;
