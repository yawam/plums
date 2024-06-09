"use client";

interface LinkCardProps {
  link_id: number;
  title: string;
  link: string;
}

const LinkCard = ({ link_id, title, link }: LinkCardProps) => {
  return (
    <div className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4" key={link_id}>
      <h3>{title}</h3>
      <p className="text-sm">{link}</p>
    </div>
  );
};

export default LinkCard;
