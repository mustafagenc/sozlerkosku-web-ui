/*
  Warnings:

  - Added the required column `hiddenSubscriberCount` to the `YoutubeChannels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoCount` to the `YoutubeChannels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewCount` to the `YoutubeChannels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "YoutubeChannels" ADD COLUMN     "hiddenSubscriberCount" BOOLEAN NOT NULL,
ADD COLUMN     "videoCount" INTEGER NOT NULL,
ADD COLUMN     "viewCount" INTEGER NOT NULL;
