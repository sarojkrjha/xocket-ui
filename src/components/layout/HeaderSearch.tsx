import { Search } from 'lucide-react'

export function HeaderSearch() {
  return (
    <div
      className="
        hidden
        lg:flex
        items-center
        gap-3
        px-4
        py-2
        rounded-xl
        border
        min-w-[320px]
      "
      style={{
        background:
          'var(--surface)',
        borderColor:
          'var(--border)',
      }}
    >
      <Search size={16} />

      <input
        type="text"
        placeholder="Search..."
        className="
          w-full
          bg-transparent
          outline-none
        "
      />
    </div>
  )
}