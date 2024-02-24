import { Helmet } from 'react-helmet-async'

import { DayOrderdsAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmnountCard } from './month-canceled-orders-amount'
import { MonthOrderdsAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderdsAmountCard />
          <DayOrderdsAmountCard />
          <MonthCanceledOrdersAmnountCard />
        </div>
      </div>
    </>
  )
}
