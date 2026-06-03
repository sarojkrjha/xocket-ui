import { EmptyState } from '@/components/shared/EmptyState'
import { PageHeader } from '@/components/shared/PageHeader'
import { AppCard } from '@/components/ui/AppCard'

export default function FlaggedPage() {
  return (
    <>
      <PageHeader
        title="Flagged Matches"
        description="Potential matching conflicts requiring review."
      />

      <AppCard>
        <EmptyState
          title="No Flagged Matches"
          description="No conflicts currently exist."
        />
      </AppCard>
    </>
  )
}