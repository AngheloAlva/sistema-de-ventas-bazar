import { ROL, TIPO_DOCUMENTO, TIPO_PAGO } from "@prisma/client"
import prisma from "../lib/prisma"
import bcrypt from "bcryptjs"

async function main() {
	console.log("Seeding...")

	await prisma.usuario.deleteMany()
	await prisma.producto.deleteMany()
	await prisma.cliente.deleteMany()
	await prisma.venta.deleteMany()
	await prisma.diaVentas.deleteMany()

	// Crear Usuarios
	await prisma.usuario.create({
		data: {
			nombre: "Admin",
			contrasena: bcrypt.hashSync("admin123"),
			direccion: "123 Main St",
			telefono: "123456789",
			rut: "12345678-9",
			fecha_nacimiento: new Date("1980-01-01"),
			rol: ROL.ADMIN,
		},
	})

	await prisma.usuario.create({
		data: {
			nombre: "Jefe de Ventas",
			contrasena: bcrypt.hashSync("jefe123"),
			direccion: "456 Market St",
			telefono: "987654321",
			rut: "98765432-1",
			fecha_nacimiento: new Date("1985-01-01"),
			rol: ROL.JEFE_VENTAS,
		},
	})

	const vendedor = await prisma.usuario.create({
		data: {
			nombre: "Vendedor",
			contrasena: bcrypt.hashSync("vendedor123"),
			direccion: "789 Broadway",
			telefono: "555555555",
			rut: "55555555-5",
			fecha_nacimiento: new Date("1990-01-01"),
			rol: ROL.VENDEDOR,
		},
	})

	// Crear Productos
	const producto1 = await prisma.producto.create({
		data: {
			nombre: "Producto 1",
			SKU: "SKU001",
			valorUnitario: 1000,
			stock: 50,
			fechaVencimiento: new Date("2024-12-31"),
			descripcion: "Producto 1 Descripcion",
			imagen: "https://via.placeholder.com/150",
			precio: 1000,
		},
	})

	const producto2 = await prisma.producto.create({
		data: {
			nombre: "Producto 2",
			SKU: "SKU002",
			valorUnitario: 2000,
			stock: 30,
			fechaVencimiento: new Date("2023-12-31"),
			descripcion: "Producto 2 Descripcion",
			imagen: "https://via.placeholder.com/150",
			precio: 2000,
		},
	})

	// Crear Clientes
	const cliente1 = await prisma.cliente.create({
		data: {
			nombre: "Cliente 1",
			rut: "12345678-0",
			razonSocial: "Empresa 1",
			direccion: "Calle 123",
			telefono: "123456789",
		},
	})

	await prisma.cliente.create({
		data: {
			nombre: "Cliente 2",
			rut: "87654321-0",
			razonSocial: "Empresa 2",
			direccion: "Avenida 456",
			telefono: "987654321",
		},
	})

	const diaVenta = await prisma.diaVentas.create({
		data: {
			fecha: new Date(),
			abierto: true,
		},
	})

	// Crear Venta
	await prisma.venta.create({
		data: {
			fecha: new Date(),
			tipoDocumento: TIPO_DOCUMENTO.BOLETA,
			tipo_pago: TIPO_PAGO.EFECTIVO,
			diaVenta: { connect: { id: diaVenta.id } },
			totalNeto: 3000,
			iva: 570,
			totalFinal: 3570,
			usuario: { connect: { id: vendedor.id } },
			detalleVentas: {
				create: [
					{
						cantidad: 2,
						precioUnitario: 1000,
						totalProducto: 2000,
						producto: { connect: { id: producto1.id } },
					},
					{
						cantidad: 1,
						precioUnitario: 2000,
						totalProducto: 2000,
						producto: { connect: { id: producto2.id } },
					},
				],
			},
		},
	})

	await prisma.venta.create({
		data: {
			fecha: new Date(),
			tipoDocumento: TIPO_DOCUMENTO.FACTURA,
			totalNeto: 2000,
			tipo_pago: TIPO_PAGO.TARJETA,
			diaVenta: { connect: { id: diaVenta.id } },
			iva: 380,
			totalFinal: 2380,
			usuario: { connect: { id: vendedor.id } },
			cliente: { connect: { id: cliente1.id } },
			detalleVentas: {
				create: [
					{
						cantidad: 1,
						precioUnitario: 2000,
						totalProducto: 2000,
						producto: { connect: { id: producto2.id } },
					},
				],
			},
		},
	})

	console.log("Seeding complete")
}

;(() => {
	if (process.env.NODE_ENV === "production") return

	main()
})()
