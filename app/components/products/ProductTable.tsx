import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import ProductItem from "./ProductItem"
import { Producto } from "@prisma/client"

export default async function ProductTable(): Promise<React.ReactElement> {
	const products = await fetch("http://localhost:3000/api/products")
		.then((response) => response.json())
		.then((data) => data.body.products as Producto[])

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
				{products.map((product) => (
					<ProductItem key={product.id} {...product} estado="Activo" />
				))}
			</TableBody>
		</Table>
	)
}
