import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const page = ({ params }: {
    params: { imageId: string }
}) => {
  
  return (
    <main className="flex flex-col">
      <div className="flex justify-center my-2">
        <h2 className="text-4xl tracking-widest align-middle font-semibold">
          Image {params.imageId}
        </h2>
        <Link href={"/images"}>
          <Button
            variant={"lArrowCircle"}
            size={"lArrowCircle"}
          >
            <i className="ri-arrow-left-circle-fill text-fuchsia-900 text-[90px]"></i>
          </Button>
        </Link>
        
      </div>

      <div className="grid grid-cols-2 gap-2 mt-10 text-left px-4 md:max-w-[80%] md:gap-12 mx-auto md:grid-cols-3 lg:grid-cols-4">
        
      </div>
    </main>
  );
}

export default page