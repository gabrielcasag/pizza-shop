import { Home, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from '@/components/ui/separator'

import { PizzaLogo } from './pizza-logo'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/">
          <PizzaLogo showLabel={false} size={6} />
        </Link>

        <Separator orientation="vertical" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/">
            <Home />
            Inicio
          </Link>

          <Link to="/">
            <UtensilsCrossed />
            Pedidos
          </Link>
        </nav>
      </div>
    </div>
  )
}
