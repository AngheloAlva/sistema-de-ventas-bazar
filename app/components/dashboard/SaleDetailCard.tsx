import { ChevronLeft, ChevronRight, Copy, CreditCard, MoreVertical, Truck } from "lucide-react"
import { Pagination, PaginationContent, PaginationItem } from "@/app/components/ui/pagination"
import { Separator } from "@/app/components/ui/separator"
import { Button } from "@/app/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"

import type { VentaByIdResponse, VentaResponse } from "../../interfaces/interfaces"
import { useEffect, useState } from "react"

export default function SaleDetailCard({ saleId }: SaleDetailCardProps): React.ReactElement {
	const [sale, setSale] = useState<VentaByIdResponse | undefined>(undefined)

	useEffect(() => {
		const fetchSale = async () => {
			if (!saleId) return

			const response = await fetch(`/api/sales/${saleId}`)
				.then((res) => res.json())
				.then((data) => data.body.sale)

			setSale(response)
		}

		fetchSale()
	}, [saleId])

	return (
		<Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
			<CardHeader className="flex flex-row items-start bg-muted/50">
				<div className="grid gap-0.5">
					<CardTitle className="group flex items-center gap-2 text-lg">
						Venta {sale?.id}
						<Button
							size="icon"
							variant="outline"
							className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<Copy className="h-3 w-3" />
							<span className="sr-only">Copiar ID de venta</span>
						</Button>
					</CardTitle>
					<CardDescription>
						Fecha:{" "}
						{new Date(sale?.fecha as Date).toLocaleDateString("es-CL", {
							dateStyle: "full",
						})}
					</CardDescription>
				</div>
				<div className="ml-auto flex items-center gap-1">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button size="icon" variant="outline" className="h-8 w-8">
								<MoreVertical className="h-3.5 w-3.5" />
								<span className="sr-only">Mas</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem>Edit</DropdownMenuItem>
							<DropdownMenuItem>Export</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Trash</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>
			<CardContent className="p-6 text-sm">
				<div className="grid gap-3">
					<div className="font-semibold">Detalles de venta</div>
					<ul className="grid gap-3">
						{sale?.detalleVentas.map((detalle) => (
							<li key={detalle.id} className="flex items-center justify-between">
								<span className="text-muted-foreground">
									{detalle.producto.nombre} x <span>{detalle.cantidad}</span>
								</span>
								<span>
									{detalle.precioUnitario.toLocaleString("es-CL", {
										style: "currency",
										currency: "CLP",
									})}
								</span>
							</li>
						))}
					</ul>
					<Separator className="my-2" />
					<ul className="grid gap-3">
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Subtotal</span>
							<span>
								{sale?.totalNeto.toLocaleString("es-CL", {
									style: "currency",
									currency: "CLP",
								})}
							</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">IVA</span>
							<span>
								{sale?.iva.toLocaleString("es-CL", {
									style: "currency",
									currency: "CLP",
								})}
							</span>
						</li>
						<li className="flex items-center justify-between font-semibold">
							<span className="text-muted-foreground">Total</span>
							<span>
								{sale?.totalFinal.toLocaleString("es-CL", {
									style: "currency",
									currency: "CLP",
								})}
							</span>
						</li>
					</ul>
				</div>
				<Separator className="my-4" />
				<div className="grid gap-3">
					<div className="font-semibold">Informacion del Cliente</div>
					<dl className="grid gap-3">
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Nombre</dt>
							<dd>{sale?.cliente.nombre}</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">RUT</dt>
							<dd>{sale?.cliente.rut}</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Telefono</dt>
							<dd>{sale?.cliente.telefono}</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Direccion</dt>
							<dd>{sale?.cliente.direccion}</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Razon Social</dt>
							<dd>{sale?.cliente.razonSocial}</dd>
						</div>
					</dl>
				</div>
				<Separator className="my-4" />
				<div className="grid gap-3">
					<div className="font-semibold">Informacion de Venta</div>
					<dl className="grid gap-3">
						<div className="flex items-center justify-between">
							<dt className="flex items-center gap-1 text-muted-foreground">
								<CreditCard className="h-4 w-4" />
								{sale?.tipo_pago}
							</dt>
							{sale?.tipo_pago === "TARJETA" && <dd>**** **** **** 4532</dd>}
						</div>
					</dl>
				</div>
			</CardContent>
		</Card>
	)
}

interface SaleDetailCardProps {
	saleId: string | undefined
}
