"use client";

import { Preview } from "./preview";
import { BsTrash } from "react-icons/bs";

interface LinkCardProps {
  link_id: string;
  description: string;
  url: string;
}

const LinkCard = ({ link_id, description, url }: LinkCardProps) => {
  const handleDelete = () => {};
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[180px] shadow-xl p-4 relative cursor-pointer z-20" key={link_id}>
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={() => {}} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>

      <p className="text-sm">{description}</p>
      <Preview value={url} />
    </div>
  );
};

export default LinkCard;
