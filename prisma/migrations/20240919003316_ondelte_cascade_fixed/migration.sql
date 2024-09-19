-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Recently_Deleted_Image" DROP CONSTRAINT "Recently_Deleted_Image_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Recently_Deleted_Note" DROP CONSTRAINT "Recently_Deleted_Note_topicId_fkey";

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recently_Deleted_Note" ADD CONSTRAINT "Recently_Deleted_Note_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recently_Deleted_Image" ADD CONSTRAINT "Recently_Deleted_Image_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
