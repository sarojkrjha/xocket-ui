import { EmptyState } from '@/components/shared/EmptyState'
import { PageHeader } from '@/components/shared/PageHeader'
import { AppCard } from '@/components/ui/AppCard'

export default function UnmatchedPage() {
  return (
    <>
      <PageHeader
        title="Unmatched Queue"
        description="Cases that could not be automatically matched."
      />

      <AppCard>
        <EmptyState
          title="No Unmatched Cases"
          description="All cases have been processed."
        />
      </AppCard>
    </>
  )
}