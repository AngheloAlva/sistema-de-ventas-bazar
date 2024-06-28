import type { Cliente, Producto, User } from "@prisma/client"

export interface VentaResponse {
	id: string
	fecha: Date
	tipoDocumento: string
	totalNeto: number
	tipo_pago: string
	iva: number
	totalFinal: number
	usuario: User
	usuarioId: string
	cliente: Cliente
	clienteId: string
	diaVentaId: string
}

export interface VentaByIdResponse {
	id: string
	fecha: Date
	tipoDocumento: string
	totalNeto: number
	tipo_pago: string
	iva: number
	totalFinal: number
	usuario: User
	usuarioId: string
	cliente: Cliente
	clienteId: string
	diaVentaId: string
	detalleVentas: DetalleVenta[]
}

interface DetalleVenta {
	id: string
	cantidad: number
	precioUnitario: number
	totalProducto: number
	producto: Producto
	productoId: string
	ventaId: string
}
