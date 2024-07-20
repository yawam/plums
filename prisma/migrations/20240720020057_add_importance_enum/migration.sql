-- CreateEnum
CREATE TYPE "Importance" AS ENUM ('NONE', 'LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "importance" "Importance";
