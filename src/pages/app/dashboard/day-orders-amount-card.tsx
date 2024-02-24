import { LucideCalendarDays } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrderdsAmountCard() {
  return (
    <Card>
      <CardHeader className="mb-2 flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <LucideCalendarDays className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-sx text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-3%</span> em
          relação ao dia passado
        </p>
      </CardContent>
    </Card>
  )
}
