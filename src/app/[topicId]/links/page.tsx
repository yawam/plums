'use client'

import React, {useState, useEffect} from 'react'
import { Button } from '@/components/ui/button'
import LinkCard from '@/components/LinkCard';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Link as PrismaLink } from '@prisma/client';
import NewLinkModal from "@/pages/NewLinkModal"

const Links = () => {
  const router = useRouter()
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;
  const [links, setLinks] = useState<PrismaLink[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchLinksByTopic(topicId: string) {
      try {
        const response = await fetch(`/api/links?topicId=${topicId}`);
        const data = await response.json();
        setLinks(data.notes);
        console.log(data);
      } catch (error) {
        console.error("Error fetching link:", error);
      }
    }

    // Fetch notes for the current topicId
    if (topicId) {
      fetchLinksByTopic(topicId);
    }
  }, [topicId]);

  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Links
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
          <NewLinkModal topicId={topicId} closeModal={toggleModal} />
        </div>
      )}

      <div className="flex flex-col w-full gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 z-30">
        {!links.length && <p>Create your first link</p>}
        {links.map((links) => (
          <LinkCard
              key={links.id}
              link_id={links.id}
              url={links.url}
              description={links.description || ''}
            />
        ))}
      </div>
    </main>
  );
}

export default Links