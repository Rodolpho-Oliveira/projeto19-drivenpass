/*
  Warnings:

  - Added the required column `label` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "credentials" ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
