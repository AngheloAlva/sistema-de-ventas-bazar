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

export default function ProductItem(): React.ReactElement {
	return (
		<TableRow>
			<TableCell className="hidden sm:table-cell">
				<Image
					alt="Product image"
					className="aspect-square rounded-md object-cover"
					height="64"
					src="/placeholder.svg"
					width="64"
				/>
			</TableCell>
			<TableCell className="font-medium">Laser Lemonade Machine</TableCell>
			<TableCell>
				<Badge variant="outline">Draft</Badge>
			</TableCell>
			<TableCell>$499.99</TableCell>
			<TableCell className="hidden md:table-cell">25</TableCell>
			<TableCell className="hidden md:table-cell">2023-07-12 10:42 AM</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button aria-haspopup="true" size="icon" variant="ghost">
							<MoreHorizontal className="h-4 w-4" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	)
}
