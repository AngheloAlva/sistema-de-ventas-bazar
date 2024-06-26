import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

interface Segments {
	params: {
		id: string
	}
}

export async function GET(req: Request, { params }: Segments) {
	try {
		const sale = await prisma.venta.findUnique({
			where: { id: params.id },
			include: {
				cliente: true,
				usuario: true,
				detalleVentas: {
					include: {
						producto: true,
					},
				},
			},
		})

		if (!sale) {
			return NextResponse.json({
				status: 404,
				body: { message: "Sale not found" },
			})
		}

		return NextResponse.json({
			status: 200,
			body: { sale },
		})
	} catch (error) {
		return NextResponse.json({
			status: 500,
			body: { message: "Internal server error" },
		})
	}
}
