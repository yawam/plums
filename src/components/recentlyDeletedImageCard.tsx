import Image from "next/image";
import toast from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";

interface RecentlyDeletedImageCardProps {
  image_id: string;
  description: string;
  image_src: string;
  image_alt: string;
  topicId: string;
}

const RecentlyDeletedImageCard = ({
  image_id,
  description,
  image_src,
  image_alt,
  topicId,
}: RecentlyDeletedImageCardProps) => {
  const handleRestore = async () => {
    // a fetch to api/images to post into images with body from recently deleted data props
    try {
      const imageId = image_id;

      const restoreImage = await fetch(`/api/images`, {
        method: "POST",
        body: JSON.stringify({
          id: image_id,
          description: description,
          imageUrl: image_src,
          topicId: topicId,
        }),
      });
      const restoredImageData = await restoreImage.json();
      if (restoredImageData) {
        const deleteImage = await fetch(`/api/recentlyDeletedImages`, {
          method: "DELETE",
          body: JSON.stringify({ imageId }),
        });

        const restoredDeletedImageData = await deleteImage.json();

        if (restoredDeletedImageData) {
          toast.success("Image Restored");
          window.location.reload();
        }
      }
    } catch (error) {
      console.error("An error occurred while restoring the image", error);
    }
  };
  const handleDelete = async () => {
    const imageId = image_id;
    const response = await fetch(`/api/recentlyDeletedImages`, {
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
        <IoArrowUndoOutline size={25} onClick={handleRestore} />
      </div>

      <h3>{description}</h3>
      <Image src={image_src} alt={image_alt} width={150} height={150} />
      <div className="absolute bottom-2 right-2 cursor-pointer transition hover:bg-black hover:bg-opacity-50 p-2 shadow-xl rounded-xl z-20">
        <BsTrash size={25} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default RecentlyDeletedImageCard;
