"use client";

import Image from "next/image";
import Link from "next/link";

interface AttachmentCardProps {
  attachment_id: number;
  title: string;
  attachment: string;
}

const AttachmentCard = ({ attachment_id, title, attachment }: AttachmentCardProps) => {
  return (
    <Link href={`/attachments/${attachment_id}`} className="cursor-pointer">
        <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl">
            <div className="flex justify-center mb-2">
            </div>
            <div className="px-4">
                <h3>{title}</h3>
                <p className="text-sm">{attachment}</p>
            </div>
        </div>
    </Link>
  );
};

export default AttachmentCard;
