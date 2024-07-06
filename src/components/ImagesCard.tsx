"use client";

import Image from "next/image";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";

interface ImageCardProps {
  image_id: string;
  title: string;
  image_src: string;
  image_alt: string;
}

const ImageCard = ({
  image_id,
  title,
  image_src,
  image_alt,
}: ImageCardProps) => {
  const handleDelete = async () => {
    const imageId = image_id;
    const response = await fetch(`/api/images`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageId }),
    });
    const data = await response.json();
    if (data) {
      toast.success("Image Deleted");
      window.location.reload();
    } else {
      toast.error("Error deleting image");
    }
  };
  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4 relative cursor-pointer z-20"
      key={image_id}
    >
      <div className="absolute top-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash
          size={25}
          onClick={handleDelete} // a delete by note id. remember to add to recently deleted for all delete functions
        />
      </div>

      <h3>{title}</h3>
      <Image src={image_src} alt={image_alt} width={150} height={150} />
    </div>
  );
};

export default ImageCard;
