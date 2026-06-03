import { AppCard } from '@/components/ui/AppCard'
import { KpiCard } from '@/components/ui/KpiCard'

export default function DashboardPage() {
  const pipeline = [
    {
      stage: 'Upload',
      count: 18,
    },
    {
      stage: 'Validation',
      count: 12,
    },
    {
      stage: 'Matching',
      count: 27,
    },
    {
      stage: 'Legal Review',
      count: 9,
    },
    {
      stage: 'Filing',
      count: 4,
    },
    {
      stage: 'Completed',
      count: 138,
    },
  ]

  const queues = [
    {
      name: 'Unmatched',
      count: 42,
    },
    {
      name: 'Flagged',
      count: 11,
    },
    {
      name: 'Legal Review',
      count: 7,
    },
  ]

  const activities = [
    'Case BK-10294 matched',
    'Claim filed for Account #1002',
    'Legal review completed',
    'Timeline updated',
    'New ingestion batch uploaded',
  ]

  return (
    <div className="space-y-6">
      {/* KPI */}
      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        <KpiCard
          title="Accounts"
          value="12,542"
          trend="+143 this month"
          color="bg-gradient-to-r from-blue-600 to-indigo-500"
        />

        <KpiCard
          title="Active Cases"
          value="2,140"
          trend="+31 this week"
          color="bg-gradient-to-r from-emerald-600 to-green-500"
        />

        <KpiCard
          title="Claims Filed"
          value="784"
          trend="+22 today"
          color="bg-gradient-to-r from-purple-600 to-indigo-600"
        />

        <KpiCard
          title="Match Rate"
          value="96%"
          trend="+1.3%"
          color="bg-gradient-to-r from-orange-500 to-amber-500"
        />
      </section>

      {/* Pipeline */}
      <AppCard title="Bankruptcy Pipeline">
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-6
            gap-4
          "
        >
          {pipeline.map(
            (item) => (
              <div
                key={item.stage}
                className="
                  rounded-2xl
                  border
                  p-4
                  text-center
                "
              >
                <div
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {item.stage}
                </div>

                <div
                  className="
                    text-4xl
                    font-bold
                    mt-3
                  "
                >
                  {item.count}
                </div>
              </div>
            ),
          )}
        </div>
      </AppCard>

      {/* Queue Overview */}
      <AppCard title="Queue Overview">
        <div
          className="
            grid
            md:grid-cols-3
            gap-4
          "
        >
          {queues.map(
            (queue) => (
              <div
                key={queue.name}
                className="
                  rounded-2xl
                  border
                  p-5
                "
              >
                <div
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {queue.name}
                </div>

                <div
                  className="
                    mt-3
                    text-4xl
                    font-bold
                  "
                >
                  {queue.count}
                </div>
              </div>
            ),
          )}
        </div>
      </AppCard>

      {/* Activity + Tasks */}
      <section
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >
        <AppCard title="Recent Activity">
          <div className="space-y-4">
            {activities.map(
              (activity) => ( 
                <div key={activity}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        h-3
                        w-3
                        rounded-full
                        bg-blue-500
                      "
                    />

                    <div>
                      {activity}
                    </div>
                  </div>
              ),
            )}
          </div>
        </AppCard>

        <AppCard title="Upcoming Tasks">
          <div className="space-y-4">
            <div>
              Review 7 flagged accounts
            </div>

            <div>
              Approve 4 legal reviews
            </div>

            <div>
              File 3 pending claims
            </div>

            <div>
              Process ingestion batch #402
            </div>
          </div>
        </AppCard>
      </section>
    </div>
  )
}