import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableActions } from '@/components/shared/TableActions'
import type { TableColumn } from '@/types/table'

export default function TimelineEventsPage() {
  const data = [
    {
      id: 1,
      eventName:
        'Case Filed',
      eventType:
        'Bankruptcy',
      createdDate:
        '2026-06-01',
    },
  ]

interface imelineEvent {
  id: number
  eventName: string
  eventType: string
  createdDate: string
}
  const columns: TableColumn<imelineEvent>[] =   [
    {
      key: 'eventName',
      title: 'Event',
    },
    {
      key: 'eventType',
      title: 'Type',
    },
    {
      key: 'createdDate',
      title: 'Created',
    },
    {
      key: 'id',
      title: 'Actions',
      render: () => (
        <TableActions />
      ),
    },
  ]

  return (
    <>
      <PageHeader
        title="Timeline Events"
        description="Manage event definitions."
      />

      <AppTable
        columns={columns}
        data={data}
      />
    </>
  )
}