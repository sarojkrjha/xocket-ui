interface Props {
  title: string
  value: string | number
}

export function ReportKpiCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        p-6
        border
      "
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
    >
      <div
        className="text-sm"
        style={{
          color: 'var(--text-muted)',
        }}
      >
        {title}
      </div>

      <div
        className="
          mt-3
          text-4xl
          font-bold
        "
        style={{
          color: 'var(--text)',
        }}
      >
        {value}
      </div>
    </div>
  )
}