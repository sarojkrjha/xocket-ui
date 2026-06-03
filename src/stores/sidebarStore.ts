import { create } from 'zustand'

interface SidebarStore {
  collapsed: boolean

  toggle: () => void
}

export const useSidebarStore =
  create<SidebarStore>((set) => ({
    collapsed: true,

    toggle: () =>
      set((state) => ({
        collapsed:
          !state.collapsed,
      })),
  }))