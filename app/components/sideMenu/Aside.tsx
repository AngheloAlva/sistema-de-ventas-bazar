import { Home, LineChart, Package, Package2, ShoppingCart, Users2 } from "lucide-react"
import SideMenuTooltip from "./SideMenuTooltip"

export default function Aside(): React.ReactElement {
	return (
		<aside className="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
				<div className="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base">
					<Package2 className="h-4 w-4 transition-all" />
					<span className="sr-only">Acme Inc</span>
				</div>
				<SideMenuTooltip label="Dashboard" href="/" icon={<Home className="h-5 w-5" />} />
				<SideMenuTooltip
					label="Orders"
					href="/orders"
					icon={<ShoppingCart className="h-5 w-5" />}
				/>
				<SideMenuTooltip label="Products" href="/products" icon={<Package className="h-5 w-5" />} />
				<SideMenuTooltip
					label="Customers"
					href="/customers"
					icon={<Users2 className="h-5 w-5" />}
				/>
				<SideMenuTooltip
					label="Analytics"
					href="/analytics"
					icon={<LineChart className="h-5 w-5" />}
				/>
			</nav>
		</aside>
	)
}
