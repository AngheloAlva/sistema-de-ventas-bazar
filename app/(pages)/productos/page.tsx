import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import AddProductButton from "@/app/components/products/AddProductButton"
import FilterButton from "@/app/components/products/FilterButton"
import { ProductTable } from "@/app/components/products"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card"

export default function ProductPage(): React.ReactElement {
	return (
		<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<Tabs defaultValue="all">
				<div className="flex items-center">
					<TabsList>
						<TabsTrigger value="all">Todos</TabsTrigger>
						<TabsTrigger value="active">Activos</TabsTrigger>
						<TabsTrigger value="draft">Inactivos</TabsTrigger>
					</TabsList>
					<div className="ml-auto flex items-center gap-2">
						<FilterButton />
						<AddProductButton />
					</div>
				</div>
				<TabsContent value="all">
					<Card x-chunk="dashboard-06-chunk-0">
						<CardHeader>
							<CardTitle>Productos</CardTitle>
							<CardDescription>Administra los productos de Los Monitos de la Nona</CardDescription>
						</CardHeader>
						<CardContent>
							<ProductTable />
						</CardContent>
						<CardFooter>
							<div className="text-xs text-muted-foreground">
								Mostrando <strong>1-10</strong> de <strong>32</strong> productos
							</div>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</main>
	)
}
