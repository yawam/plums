"use client";

interface AttachmentCardProps {
  attachment_id: string;
  fileUrl: string;
  description: string;
}

const AttachmentCard = ({ attachment_id, fileUrl, description }: AttachmentCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4" key={attachment_id}>
      <h3>{fileUrl}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default AttachmentCard;
