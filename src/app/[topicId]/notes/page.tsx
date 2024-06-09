'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import NoteCard from '@/components/NoteCard';
import "remixicon/fonts/remixicon.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Notes = () => {
  const router = useRouter()
  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Notes
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
  
        <NoteCard
          note_id={1}
          title="React Topic"
          note="This is the note for the react"
        />

        <NoteCard
          note_id={2}
          title="2nd React Topic"
          note="This is the 2nd note for react"
        />
      </div>
    </main>
  );
}

export default Notes