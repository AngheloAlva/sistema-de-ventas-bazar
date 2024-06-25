import { TooltipProvider } from "./components/ui/tooltip"
import { inter } from "./config/fonts"
import type { Metadata } from "next"
import "./globals.css"
import { Aside, SideMenu } from "./components/sideMenu"

export const metadata: Metadata = {
	title: "Los monitos de la Nona",
	description: "Sistema de ventas para bazar",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): React.ReactElement {
	return (
		<html lang="es">
			<body className={inter.className}>
				<TooltipProvider>
					<div className="flex min-h-screen w-full flex-col bg-muted/40">
						<Aside />
						<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
							<SideMenu />
							{children}
						</div>
					</div>
				</TooltipProvider>
			</body>
		</html>
	)
}
