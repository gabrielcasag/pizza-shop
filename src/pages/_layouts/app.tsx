import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="antialised">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
