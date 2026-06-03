import { Search } from 'lucide-react'

interface Props {
  search?: string

  onSearch?: (
    value: string,
  ) => void
}

export function TableToolbar({
  search,
  onSearch,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        mb-4
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-xl
          border
          min-w-[320px]
        "
        style={{
          borderColor:
            'var(--border)',
          color:
            'var(--text)',
        }}
      >
        <Search size={16} />

        <input
          value={search}
          onChange={(e) =>
            onSearch?.(
              e.target.value,
            )
          }
          placeholder="Search..."
          className="
            bg-transparent
            outline-none
            w-full
          "
          style={{
            color:
              'var(--text)',
          }}
        />
      </div>

      <button
        className="
          px-4
          py-2
          rounded-xl
          border
          transition-all
        "
        style={{
          borderColor:
            'var(--border)',
          color:
            'var(--text)',
        }}
      >
        Export
      </button>
    </div>
  )
}