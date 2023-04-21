/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TestTemplate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_authorId_fkey";

-- DropForeignKey
ALTER TABLE "TestTemplate" DROP CONSTRAINT "TestTemplate_authorId_fkey";

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "TestTemplate";

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "description" VARCHAR(4000) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "durationTime" SMALLINT NOT NULL,
    "authorId" TEXT NOT NULL,
    "isPublished" BOOLEAN,
    "publishedAt" TIMESTAMP NOT NULL,
    "unpublishedAt" TIMESTAMP NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Event_authorId_idx" ON "Event"("authorId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
