interface Props {
  title: string
  lastRun: string
  records: number
}

export function ImportCard({
  title,
  lastRun,
  records,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        p-6
        border
        transition-all
        hover:scale-[1.01]
      "
      style={{
        background:
          'var(--surface)',
        borderColor:
          'var(--border)',
      }}
    >
      <h3
        className="
          text-xl
          font-semibold
          mb-6
        "
        style={{
          color: 'var(--text)',
        }}
      >
        {title}
      </h3>

      <div
        className="
          text-sm
          mb-1
        "
        style={{
          color:
            'var(--text-muted)',
        }}
      >
        Last Import
      </div>

      <div
        className="
          text-base
          font-medium
          mb-6
        "
        style={{
          color: 'var(--text)',
        }}
      >
        {lastRun}
      </div>

      <div
        className="
          text-sm
          mb-1
        "
        style={{
          color:
            'var(--text-muted)',
        }}
      >
        Records Imported
      </div>

      <div
        className="
          text-4xl
          font-bold
        "
        style={{
          color: 'var(--text)',
        }}
      >
        {records.toLocaleString()}
      </div>
    </div>
  )
}