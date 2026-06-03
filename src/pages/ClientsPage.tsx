import { useState } from 'react'
import { Plus } from 'lucide-react'

import { PageHeader } from '@/components/shared/PageHeader'
import { TableToolbar } from '@/components/shared/TableToolbar'
import { Pagination } from '@/components/shared/Pagination'
import { AppTable } from '@/components/shared/AppTable'

import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StatusBadge } from '@/components/ui/StatusBadge'

import { TableActions } from '@/components/shared/TableActions'

import type { Client } from '@/types/client'
import type { TableColumn } from '@/types/table'

export default function ClientsPage() {
  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const clients: Client[] = [
    {
      id: 1,
      clientCode: 'CLI-001',
      clientName: 'Capital One',
      status: 'Active',
      createdOn: '2026-05-01',
    },
    {
      id: 2,
      clientCode: 'CLI-002',
      clientName: 'Chase Bank',
      status: 'Active',
      createdOn: '2026-05-02',
    },
    {
      id: 3,
      clientCode: 'CLI-003',
      clientName: 'Bank Of America',
      status: 'Inactive',
      createdOn: '2026-05-03',
    },
  ]

  const filtered =
    clients.filter(
      x =>
        x.clientName
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    )

  const columns: TableColumn<Client>[] =
    [
      {
        key: 'clientCode',
        title: 'Code',
      },
      {
        key: 'clientName',
        title: 'Client Name',
        sortable: true,
      },
      {
        key: 'status',
        title: 'Status',
        render: value => (
          <StatusBadge
            status={
              value === 'Active'
                ? 'success'
                : 'danger'
            }
            text={String(value)}
          />
        ),
      },
      {
        key: 'createdOn',
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
        title="Clients"
        description="Manage system clients."
        actions={
          <PrimaryButton>
            <Plus size={18} />
            New Client
          </PrimaryButton>
        }
      />

      <TableToolbar
        search={search}
        onSearch={setSearch}
      />

      <AppTable
        columns={columns}
        data={filtered}
      />

      <Pagination
        page={page}
        totalPages={5}
        onChange={setPage}
      />
    </>
  )
}