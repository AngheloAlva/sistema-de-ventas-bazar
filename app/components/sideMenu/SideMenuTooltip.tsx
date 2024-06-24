import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"

export default function SideMenuTooltip({
	href,
	icon,
	label,
}: SideMenuTooltipProps): React.ReactElement {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Link
					href={href}
					className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
				>
					{icon}
				</Link>
			</TooltipTrigger>
			<TooltipContent side="right">{label}</TooltipContent>
		</Tooltip>
	)
}

interface SideMenuTooltipProps {
	icon: React.ReactNode
	label: string
	href: string
}
