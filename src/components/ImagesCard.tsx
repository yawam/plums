"use client";

import Image from "next/image";

interface ImageCardProps {
  image_id: number;
  title: string;
  image_src: string;
  image_alt: string;
}

const ImageCard = ({ image_id, title, image_src, image_alt }: ImageCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4" key={image_id}>
      <h3>{title}</h3>
      <Image src={image_src} alt={image_alt} width={150} height={150} />
    </div>
  );
};

export default ImageCard;
