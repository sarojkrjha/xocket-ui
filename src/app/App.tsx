import { ThemeProvider } from '@/providers/ThemeProvider'
import { AppRouter } from '@/routes/AppRouter'

export function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}