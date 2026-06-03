import { PageHeader } from '@/components/shared/PageHeader'
import { AppCard } from '@/components/ui/AppCard'

export default function FilingQueuePage() {
  return (
    <>
      <PageHeader
        title="Filing Queue"
        description="Claims waiting to be filed with the court."
      />

      <AppCard>
        <div className="space-y-4">
          <div>
            CLM-1002 —
            Chase Bank
          </div>

          <div>
            CLM-1004 —
            Capital One
          </div>

          <div>
            CLM-1005 —
            CitiBank
          </div>
        </div>
      </AppCard>
    </>
  )
}