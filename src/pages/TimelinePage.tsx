import { PageHeader } from '@/components/shared/PageHeader'

import { AppCard } from '@/components/ui/AppCard'

import { TimelineItem } from '@/components/timeline/TimelineItem'

import type { TimelineEvent } from '@/types/timeline'

export default function TimelinePage() {
  const events: TimelineEvent[] =
    [
      {
        id: 1,

        caseNumber:
          'BK-2026-1001',

        title:
          'Case Filed',

        description:
          'Bankruptcy case filed with the court.',

        occurredOn:
          '2026-05-01 08:00',

        eventType:
          'Filed',
      },

      {
        id: 2,

        caseNumber:
          'BK-2026-1001',

        title:
          'Match Found',

        description:
          'Matching engine found candidate account.',

        occurredOn:
          '2026-05-01 09:15',

        eventType:
          'Matched',
      },

      {
        id: 3,

        caseNumber:
          'BK-2026-1001',

        title:
          'Legal Review Started',

        description:
          'Case routed to legal review queue.',

        occurredOn:
          '2026-05-01 10:30',

        eventType:
          'Review',
      },

      {
        id: 4,

        caseNumber:
          'BK-2026-1001',

        title:
          'Claim Filed',

        description:
          'Proof of claim submitted.',

        occurredOn:
          '2026-05-02 14:00',

        eventType:
          'Claim',
      },
    ]

  return (
    <>
      <PageHeader
        title="Timeline"
        description="Track the complete lifecycle of bankruptcy cases."
      />

      <AppCard>
        <div className="space-y-2">
          {events.map(
            (event) => (
              <TimelineItem
                key={event.id}
                title={
                  event.title
                }
                description={
                  event.description
                }
                date={
                  event.occurredOn
                }
              />
            ),
          )}
        </div>
      </AppCard>
    </>
  )
}