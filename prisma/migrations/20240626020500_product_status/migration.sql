/*
  Warnings:

  - You are about to drop the column `precio` on the `Producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "precio",
ADD COLUMN     "estado" BOOLEAN NOT NULL DEFAULT true;
