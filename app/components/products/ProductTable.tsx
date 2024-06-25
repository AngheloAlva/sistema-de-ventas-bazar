import Image from "next/image"
import { MoreHorizontal } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/app/components/ui/table"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import ProductItem from "./ProductItem"

export default function ProductTable(): React.ReactElement {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="hidden w-[100px] sm:table-cell">
						<span className="sr-only">Imagen</span>
					</TableHead>
					<TableHead>Nombre</TableHead>
					<TableHead>Estado</TableHead>
					<TableHead>Precio</TableHead>
					<TableHead className="hidden md:table-cell">Ventas totales</TableHead>
					<TableHead className="hidden md:table-cell">Creado en</TableHead>
					<TableHead>
						<span className="sr-only">Acciones</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<ProductItem />
			</TableBody>
		</Table>
	)
}
