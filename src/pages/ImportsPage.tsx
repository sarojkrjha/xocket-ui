import { PageHeader } from '@/components/shared/PageHeader'
import { ImportCard } from '@/components/imports/ImportCard'

export default function ImportsPage() {
  const imports = [
    {
      title: 'Courts',
      lastRun: '2026-06-01',
      records: 120,
    },
    {
      title: 'Trustees',
      lastRun: '2026-06-01',
      records: 54,
    },
    {
      title: 'Attorneys',
      lastRun: '2026-06-01',
      records: 240,
    },
    {
      title: 'Bankruptcy Cases',
      lastRun: '2026-06-02',
      records: 15200,
    },
  ]

  return (
    <>
      <PageHeader
        title="Imports"
        description="Manage system imports."
      />

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        {imports.map(
          item => (
            <ImportCard
              key={item.title}
              {...item}
            />
          ),
        )}
      </div>
    </>
  )
}