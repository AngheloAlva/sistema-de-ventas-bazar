import { AmountCard, SaleDetailCard, SalesTabs } from "../components/dashboard"
import { Aside, SideMenu } from "../components/sideMenu"

export default function HomePage() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-muted/40">
			<Aside />
			<div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<SideMenu />
				<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
					<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
						<div className="grid gap-4 sm:grid-cols-2">
							<AmountCard amount={1923} increase={23} />
						</div>
						<SalesTabs />
					</div>
					<div>
						<SaleDetailCard />
					</div>
				</main>
			</div>
		</div>
	)
}
