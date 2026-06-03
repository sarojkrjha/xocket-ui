import { create } from 'zustand'

type Theme = 'light' | 'dark'

interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const savedTheme =
  localStorage.getItem('theme')

export const useThemeStore =
  create<ThemeStore>((set) => ({
    theme:
      savedTheme === 'dark'
        ? 'dark'
        : 'light',

    toggleTheme: () =>
      set((state) => {
        const next =
          state.theme === 'dark'
            ? 'light'
            : 'dark'

        localStorage.setItem(
          'theme',
          next,
        )

        return { theme: next }
      }),

    setTheme: (theme) => {
      localStorage.setItem(
        'theme',
        theme,
      )

      set({ theme })
    },
  }))