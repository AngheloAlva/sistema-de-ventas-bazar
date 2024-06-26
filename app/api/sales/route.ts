import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
	try {
		const sales = await prisma.venta.findMany({
			include: {
				cliente: true,
				usuario: true,
			},
		})

		return NextResponse.json({
			status: 200,
			body: { sales },
		})
	} catch (error) {
		return NextResponse.json({
			status: 500,
			body: { message: "Internal server error" },
		})
	}
}
