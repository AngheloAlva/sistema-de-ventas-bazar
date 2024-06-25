import { PlusCircle } from "lucide-react"
import { Button } from "../ui/button"

export default function AddProductButton(): React.ReactElement {
	return (
		<Button size="sm" className="h-7 gap-1">
			<PlusCircle className="h-3.5 w-3.5" />
			<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Agregar Producto</span>
		</Button>
	)
}
