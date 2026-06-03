import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableActions } from '@/components/shared/TableActions'

import type { Trustee } from '@/types/trustee'
import type { TableColumn } from '@/types/table'

export default function TrusteesPage() {
  const trustees: Trustee[] = [
    {
      id: 1,
      name: 'John Trustee',
      city: 'Dallas',
      state: 'TX',
      phone: '(555) 123-4567',
    },
  ]

  const columns: TableColumn<Trustee>[] =
    [
      {
        key: 'name',
        title: 'Trustee',
      },
      {
        key: 'city',
        title: 'City',
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
        title="Trustees"
        description="Manage trustees."
      />

      <AppTable
        columns={columns}
        data={trustees}
      />
    </>
  )
}