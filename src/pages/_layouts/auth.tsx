import { Outlet } from 'react-router-dom'

import { PizzaLogo } from '@/components/pizza-logo'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen antialiased md:grid-cols-2">
      <div className="hidden h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground md:flex">
        <PizzaLogo />
        <p className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </p>
      </div>

      <main className="flex flex-col items-center justify-center">
        <div className="my-6 md:hidden">
          <PizzaLogo />
        </div>
        <Outlet />
      </main>

      <p className="text-center text-sm text-muted-foreground md:hidden">
        Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
      </p>
    </div>
  )
}
