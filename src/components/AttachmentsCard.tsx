"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Preview } from "./preview";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";
import ConfirmDialog from "./confirmDialog";

interface AttachmentCardProps {
  attachment_id: string;
  fileUrl: string;
  description: string;
}

const AttachmentCard = ({ attachment_id, fileUrl, description }: AttachmentCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDelete = async () => {
    setDialogOpen(false);
    const attachmentId = attachment_id;
    const response = await fetch(`/api/attachments/${attachmentId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      toast.success("Attachment Deleted");
      window.location.reload();
    } else {
      toast.error("Error deleting attachment");
    }
  }
  // Function to determine the file type based on the file extension
  const getFileType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'image';
      case 'mp4':
      case 'mov':
        return 'video';
      case 'mp3':
      case 'wav':
        return 'audio';
      case 'pdf':
        return 'pdf';
      case 'txt':
      case 'html':
        return 'text';
      default:
        return 'unknown';
    }
  };

  const fileType = getFileType(fileUrl);

  const handleClick = () => {
    // Open the file URL in a new tab
    window.open(fileUrl, '_blank');
  };

  const renderFilePreview = () => {
    switch (fileType) {
      case 'image':
        return <img src={fileUrl} alt={description} className="max-w-full h-auto" />;
      case 'video':
        return <video src={fileUrl} controls className="max-w-full h-auto" />;
      case 'audio':
        return <audio src={fileUrl} controls />;
      case 'pdf':
        return (
          <embed
            src={fileUrl}
            type="application/pdf"
            width="100%"
            height="400px"
          />
        );
      case 'text':
        return (
          <iframe
            src={fileUrl}
            className="w-full h-96"
            title={description}
          />
        );
      default:
        return <p>File preview is not available</p>;
    }
  };

  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4 relative z-20"
    >
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={() => setDialogOpen(true)} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>
      <div className="flex-1">
        {/* {renderFilePreview()} */}
      </div>
      <h3 className="text-lg font-bold mt-2" >{description}</h3>
      <p className="cursor-pointer" onClick={handleClick}>Open attachment</p>
      {/* <p className="text-sm truncate">{fileUrl}</p> */}

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

export default AttachmentCard;
