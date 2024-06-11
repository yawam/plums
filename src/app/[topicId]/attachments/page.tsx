'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import AttachmentCard from '@/components/AttachmentsCard';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

const Attachments = () => {
  const router = useRouter()
  const params = useParams() as { topicId?: string };
  const topicId = params.topicId;

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
          onClick={() => {}}
        >
          <i className="ri-add-circle-fill text-fuchsia-900 text-[90px]" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        
        <Link href={`/${topicId}/attachments/1`}>
          <AttachmentCard
            attachment_id={1}
            title="Attachment 1"
            attachment=''
          />
        </Link>

        <AttachmentCard
          attachment_id={2}
          title="Attachment 2"
          attachment=''
        />
      </div>
    </main>
  );
}

export default Attachments