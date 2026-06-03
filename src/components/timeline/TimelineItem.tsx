interface Props {
  title: string

  description: string

  date: string
}

export function TimelineItem({
  title,
  description,
  date,
}: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="
            h-4
            w-4
            rounded-full
            bg-blue-500
          "
        />

        <div
          className="
            w-[2px]
            flex-1
            bg-slate-600
            mt-2
          "
        />
      </div>

      <div className="pb-8">
        <div
          className="
            font-semibold
            text-lg
          "
          style={{
            color:
              'var(--text)',
          }}
        >
          {title}
        </div>

        <div
          className="mt-1"
          style={{
            color:
              'var(--text-muted)',
          }}
        >
          {description}
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
          {date}
        </div>
      </div>
    </div>
  )
}