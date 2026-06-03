import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import {
  ChevronDown,
  ChevronRight,
} from 'lucide-react'

import { useSidebarStore } from '@/stores/sidebarStore'

import type { NavigationItem } from '@/types/navigation'

interface Props {
  item: NavigationItem
}

export function SidebarGroup({
  item,
}: Props) {
  const [expanded, setExpanded] =
    useState(false)

  const collapsed =
    useSidebarStore(
      (state) => state.collapsed,
    )

  const Icon = item.icon

  if (!item.children) {
    return (
      <NavLink
        to={item.path!}
        className={({ isActive }) =>
          `
          flex
          items-center
          ${
            collapsed
              ? 'justify-center'
              : 'gap-4'
          }
          px-4
          py-3.5
          rounded-2xl
          transition-all
          duration-200
        `
        }
        style={({ isActive }) => ({
          background: isActive
            ? 'rgba(59,130,246,.15)'
            : 'transparent',

          color: isActive
            ? '#60a5fa'
            : 'var(--text)',

          borderLeft: isActive
            ? '3px solid #3b82f6'
            : '3px solid transparent',
        })}
      >
        <Icon size={19} />

        {!collapsed && (
          <span className="font-medium">
            {item.title}
          </span>
        )}
      </NavLink>
    )
  }

  return (
    <div>
      <button
        onClick={() =>
          !collapsed &&
          setExpanded(!expanded)
        }
        className={`
          w-full
          flex
          items-center
          ${
            collapsed
              ? 'justify-center'
              : 'justify-between'
          }
          px-4
          py-3.5
          rounded-2xl
          transition-all
          duration-200
        `}
        style={{
          color: 'var(--text)',
        }}
      >
        <div
          className={`
            flex
            items-center
            ${
              collapsed
                ? ''
                : 'gap-4'
            }
          `}
        >
          <Icon size={19} />

          {!collapsed && (
            <span className="font-medium">
              {item.title}
            </span>
          )}
        </div>

        {!collapsed &&
          (expanded ? (
            <ChevronDown
              size={16}
            />
          ) : (
            <ChevronRight
              size={16}
            />
          ))}
      </button>

      {!collapsed &&
        expanded && (
          <div className="ml-8 mt-1 space-y-1">
            {item.children.map(
              (child) => {
                const ChildIcon =
                  child.icon

                return (
                  <NavLink
                    key={
                      child.path
                    }
                    to={
                      child.path!
                    }
                    className={({
                      isActive,
                    }) =>
                      `
                      flex
                      items-center
                      gap-3
                      px-3
                      py-2.5
                      rounded-xl
                      text-sm
                      transition-all
                    `
                    }
                    style={({
                      isActive,
                    }) => ({
                      background:
                        isActive
                          ? 'rgba(59,130,246,.12)'
                          : 'transparent',

                      color:
                        isActive
                          ? '#60a5fa'
                          : 'var(--text-muted)',
                    })}
                  >
                    <ChildIcon
                      size={16}
                    />

                    <span>
                      {
                        child.title
                      }
                    </span>
                  </NavLink>
                )
              },
            )}
          </div>
        )}
    </div>
  )
}