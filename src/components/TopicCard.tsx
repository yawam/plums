"use client";

import Image from "next/image";

interface TopicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TopicCard = ({ title, description, imageUrl }: TopicCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl md:h-[320px]">
      <div className="flex justify-center mb-2">
        <Image
          className="rounded-t-xl w-full shadow-inner"
          src={imageUrl}
          width={150}
          height={100}
          alt="Sample Image"
        />
      </div>
      <div className="px-4">
        <h3>{title}</h3>
        <p className="text-sm overflow-hidden">{description}</p>
      </div>
    </div>
  );
};

export default TopicCard;
