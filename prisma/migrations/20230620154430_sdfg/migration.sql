/*
  Warnings:

  - You are about to drop the column `authorId` on the `Event` table. All the data in the column will be lost.
  - Added the required column `eventAuthorId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_authorId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "authorId",
ADD COLUMN     "eventAuthorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "EntityHasEvent" (
    "id" TEXT NOT NULL,
    "authorId" TEXT,
    "organizationAuthorId" TEXT,

    CONSTRAINT "EntityHasEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_eventAuthorId_fkey" FOREIGN KEY ("eventAuthorId") REFERENCES "EntityHasEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntityHasEvent" ADD CONSTRAINT "EntityHasEvent_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "OrganizationMember"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntityHasEvent" ADD CONSTRAINT "EntityHasEvent_organizationAuthorId_fkey" FOREIGN KEY ("organizationAuthorId") REFERENCES "Organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
