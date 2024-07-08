import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  topicCoverImage: f({
    image: { maxFileSize: "1GB", maxFileCount: 1 },
  }).onUploadComplete(() => {}),
  topicImage: f({ image: { maxFileSize: "1GB" } }).onUploadComplete(() => {}),
  topicAttachment: f([
    "text",
    "image",
    // "video",
    "audio",
    "pdf",
  ]).onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
