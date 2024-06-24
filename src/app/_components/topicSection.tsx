import { Preview } from "@/components/preview";
import { db } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

interface TopicSectionProps {
  title: string;
  topicId: string | undefined;
}

const TopicSection = async ({ title, topicId }: TopicSectionProps) => {
  const notes = await db.note.findMany({
    where: {
      topicId: topicId,
    },
  });
  const images = await db.image.findMany({
    where: {
      topicId: topicId,
    },
  });
  const links = await db.link.findMany({
    where: {
      topicId: topicId,
    },
  });
  const attachments = await db.attachment.findMany({
    where: {
      topicId: topicId,
    },
  });

  //   console.log("Notes", notes);

  return (
    <div className=" flex flex-col items-center">
      <div className="w-[40%] flex justify-self-start">
        <h2 className="text-[50px] text-neutral-400">{title}</h2>
      </div>

      <div className="w-[40%] flex justify-evenly items-center mx-auto bg-fuchsia-900 shadow-xl rounded-xl text-white p-6 relative lg:h-[300px]">
        <Link
          href={`/${topicId}/${title.toLowerCase()}`}
          className=" p-2 block border-2 hover:bg-emerald-600 rounded-xl shadow-xl mr-2 absolute top-2 right-2 "
        >
          More...{" "}
        </Link>
        {title === "Notes" &&
          notes.map((note) => (
            <Link
              href={`/${topicId}/${title.toLowerCase()}/${note.id}`}
              key={note.id}
              className="mt-4 p-2 border-2 border-white hover:border-emerald-600 shadow-xl rounded-xl cursor-pointer lg:h-[150px] lg:w-[200px] overflow-hidden"
            >
              <p className=" font-semibold tracking-wider my-2">{note.title}</p>
              <Preview value={note.content} />
            </Link>
          ))}

        {title === "Images" &&
          images.map((image) => (
            <Link
              href={`/${topicId}/${title.toLowerCase()}/${image.id}`}
              key={image.id}
              className="border-2 border-white hover:border-emerald-600 shadow-xl rounded-xl text-sm cursor-pointer h-[180px] w-[180px]"
            >
              <div className="flex flex-col p-2">
                <p className="pb-2">{image.description}</p>
                <Image
                  src={image.imageUrl}
                  alt={image.id}
                  width={80}
                  height={80}
                  className=" w-full h-[80%] rounded-xl"
                />
              </div>
            </Link>
          ))}

        {title === "Links" &&
          links.map((link) => (
            <Link
              href={`/${topicId}/${title.toLowerCase()}/${link.id}`}
              key={link.id}
              className="p-4 border-2 border-white hover:border-emerald-600 shadow-xl rounded-xl text-sm cursor-pointer"
            >
              {link.url}
            </Link>
          ))}

        {title === "Attachments" &&
          attachments.map((attachment) => (
            <Link
              href={`/${topicId}/${title.toLowerCase()}/${attachment.id}`}
              key={attachment.id}
              className="p-4 border-2 border-white hover:border-emerald-600 shadow-xl rounded-xl text-sm cursor-pointer"
            >
              {attachment.fileUrl}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopicSection;
