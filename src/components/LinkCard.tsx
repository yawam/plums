"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Preview } from "./preview";
import { BsTrash } from "react-icons/bs";
import ConfirmDialog from "./confirmDialog";

interface LinkCardProps {
  link_id: string;
  description: string;
  url: string;
}

const LinkCard = ({ link_id, description, url }: LinkCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async () => {
    setDialogOpen(false);
    const linkId = link_id;
    const response = await fetch(`/api/links/${linkId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      toast.success("Link Deleted");
      window.location.reload();
    } else {
      toast.error("Error deleting link");
    }
  };
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[180px] shadow-xl p-4 relative cursor-pointer z-20" key={link_id}>
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={() => setDialogOpen(true)} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>
      <h3 className="text-xl font-semibold">{description}</h3>
      {/* <p className="text-sm">{url}</p> */}
      {/* <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> */}
        <Preview value={url}/>
      {/* </a> */}

      <ConfirmDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this link?"
      />
    </div>
  );
};

export default LinkCard;
