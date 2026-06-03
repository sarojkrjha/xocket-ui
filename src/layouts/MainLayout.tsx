import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components/layout/Sidebar'

import { Header } from '@/components/layout/Header'

export function MainLayout() {
  return (
    <div
      className="h-screen flex"
      style={{
        background:
          'var(--bg)',
      }}
    >
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}