import { TooltipProvider } from "./components/ui/tooltip"
import { inter } from "./config/fonts"
import type { Metadata } from "next"
import "./globals.css"

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
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	)
}
