"use client";

import Image from "next/image";
import Link from "next/link";

interface ImageCardProps {
  image_id: number;
  title: string;
  image_src: string;
  image_alt: string;
}

const ImageCard = ({ image_id, title, image_src, image_alt }: ImageCardProps) => {
  return (
    <Link href={`/images/${image_id}`} className="cursor-pointer">
        <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl">
            <div className="flex justify-center mb-2">
            </div>
            <div className="px-4">
                <h3>{title}</h3>
                <Image src={image_src} alt={image_alt} width={50} height={50} />
            </div>
        </div>
    </Link>
  );
};

export default ImageCard;
