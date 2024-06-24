import { Home, Package, Package2, PanelLeft, ShoppingCart, Users2 } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import UserDropDown from "./UserDropDown"
import SideMenuItem from "./SideMenuItem"
import { Button } from "../ui/button"

export default function Header(): React.ReactElement {
	return (
		<header className="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
			<Sheet>
				<SheetTrigger asChild>
					<Button size="icon" variant="outline" className="sm:hidden">
						<PanelLeft className="h-5 w-5" />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="sm:max-w-xs">
					<nav className="grid gap-6 text-lg font-medium">
						<div className="bg-primary text-primary-foreground flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base">
							<Package2 className="h-5 w-5 transition-all" />
						</div>
						<SideMenuItem href="/" icon={<Home className="h-5 w-5" />} label="Dashboard" />
						<SideMenuItem
							href="/orders"
							icon={<ShoppingCart className="h-5 w-5" />}
							label="Orders"
						/>
						<SideMenuItem
							href="/products"
							icon={<Package className="h-5 w-5" />}
							label="Products"
						/>
						<SideMenuItem
							href="/customers"
							icon={<Users2 className="h-5 w-5" />}
							label="Customers"
						/>
					</nav>
				</SheetContent>
			</Sheet>
			<div className="relative ml-auto flex-1 md:grow-0" />
			<UserDropDown />
		</header>
	)
}
