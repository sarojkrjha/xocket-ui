import { useLocation } from 'react-router-dom'

export function Breadcrumbs() {
  const location = useLocation()

  const segments = location.pathname
    .split('/')
    .filter(Boolean)

  const breadcrumbs = [
    'Dashboard',
    ...segments,
  ]

  return (
    <div
      className="
        flex
        items-center
        gap-2
        text-sm
      "
      style={{
        color: 'var(--text-muted)',
      }}
    >
      {breadcrumbs.map(
        (crumb, index) => (
          <div
            key={`${crumb}-${index}`}
            className="
              flex
              items-center
              gap-2
            "
          >
            {index > 0 && (
              <span>/</span>
            )}

            <span className="capitalize">
              {crumb.replace(
                '-',
                ' ',
              )}
            </span>
          </div>
        ),
      )}
    </div>
  )
}