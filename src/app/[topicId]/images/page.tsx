'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import ImageCard from '@/components/ImagesCard';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Image } from '@prisma/client';

const Images = () => {
  const router = useRouter()
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;
  const [images, setImages] = useState<Image[]>([]);

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
          onClick={() => {}}
        >
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {!images.length && <p>Create your first note</p>}
        {images.map((images) => (
          <Link key={images.id} href={`/${topicId}/images/${images.id}`}>
            <ImageCard
              image_id={images.id}
              title={images.description || ""}
              image_src={images.imageUrl}
              image_alt={images.id}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Images