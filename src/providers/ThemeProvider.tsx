import {
  useEffect,
  type ReactNode,
} from 'react'

import { useThemeStore } from '@/stores/themeStore'

interface Props {
  children: ReactNode
}

export function ThemeProvider({
  children,
}: Props) {
  const theme =
    useThemeStore(
      (state) => state.theme,
    )

  useEffect(() => {
    document.documentElement.classList.remove(
      'light',
      'dark',
    )

    document.documentElement.classList.add(
      theme,
    )
  }, [theme])

  return children
}