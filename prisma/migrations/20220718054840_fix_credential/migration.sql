/*
  Warnings:

  - You are about to drop the column `label` on the `credentials` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `credentials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "credentials" DROP COLUMN "label",
DROP COLUMN "name";
