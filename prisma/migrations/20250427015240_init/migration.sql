-- CreateTable
CREATE TABLE "YoutubeChannels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "subscribers" INTEGER NOT NULL,

    CONSTRAINT "YoutubeChannels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YoutubeChannels_name_key" ON "YoutubeChannels"("name");
