/*
  Warnings:

  - You are about to drop the column `categoria` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_ingreso` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_vencimiento` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `marca` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `proveedor` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the `Detalle_venta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ventas` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[SKU]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `valorUnitario` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TIPO_DOCUMENTO" AS ENUM ('BOLETA', 'FACTURA');

-- DropForeignKey
ALTER TABLE "Detalle_venta" DROP CONSTRAINT "Detalle_venta_id_fkey";

-- DropForeignKey
ALTER TABLE "Ventas" DROP CONSTRAINT "Ventas_personaId_fkey";

-- DropForeignKey
ALTER TABLE "Ventas" DROP CONSTRAINT "Ventas_userId_fkey";

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "categoria",
DROP COLUMN "fecha_ingreso",
DROP COLUMN "fecha_vencimiento",
DROP COLUMN "marca",
DROP COLUMN "proveedor",
ADD COLUMN     "fechaVencimiento" TIMESTAMP(3),
ADD COLUMN     "valorUnitario" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Detalle_venta";

-- DropTable
DROP TABLE "Persona";

-- DropTable
DROP TABLE "Ventas";

-- CreateTable
CREATE TABLE "Venta" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "tipoDocumento" "TIPO_DOCUMENTO" NOT NULL,
    "totalNeto" DOUBLE PRECISION NOT NULL,
    "tipo_pago" "TIPO_PAGO" NOT NULL,
    "iva" DOUBLE PRECISION NOT NULL,
    "totalFinal" DOUBLE PRECISION NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "clienteId" TEXT,
    "diaVentaId" TEXT NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleVenta" (
    "id" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "totalProducto" DOUBLE PRECISION NOT NULL,
    "productoId" TEXT NOT NULL,
    "ventaId" TEXT NOT NULL,

    CONSTRAINT "DetalleVenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rut" TEXT NOT NULL,
    "razonSocial" TEXT,
    "direccion" TEXT,
    "telefono" TEXT,
    "fecha_nacimiento" TIMESTAMP(3),

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiaVentas" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "abierto" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DiaVentas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_rut_key" ON "Cliente"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "DiaVentas_fecha_key" ON "DiaVentas"("fecha");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_SKU_key" ON "Producto"("SKU");

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_diaVentaId_fkey" FOREIGN KEY ("diaVentaId") REFERENCES "DiaVentas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleVenta" ADD CONSTRAINT "DetalleVenta_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleVenta" ADD CONSTRAINT "DetalleVenta_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
