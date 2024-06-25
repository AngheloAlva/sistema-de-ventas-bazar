import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

export async function GET(req: Request) {
	try {
		const products = await prisma.producto.findMany()

		return NextResponse.json({
			status: 200,
			body: { products },
		})
	} catch (error) {
		return NextResponse.json({
			status: 500,
			body: { message: "Internal server error" },
		})
	}
}
