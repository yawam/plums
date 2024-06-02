"use client";

import Image from "next/image";
import Link from "next/link";

interface LinkCardProps {
  link_id: number;
  title: string;
  link: string;
}

const LinkCard = ({ link_id, title, link }: LinkCardProps) => {
  return (
    <Link href={`/links/${link_id}`} className="cursor-pointer">
        <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl">
            <div className="flex justify-center mb-2">
            </div>
            <div className="px-4">
                <h3>{title}</h3>
                <p className="text-sm">{link}</p>
            </div>
        </div>
    </Link>
  );
};

export default LinkCard;
