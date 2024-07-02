"use client";

import Image from "next/image";

interface TopicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TopicCard = ({ title, description, imageUrl }: TopicCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white shadow-xl w-full h-[300px] lg:h-[350px] lg:w-[300px]">
      <div className="flex justify-center mb-3 overflow-hidden h-[60%]">
        <Image
          className="rounded-t-xl w-full object-cover"
          src={imageUrl}
          width={150}
          height={150}
          alt={title}
          draggable="false"
        />
      </div>
      <div className="px-4 h-[20%] flex flex-col justify-between">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-sm truncate mr-[15px] ml-[10px]">{description}</p>
      </div>
    </div>
  );
};

export default TopicCard;
