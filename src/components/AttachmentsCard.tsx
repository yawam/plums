"use client";

interface AttachmentCardProps {
  attachment_id: number;
  title: string;
  attachment: string;
}

const AttachmentCard = ({ attachment_id, title, attachment }: AttachmentCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4" key={attachment_id}>
      <h3>{title}</h3>
      <p className="text-sm">{attachment}</p>
    </div>
  );
};

export default AttachmentCard;
