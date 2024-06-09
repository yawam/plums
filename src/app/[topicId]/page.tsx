import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';

const TopicPage = async ({ params }: {
    params: { topicId: string }
}) => {

  const topic = await db.topic.findUnique({
    where: { id: params.topicId }, // Ensure id is treated as string
    include: { 
      notes: true,
      links: true,
      attachments: true,
      images: true
     }
  });

  console.log('Topic', topic)


  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          {topic?.title}
        </h2>
        <Link href={"/"}>
          <Button
            variant={"lArrowCircle"}
            size={"lArrowCircle"}
          >
            <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
          </Button>
        </Link>
        
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        {topic?.description}

        <div>
          <Link href={`/${topic?.id}/notes`} key={topic?.id}>Notes</Link>
        </div>
        <div>
          <Link href={`/attachments/${topic?.id}`}>Attachments</Link>
        </div>
        <div>
          <Link href={`/images/${topic?.id}`}>Notes</Link>
        </div>
        <div>
          <Link href={`/notes/${topic?.id}`}>Notes</Link>
        </div>
      </div>
    </main>
  );
}

export default TopicPage