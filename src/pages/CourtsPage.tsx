import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableActions } from '@/components/shared/TableActions'

import type { Court } from '@/types/court'
import type { TableColumn } from '@/types/table'

export default function CourtsPage() {
  const courts: Court[] = [
    {
      id: 1,
      name:
        'Delaware Bankruptcy Court',
      district: 'District 1',
      state: 'DE',
      phone: '(302) 123-4567',
    },
  ]

  const columns: TableColumn<Court>[] =
    [
      {
        key: 'name',
        title: 'Court',
      },
      {
        key: 'district',
        title: 'District',
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
        title="Courts"
        description="Manage bankruptcy courts."
      />

      <AppTable
        columns={columns}
        data={courts}
      />
    </>
  )
}