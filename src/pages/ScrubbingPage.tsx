import { PageHeader } from '@/components/shared/PageHeader'
import { AppCard } from '@/components/ui/AppCard'

export default function ScrubbingPage() {
  return (
    <>
      <PageHeader
        title="Scrubbing"
        description="Inventory and scrub management."
      />

      <div
        className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-6
        "
      >
        <AppCard title="Inventories">
          <div className="text-4xl font-bold">
            42
          </div>
        </AppCard>

        <AppCard title="Schedules">
          <div className="text-4xl font-bold">
            8
          </div>
        </AppCard>

        <AppCard title="Runs">
          <div className="text-4xl font-bold">
            126
          </div>
        </AppCard>

        <AppCard title="Matches">
          <div className="text-4xl font-bold">
            3,425
          </div>
        </AppCard>
      </div>

      <AppCard title="Recent Runs">
        Coming soon...
      </AppCard>
    </>
  )
}