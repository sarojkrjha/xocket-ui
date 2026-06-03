interface Props {
  value: number
}

export function ConfidenceBadge({
  value,
}: Props) {
  let color =
    'bg-red-500/15 text-red-400'

  if (value >= 90) {
    color =
      'bg-emerald-500/15 text-emerald-400'
  } else if (value >= 70) {
    color =
      'bg-amber-500/15 text-amber-400'
  }

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        ${color}
      `}
    >
      {value}%
    </span>
  )
}