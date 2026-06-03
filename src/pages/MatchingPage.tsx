import { useState } from 'react'

import { PageHeader } from '@/components/shared/PageHeader'
import { TableToolbar } from '@/components/shared/TableToolbar'
import { Pagination } from '@/components/shared/Pagination'
import { AppTable } from '@/components/shared/AppTable'

import { StatusBadge } from '@/components/ui/StatusBadge'
import { ConfidenceBadge } from '@/components/ui/ConfidenceBadge'

import { TableActions } from '@/components/shared/TableActions'

import type { MatchingRecord } from '@/types/matching'
import type { TableColumn } from '@/types/table'

export default function MatchingPage() {
  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const records: MatchingRecord[] =
    [
      {
        id: 1,
        caseNumber:
          'BK-2026-1001',

        debtorName:
          'John Smith',

        accountName:
          'Capital One',

        confidence: 98,

        status:
          'Matched',

        matchedOn:
          '2026-05-01',
      },

      {
        id: 2,
        caseNumber:
          'BK-2026-1002',

        debtorName:
          'Mary Johnson',

        accountName:
          'Chase Bank',

        confidence: 83,

        status:
          'Review Required',

        matchedOn:
          '2026-05-03',
      },

      {
        id: 3,
        caseNumber:
          'BK-2026-1003',

        debtorName:
          'ABC Holdings',

        accountName:
          'Bank Of America',

        confidence: 62,

        status:
          'Flagged',

        matchedOn:
          '2026-05-04',
      },
    ]

  const filtered =
    records.filter(
      (x) =>
        x.caseNumber
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        x.debtorName
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    )

  const columns: TableColumn<MatchingRecord>[] =
    [
      {
        key: 'caseNumber',
        title:
          'Case Number',
        sortable: true,
      },

      {
        key: 'debtorName',
        title: 'Debtor',
      },

      {
        key: 'accountName',
        title: 'Account',
      },

      {
        key: 'confidence',
        title:
          'Confidence',

        render: (
          value,
        ) => (
          <ConfidenceBadge
            value={Number(
              value,
            )}
          />
        ),
      },

      {
        key: 'status',
        title: 'Status',

        render: (
          value,
        ) => (
          <StatusBadge
            status={
              value ===
              'Matched'
                ? 'success'
                : value ===
                  'Review Required'
                ? 'warning'
                : 'danger'
            }
            text={String(
              value,
            )}
          />
        ),
      },

      {
        key: 'matchedOn',
        title:
          'Matched On',
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
        title="Matching Queue"
        description="Review and manage bankruptcy matching results."
      />

      <TableToolbar
        search={search}
        onSearch={
          setSearch
        }
      />

      <AppTable
        columns={
          columns
        }
        data={
          filtered
        }
      />

      <Pagination
        page={page}
        totalPages={12}
        onChange={
          setPage
        }
      />
    </>
  )
}