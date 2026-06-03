export function TableLoading() {
  return (
    <>
      {[1, 2, 3, 4, 5].map(
        (row) => (
          <tr key={row}>
            <td
              colSpan={999}
              className="py-3"
            >
              <div
                className="
                  h-10
                  rounded-lg
                  animate-pulse
                "
                style={{
                  background:
                    'var(--surface-hover)',
                }}
              />
            </td>
          </tr>
        ),
      )}
    </>
  )
}