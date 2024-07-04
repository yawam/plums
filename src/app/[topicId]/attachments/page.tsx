'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import AttachmentCard from '@/components/AttachmentsCard';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { Attachment } from '@prisma/client';
import NewAttachmentModal from '@/pages/NewAttachmentModal';

const Attachments = () => {
  const router = useRouter()
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    async function fetchAttachmentsByTopic(topicId: string) {
      try {
        const response = await fetch(`/api/attachments?topicId=${topicId}`);
        const data = await response.json();
        setAttachments(data.attachments);
        console.log(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    // Fetch notes for the current topicId
    if (topicId) {
      fetchAttachmentsByTopic(topicId);
    }
  }, [topicId]);

  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Attachments
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
        <NewAttachmentModal topicId={topicId} closeModal={toggleModal} />
      )}

      <div className="flex flex-col w-full gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid md:grid-cols-3 lg:grid-cols-4">
        {!attachments.length && <p>Create your first note</p>}
        {attachments.map((attachments) => (
          <div>
            <AttachmentCard
              attachment_id={attachments.id}
              fileUrl={attachments.fileUrl}
              description={attachments.description || ""}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Attachments