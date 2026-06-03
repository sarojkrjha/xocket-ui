interface KpiCardProps {
  title: string
  value: string | number
  trend: string
  color: string
}

export function KpiCard({
  title,
  value,
  trend,
  color,
}: KpiCardProps) {
  return (
    <div
      className={`
        rounded-[28px]
        p-6
        text-white
        shadow-lg
        ${color}
      `}
    >
      <div
        className="
          text-xs
          uppercase
          tracking-widest
          opacity-80
        "
      >
        {title}
      </div>

      <div
        className="
          mt-4
          text-6xl
          font-bold
        "
      >
        {value}
      </div>

      <div
        className="
          mt-4
          text-sm
        "
      >
        {trend}
      </div>
    </div>
  )
}