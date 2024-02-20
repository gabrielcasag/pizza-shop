import { Pizza } from 'lucide-react'

export function PizzaLogo({ size = 6, showLabel = true }) {
  return (
    <div className="flex items-center gap-3 text-lg text-foreground">
      <Pizza className={`h-${size} w-${size}`} color="#F9802D" />
      {showLabel && <span className="font-semibold">pizza.shop</span>}
    </div>
  )
}
