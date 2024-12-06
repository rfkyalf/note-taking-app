-- CreateEnum
CREATE TYPE "NoteCategory" AS ENUM ('HOME', 'JOB', 'PERSONAL');

-- CreateTable
CREATE TABLE "Private_Note" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" TEXT NOT NULL,
    "category" "NoteCategory" NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Private_Note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Public_Note" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Public_Note_pkey" PRIMARY KEY ("id")
);
