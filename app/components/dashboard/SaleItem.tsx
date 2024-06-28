import { TableCell, TableRow } from "../ui/table"

import type { Cliente, User } from "@prisma/client"

export default function SaleItem({
	id,
	iva,
	fecha,
	usuario,
	cliente,
	totalNeto,
	totalFinal,
	tipoDocumento,
	handleSaleSelect,
}: SaleItemProps): React.ReactElement {
	return (
		<TableRow className="cursor-pointer hover:bg-gray-100" onClick={() => handleSaleSelect(id)}>
			<TableCell>
				<div className="font-medium">{cliente?.nombre}</div>
				<div className="hidden text-sm text-muted-foreground md:inline">{cliente?.rut}</div>
			</TableCell>
			<TableCell className="hidden sm:table-cell">{tipoDocumento}</TableCell>
			<TableCell className="hidden sm:table-cell">
				{totalFinal.toLocaleString("es-CL", {
					style: "currency",
					currency: "CLP",
				})}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{totalNeto.toLocaleString("es-CL", {
					style: "currency",
					currency: "CLP",
				})}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{iva.toLocaleString("es-CL", {
					style: "currency",
					currency: "CLP",
				})}
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{new Date(fecha).toLocaleDateString("es-CL")}
			</TableCell>
			<TableCell className="hidden md:table-cell">{usuario?.name}</TableCell>
		</TableRow>
	)
}

interface SaleItemProps {
	id: string
	cliente: Cliente
	tipoDocumento: string
	totalFinal: number
	totalNeto: number
	iva: number
	fecha: Date
	usuario: User
	handleSaleSelect: (saleId: string) => void
}
