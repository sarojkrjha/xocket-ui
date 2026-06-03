import { useState } from 'react'

import { Plus } from 'lucide-react'

import { PageHeader } from '@/components/shared/PageHeader'
import { TableToolbar } from '@/components/shared/TableToolbar'
import { Pagination } from '@/components/shared/Pagination'
import { AppTable } from '@/components/shared/AppTable'

import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StatusBadge } from '@/components/ui/StatusBadge'

import { TableActions } from '@/components/shared/TableActions'

import type { Claim } from '@/types/claim'
import type { TableColumn } from '@/types/table'

export default function ClaimsPage() {
  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const claims: Claim[] = [
    {
      id: 1,
      claimNumber: 'CLM-1001',
      caseNumber: 'BK-2026-1001',
      creditor: 'Capital One',
      amount: 15250.75,
      status: 'Filed',
      filedDate: '2026-05-01',
    },

    {
      id: 2,
      claimNumber: 'CLM-1002',
      caseNumber: 'BK-2026-1002',
      creditor: 'Chase Bank',
      amount: 8900.0,
      status: 'Pending',
      filedDate: '2026-05-03',
    },

    {
      id: 3,
      claimNumber: 'CLM-1003',
      caseNumber: 'BK-2026-1003',
      creditor: 'Bank of America',
      amount: 125000.5,
      status: 'Rejected',
      filedDate: '2026-05-04',
    },
  ]

  const filtered = claims.filter(
    (c) =>
      c.claimNumber
        .toLowerCase()
        .includes(
          search.toLowerCase(),
        ) ||
      c.caseNumber
        .toLowerCase()
        .includes(
          search.toLowerCase(),
        ) ||
      c.creditor
        .toLowerCase()
        .includes(
          search.toLowerCase(),
        ),
  )

  const columns: TableColumn<Claim>[] =
    [
      {
        key: 'claimNumber',
        title: 'Claim Number',
        sortable: true,
      },

      {
        key: 'caseNumber',
        title: 'Case Number',
        sortable: true,
      },

      {
        key: 'creditor',
        title: 'Creditor',
        sortable: true,
      },

      {
        key: 'amount',
        title: 'Amount',

        render: (value) =>
          `$${Number(
            value,
          ).toLocaleString()}`,
      },

      {
        key: 'status',
        title: 'Status',

        render: (
          value,
        ) => {
          const status =
            String(value)

          return (
            <StatusBadge
              status={
                status ===
                'Filed'
                  ? 'success'
                  : status ===
                    'Pending'
                  ? 'warning'
                  : 'danger'
              }
              text={status}
            />
          )
        },
      },

      {
        key: 'filedDate',
        title: 'Filed Date',
        sortable: true,
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
        title="Claims"
        description="Manage proofs of claim and filing status."
        actions={
          <PrimaryButton>
            <Plus size={18} />
            New Claim
          </PrimaryButton>
        }
      />

      <TableToolbar
        search={search}
        onSearch={
          setSearch
        }
      />

      <AppTable
        columns={columns}
        data={filtered}
      />

      <Pagination
        page={page}
        totalPages={8}
        onChange={setPage}
      />
    </>
  )
}