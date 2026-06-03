import type { ReactNode } from 'react'

interface AppCardProps {
  title?: string
  children: ReactNode
}

export function AppCard({
  title,
  children,
}: AppCardProps) {
  return (
    <div
      className="
        rounded-3xl
        p-6
        shadow-sm
        transition-all
      "
      style={{
        background:
          'var(--surface)',

        border:
          '1px solid var(--border)',

        color:
          'var(--text)',
      }}
    >
      {title && (
        <h3
          className="
            text-xl
            font-semibold
            mb-6
          "
          style={{
            color:
              'var(--text)',
          }}
        >
          {title}
        </h3>
      )}

      {children}
    </div>
  )
}