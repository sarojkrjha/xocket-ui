import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableActions } from '@/components/shared/TableActions'

import type { Attorney } from '@/types/attorney'
import type { TableColumn } from '@/types/table'

export default function AttorneysPage() {
  const attorneys: Attorney[] = [
    {
      id: 1,
      name: 'Jane Attorney',
      firm: 'Smith Law',
      state: 'TX',
      phone: '(555) 777-8888',
    },
  ]

  const columns: TableColumn<Attorney>[] =
    [
      {
        key: 'name',
        title: 'Attorney',
      },
      {
        key: 'firm',
        title: 'Firm',
      },
      {
        key: 'state',
        title: 'State',
      },
      {
        key: 'phone',
        title: 'Phone',
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
        title="Attorneys"
        description="Manage attorneys."
      />

      <AppTable
        columns={columns}
        data={attorneys}
      />
    </>
  )
}