interface Props {
  page: number

  totalPages: number

  onChange: (
    page: number,
  ) => void
}

export function Pagination({
  page,
  totalPages,
  onChange,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-end
        gap-3
        mt-4
      "
      style={{
        color:
          'var(--text)',
      }}
    >
      <button
        onClick={() =>
          onChange(page - 1)
        }
        disabled={page === 1}
        className="
          px-3
          py-2
          rounded-lg
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
        Prev
      </button>

      <span
        style={{
          color:
            'var(--text)',
        }}
      >
        Page {page} of{' '}
        {totalPages}
      </span>

      <button
        onClick={() =>
          onChange(page + 1)
        }
        disabled={
          page ===
          totalPages
        }
        className="
          px-3
          py-2
          rounded-lg
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
        Next
      </button>
    </div>
  )
}