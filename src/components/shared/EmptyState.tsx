interface EmptyStateProps {
  title: string

  description: string
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-16
      "
    >
      <div
        className="
          text-xl
          font-semibold
        "
      >
        {title}
      </div>

      <div
        className="
          mt-2
          text-sm
        "
        style={{
          color:
            'var(--text-muted)',
        }}
      >
        {description}
      </div>
    </div>
  )
}