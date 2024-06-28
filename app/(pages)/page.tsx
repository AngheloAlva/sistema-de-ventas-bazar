"use client"

import {
	SaleDetailCard,
	SaleDetailCardSkeleton,
	SalesTabs,
	SalesTabsSkeleton,
} from "../components/dashboard"
import { useEffect, useState } from "react"

import type { VentaResponse } from "../interfaces/interfaces"

export default function HomePage() {
	const [sales, setSales] = useState<VentaResponse[]>([])
	const [selectedSale, setSelectedSale] = useState<string | undefined>(undefined)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchSales = async () => {
			const response = await fetch("/api/sales")
				.then((res) => res.json())
				.then((data) => data.body.sales)

			setSales(response)
			setSelectedSale(response[0].id)
			setLoading(false)
		}

		fetchSales()
	}, [])

	const handleSaleSelect = (saleId: string) => {
		setSelectedSale(saleId)
	}

	return (
		<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
			<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
				{/* <div className="grid gap-4 sm:grid-cols-2">
					<AmountCard amount={1923} increase={23} />
				</div> */}
				{loading ? (
					<SalesTabsSkeleton />
				) : (
					<SalesTabs sales={sales} handleSaleSelect={handleSaleSelect} />
				)}
			</div>
			<div>
				{!loading && selectedSale !== undefined ? (
					<SaleDetailCard saleId={selectedSale} />
				) : (
					<SaleDetailCardSkeleton />
				)}
			</div>
		</main>
	)
}
