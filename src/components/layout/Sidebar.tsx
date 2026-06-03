import { navigation } from '@/constants/navigation'
import { useSidebarStore } from '@/stores/sidebarStore'
import { SidebarGroup } from './SidebarGroup'

export function Sidebar() {
  const collapsed =
  useSidebarStore(
    (state) => state.collapsed,
  )
  return (
    <aside
      className={`
          border-r
          flex
          flex-col
          transition-all
          duration-300
          ${
            collapsed
              ? 'w-20'
              : 'w-72'
          }
        `}
      style={{
        background:
          'var(--surface)',
        borderColor:
          'var(--border)',
      }}
    >
      <div
        className="
          h-16
          border-b
          flex
          items-center
          px-6
        "
      >
        <div
          className="
            h-12
            w-12
            rounded-2xl
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
          "
        >
          X
        </div>

          {!collapsed && (
            <div className="ml-4">
              <div className="font-bold text-white">
                Xocket
              </div>

              <div className="text-xs text-white opacity-60">
                Bankruptcy
              </div>
            </div>
          )}
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-2">
          {navigation.map(
            (item) => (
              <SidebarGroup
                key={
                  item.title
                }
                item={item}
              />
            ),
          )}
        </div>
      </div>
    </aside>
  )
}