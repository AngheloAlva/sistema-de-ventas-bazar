import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

export default function AmountCard({ amount, increase }: AmountCardProps): React.ReactElement {
	return (
		<Card x-chunk="dashboard-05-chunk-1">
			<CardHeader className="pb-2">
				<CardDescription>Esta semana</CardDescription>
				<CardTitle className="text-4xl">${amount}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-xs text-muted-foreground">
					{increase > 0 ? "+" + increase : increase}% desde la semana pasada
				</div>
			</CardContent>
			<CardFooter>
				<Progress value={increase} aria-label={`${increase}% increase`} />
			</CardFooter>
		</Card>
	)
}

interface AmountCardProps {
	amount: number
	increase: number
}
