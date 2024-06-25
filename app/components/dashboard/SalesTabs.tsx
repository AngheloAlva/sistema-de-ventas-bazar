import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/app/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Button } from "../ui/button"
import { File } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

export default function SalesTabs(): React.ReactElement {
	return (
		<Tabs defaultValue="week">
			<div className="flex items-center">
				<TabsList>
					<TabsTrigger value="week">Semana</TabsTrigger>
					<TabsTrigger value="month">Mes</TabsTrigger>
				</TabsList>
				<div className="ml-auto flex items-center gap-2">
					<Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
						<File className="h-3.5 w-3.5" />
						<span>Exportar</span>
					</Button>
				</div>
			</div>
			<TabsContent value="week">
				<Card x-chunk="dashboard-05-chunk-3">
					<CardHeader className="px-7">
						<CardTitle>Orders</CardTitle>
						<CardDescription>Recent orders from your store.</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Customer</TableHead>
									<TableHead className="hidden sm:table-cell">Type</TableHead>
									<TableHead className="hidden sm:table-cell">Status</TableHead>
									<TableHead className="hidden md:table-cell">Date</TableHead>
									<TableHead className="text-right">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow className="bg-accent">
									<TableCell>
										<div className="font-medium">Liam Johnson</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											liam@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Sale</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="secondary">
											Fulfilled
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-23</TableCell>
									<TableCell className="text-right">$250.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Olivia Smith</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											olivia@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Refund</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="outline">
											Declined
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-24</TableCell>
									<TableCell className="text-right">$150.00</TableCell>
								</TableRow>
								{/* <TableRow>
                          <TableCell>
                            <div className="font-medium">Liam Johnson</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              liam@example.com
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Sale
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Fulfilled
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            2023-06-23
                          </TableCell>
                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow> */}
								<TableRow>
									<TableCell>
										<div className="font-medium">Noah Williams</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											noah@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Subscription</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="secondary">
											Fulfilled
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-25</TableCell>
									<TableCell className="text-right">$350.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Emma Brown</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											emma@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Sale</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="secondary">
											Fulfilled
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-26</TableCell>
									<TableCell className="text-right">$450.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Liam Johnson</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											liam@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Sale</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="secondary">
											Fulfilled
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-23</TableCell>
									<TableCell className="text-right">$250.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Olivia Smith</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											olivia@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Refund</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="outline">
											Declined
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-24</TableCell>
									<TableCell className="text-right">$150.00</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className="font-medium">Emma Brown</div>
										<div className="hidden text-sm text-muted-foreground md:inline">
											emma@example.com
										</div>
									</TableCell>
									<TableCell className="hidden sm:table-cell">Sale</TableCell>
									<TableCell className="hidden sm:table-cell">
										<Badge className="text-xs" variant="secondary">
											Fulfilled
										</Badge>
									</TableCell>
									<TableCell className="hidden md:table-cell">2023-06-26</TableCell>
									<TableCell className="text-right">$450.00</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	)
}
