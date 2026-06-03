import { useLocation } from 'react-router-dom'

import {
  Bell,
  Moon,
  Sun,
  PanelLeft,
  Settings,
} from 'lucide-react'

import { Breadcrumbs } from './Breadcrumbs'
import { HeaderSearch } from './HeaderSearch'

import { useThemeStore } from '@/stores/themeStore'
import { useSidebarStore } from '@/stores/sidebarStore'

export function Header() {
  const location =
    useLocation()

  const {
    theme,
    toggleTheme,
  } = useThemeStore()

  const toggleSidebar =
    useSidebarStore(
      (state) => state.toggle,
    )

  const pageTitle =
    location.pathname === '/'
      ? 'Dashboard'
      : location.pathname
          .replace('/', '')
          .replace('-', ' ')
          .replace(
            /\b\w/g,
            (char) =>
              char.toUpperCase(),
          )

  return (
    <header
      className="
        h-20
        border-b
        px-6
        flex
        items-center
        justify-between
      "
      style={{
        background:
          'var(--surface)',
        borderColor:
          'var(--border)',
      }}
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          onClick={
            toggleSidebar
          }
          className="
            p-2
            rounded-lg
            hover:bg-slate-200
            dark:hover:bg-slate-700
          "
        >
          <PanelLeft
            size={20}
          />
        </button>

        <div>
          <Breadcrumbs />

          <h1
            className="
              text-2xl
              font-bold
            "
            style={{
              color:
                'var(--text)',
            }}
          >
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <HeaderSearch />

        <button
          className="
            p-2
            rounded-lg
          "
        >
          <Bell size={20} />
        </button>

        <button
          className="
            p-2
            rounded-lg
          "
        >
          <Settings
            size={20}
          />
        </button>

        <button
          onClick={
            toggleTheme
          }
          className="
            p-2
            rounded-lg
          "
        >
          {theme ===
          'dark' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        <div
          className="
            h-10
            w-10
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          S
        </div>
      </div>
    </header>
  )
}