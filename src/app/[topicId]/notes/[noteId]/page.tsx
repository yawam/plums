"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const NoteIdPage = ({ params }: { params: { noteId: string } }) => {
  const router = useRouter();

  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Note {params.noteId}
        </h2>
        <Button
          variant={"lArrowCircle"}
          size={"lArrowCircle"}
          onClick={router.back}
        >
          <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4"></div>
    </main>
  );
};

export default NoteIdPage;
