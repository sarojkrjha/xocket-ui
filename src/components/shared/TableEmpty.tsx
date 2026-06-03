export function TableEmpty() {
  return (
    <tr>
      <td
        colSpan={999}
        className="
          text-center
          py-12
        "
        style={{
          color:
            'var(--text-muted)',
        }}
      >
        No records found
      </td>
    </tr>
  )
}