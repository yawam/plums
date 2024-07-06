"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ImageCard from "@/components/ImagesCard";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { Image } from "@prisma/client";
import NewImageModal from "@/pages/NewImageModal";

const Images = () => {
  const router = useRouter();
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;
  const [images, setImages] = useState<Image[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchImagesByTopic(topicId: string) {
      try {
        const response = await fetch(`/api/images?topicId=${topicId}`);
        const data = await response.json();
        setImages(data.images);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    }

    // Fetch images for the current topicId
    if (topicId) {
      fetchImagesByTopic(topicId);
    }
  }, [topicId]);

  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Images
        </h2>
        <Button
          variant={"lArrowCircle"}
          size={"lArrowCircle"}
          onClick={router.back}
        >
          <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
        </Button>
        <Button
          variant={"plusCircle"}
          size={"plusCircle"}
          onClick={toggleModal}
        >
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      {/* Check if modal is open and render modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50">
          <NewImageModal topicId={topicId} closeModal={toggleModal} />
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4 z-30">
        {!images.length && <p>Add your first image</p>}
        {images.map((images) => (
          <ImageCard
            key={images.id}
            image_id={images.id}
            title={images.description || ""}
            image_src={images.imageUrl}
            image_alt={images.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Images;
