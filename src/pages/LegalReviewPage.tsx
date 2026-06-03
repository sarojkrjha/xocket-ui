import { EmptyState } from '@/components/shared/EmptyState'
import { PageHeader } from '@/components/shared/PageHeader'
import { AppCard } from '@/components/ui/AppCard'

export default function LegalReviewPage() {
  return (
    <>
      <PageHeader
        title="Legal Review"
        description="Cases awaiting attorney review."
      />

      <AppCard>
        <EmptyState
          title="No Pending Reviews"
          description="No legal reviews are currently pending."
        />
      </AppCard>
    </>
  )
}