/*
  Warnings:

  - You are about to drop the column `published` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `posts` DROP COLUMN `published`,
    ADD COLUMN `published_at` DATETIME(3) NULL;
