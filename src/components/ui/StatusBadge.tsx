interface StatusBadgeProps {
  status:
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'default'

  text: string
}

export function StatusBadge({
  status,
  text,
}: StatusBadgeProps) {
  const styles = {
    success:
      'bg-emerald-500/15 text-emerald-400',

    warning:
      'bg-amber-500/15 text-amber-400',

    danger:
      'bg-red-500/15 text-red-400',

    info:
      'bg-blue-500/15 text-blue-400',

    default:
      'bg-slate-500/15 text-slate-300',
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        ${styles[status]}
      `}
    >
      {text}
    </span>
  )
}