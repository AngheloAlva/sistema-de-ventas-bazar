import { TableCell, TableRow } from "../ui/table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import Image from "next/image"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function ProductItem({
	SKU,
	descripcion,
	fechaVencimiento,
	imagen,
	nombre,
	stock,
	valorUnitario,
	estado,
}: ProductItemProps): React.ReactElement {
	return (
		<TableRow>
			<TableCell className="hidden sm:table-cell">
				<Image
					src={`/imgs/products${imagen}`}
					alt={nombre}
					height="64"
					width="64"
					className="aspect-square rounded-md object-cover"
				/>
			</TableCell>
			<TableCell className="font-medium">{SKU}</TableCell>
			<TableCell className="font-medium">{nombre}</TableCell>
			<TableCell>
				<Badge variant="outline">{estado ? "Activo" : "Inactivo"}</Badge>
			</TableCell>
			<TableCell>${valorUnitario.toLocaleString("es-Cl")}</TableCell>
			<TableCell className="hidden md:table-cell">{stock}</TableCell>
			<TableCell className="hidden md:table-cell">
				{fechaVencimiento ? fechaVencimiento.toString() : "Sin fecha de vencimiento"}
			</TableCell>
			<TableCell className="hidden lg:table-cell">{descripcion}</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button aria-haspopup="true" size="icon" variant="ghost">
							<MoreHorizontal className="h-4 w-4" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Acciones</DropdownMenuLabel>
						<DropdownMenuItem>Editar</DropdownMenuItem>
						<DropdownMenuItem>Eliminar</DropdownMenuItem>
						{estado ? (
							<DropdownMenuItem>Desactivar</DropdownMenuItem>
						) : (
							<DropdownMenuItem>Activar</DropdownMenuItem>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	)
}

interface ProductItemProps {
	imagen: string
	nombre: string
	descripcion: string
	SKU: string
	valorUnitario: number
	stock: number
	fechaVencimiento: Date | null
	estado: boolean
}
