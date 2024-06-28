import { Copy, CreditCard, MoreVertical } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Skeleton } from "../ui/skeleton"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function SaleDetailCardSkeleton(): React.ReactElement {
	return (
		<Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
			<CardHeader className="flex flex-row items-start bg-muted/50">
				<div className="grid gap-0.5">
					<CardTitle className="group flex items-center gap-2 text-lg">
						Venta ID: <Skeleton className="h-4 w-12" />
						<Button
							size="icon"
							variant="outline"
							className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<Copy className="h-3 w-3" />
							<span className="sr-only">Copiar ID de venta</span>
						</Button>
					</CardTitle>
					<div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
						Fecha: <Skeleton className="h-3 w-24" />
					</div>
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
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">
								<Skeleton className="h-4 w-24" />
								<span>x</span>
								<Skeleton className="h-4 w-8" />
							</span>
							<span>
								<Skeleton className="h-4 w-24" />
							</span>
						</li>
					</ul>
					<Separator className="my-2" />
					<ul className="grid gap-3">
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Subtotal</span>
							<span>
								<Skeleton className="h-4 w-24" />
							</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">IVA</span>
							<span>
								<Skeleton className="h-4 w-24" />
							</span>
						</li>
						<li className="flex items-center justify-between font-semibold">
							<span className="text-muted-foreground">Total</span>
							<span>
								<Skeleton className="h-4 w-24" />
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
							<dd>
								<Skeleton className="h-4 w-24" />
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">RUT</dt>
							<dd>
								<Skeleton className="h-4 w-24" />
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Telefono</dt>
							<dd>
								<Skeleton className="h-4 w-24" />
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Direccion</dt>
							<dd>
								<Skeleton className="h-4 w-24" />
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Razon Social</dt>
							<dd>
								<Skeleton className="h-4 w-24" />
							</dd>
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
								<Skeleton className="h-4 w-24" />
							</dt>
						</div>
					</dl>
				</div>
			</CardContent>
		</Card>
	)
}
