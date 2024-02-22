import { Home, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from '@/components/ui/separator'

import AccountMenu from './account-menu'
import NavLink from './nav-link'
import { PizzaLogo } from './pizza-logo'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/">
          <PizzaLogo showLabel={false} size={6} />
        </Link>

        <Separator orientation="vertical" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home />
            Inicio
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
