import { Producto, ROL, TIPO_DOCUMENTO, TIPO_PAGO } from "@prisma/client"
import prisma from "../lib/prisma"
import bcrypt from "bcryptjs"

const productos = [
	{
		nombre: "Cuaderno Universitario",
		descripcion: "Cuaderno universitario de 100 hojas",
		estado: true,
		imagen: "/cuaderno.webp",
		SKU: "SKU001",
		valorUnitario: 2500,
		stock: 100,
		fechaVencimiento: new Date("2025-01-01"),
	},
	{
		nombre: "Lápiz Pasta Azul",
		descripcion: "Lápiz pasta azul de punta fina",
		estado: true,
		imagen: "/lapiz.webp",
		SKU: "SKU004",
		valorUnitario: 500,
		stock: 200,
		fechaVencimiento: new Date("2024-01-01"),
	},
	{
		nombre: "Borrador de Goma",
		descripcion: "Borrador de goma de 5cm x 2cm",
		estado: true,
		imagen: "/borrador.webp",
		SKU: "SKU005",
		valorUnitario: 300,
		stock: 150,
		fechaVencimiento: new Date("2024-12-31"),
	},
	{
		nombre: "Regla 30cm",
		descripcion: "Regla de 30cm de plástico",
		estado: true,
		imagen: "/regla.webp",
		SKU: "SKU006",
		valorUnitario: 700,
		stock: 80,
		fechaVencimiento: new Date("2024-01-01"),
	},
	{
		nombre: "Tijeras",
		descripcion: "Tijeras de punta redonda",
		estado: true,
		imagen: "/tijeras.webp",
		SKU: "SKU007",
		valorUnitario: 1500,
		stock: 60,
		fechaVencimiento: new Date("2024-12-31"),
	},
	{
		nombre: "Resaltador Amarillo",
		descripcion: "Resaltador amarillo de punta biselada",
		estado: true,
		imagen: "/resaltador.webp",
		SKU: "SKU008",
		valorUnitario: 800,
		stock: 90,
		fechaVencimiento: new Date("2025-01-01"),
	},
	{
		nombre: "Corrector Líquido",
		descripcion: "Corrector líquido de 20ml",
		estado: true,
		imagen: "/corrector.webp",
		SKU: "SKU009",
		valorUnitario: 1200,
		stock: 70,
		fechaVencimiento: new Date("2025-01-01"),
	},
	{
		nombre: "Bolsa de Lápices de Colores",
		descripcion: "Bolsa de 12 lápices de colores",
		estado: true,
		imagen: "/lapices.webp",
		SKU: "SKU010",
		valorUnitario: 4500,
		stock: 50,
		fechaVencimiento: new Date("2024-01-01"),
	},
]

async function main() {
	console.log("Seeding...")

	await prisma.detalleVenta.deleteMany()
	await prisma.venta.deleteMany()
	await prisma.diaVentas.deleteMany()
	await prisma.cliente.deleteMany()
	await prisma.usuario.deleteMany()
	await prisma.producto.deleteMany()

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
			nombre: "Pegamento en Barra",
			descripcion: "Pegamento en barra de 40g",
			estado: false,
			imagen: "/pegamento.webp",
			SKU: "SKU011",
			valorUnitario: 1000,
			stock: 120,
			fechaVencimiento: new Date("2025-01-01"),
		},
	})

	const producto2 = await prisma.producto.create({
		data: {
			nombre: "Cartulina Blanca",
			descripcion: "Cartulina blanca tamaño carta",
			estado: true,
			imagen: "/cartulina.webp",
			SKU: "SKU012",
			valorUnitario: 100,
			stock: 500,
			fechaVencimiento: new Date("2025-01-01"),
		},
	})

	productos.forEach(async (producto) => {
		await prisma.producto.create({
			data: producto,
		})
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
