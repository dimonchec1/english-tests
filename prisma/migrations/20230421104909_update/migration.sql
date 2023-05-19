-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "token" VARCHAR(255),
ALTER COLUMN "routePath" DROP NOT NULL;
