import { PageHeader } from '@/components/shared/PageHeader'

import { AppCard } from '@/components/ui/AppCard'

import { ReportKpiCard } from '@/components/reporting/ReportKpiCard'

import { MatchRateChart } from '@/components/reporting/MatchRateChart'

import { ClaimsChart } from '@/components/reporting/ClaimsChart'

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reporting"
        description="Operational and bankruptcy reporting."
      />

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-6
        "
      >
        <ReportKpiCard
          title="Cases"
          value="2,140"
        />

        <ReportKpiCard
          title="Claims"
          value="784"
        />

        <ReportKpiCard
          title="Match Rate"
          value="96%"
        />

        <ReportKpiCard
          title="Flagged"
          value="11"
        />
      </div>

      <div
        className="
          grid
          xl:grid-cols-2
          gap-6
        "
      >
        <AppCard title="Match Rate">
          <MatchRateChart />
        </AppCard>

        <AppCard title="Claims Filed">
          <ClaimsChart />
        </AppCard>
      </div>
    </>
  )
}