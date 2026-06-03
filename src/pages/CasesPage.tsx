import { useState } from 'react'

import { Plus } from 'lucide-react'

import { PageHeader } from '@/components/shared/PageHeader'
import { TableToolbar } from '@/components/shared/TableToolbar'
import { AppTable } from '@/components/shared/AppTable'
import { Pagination } from '@/components/shared/Pagination'

import { StatusBadge } from '@/components/ui/StatusBadge'
import { PrimaryButton } from '@/components/ui/PrimaryButton'

import type { BankruptcyCase } from '@/types/bankruptcyCase'
import type { TableColumn } from '@/types/table'

import { TableActions } from '@/components/shared/TableActions'

import { getCaseStatusBadge } from '@/utils/caseStatus'

export default function CasesPage() {
  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const cases: BankruptcyCase[] =
    [
      {
        id: 1,
        bankruptcyCaseNumber:
          'BK-2026-1001',

        debtorName:
          'John Smith',

        chapter: 'Chapter 7',

        bankruptcyCaseStatus:
          'Open',

        filingDate:
          '2026-05-01',

        court:
          'Delaware',
      },

      {
        id: 2,
        bankruptcyCaseNumber:
          'BK-2026-1002',

        debtorName:
          'Mary Johnson',

        chapter: 'Chapter 11',

        bankruptcyCaseStatus:
          'Pending',

        filingDate:
          '2026-05-02',

        court:
          'Texas',
      },

      {
        id: 3,
        bankruptcyCaseNumber:
          'BK-2026-1003',

        debtorName:
          'ABC Holdings LLC',

        chapter: 'Chapter 13',

        bankruptcyCaseStatus:
          'Dismissed',

        filingDate:
          '2026-05-04',

        court:
          'California',
      },
    ]

  const filtered =
    cases.filter(
      (c) =>
        c.bankruptcyCaseNumber
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        c.debtorName
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    )

  const columns: TableColumn<BankruptcyCase>[] =
    [
      {
        key: 'bankruptcyCaseNumber',
        title:
          'Case Number',
        sortable: true,
      },

      {
        key: 'debtorName',
        title: 'Debtor',
        sortable: true,
      },

      {
        key: 'chapter',
        title: 'Chapter',
      },

      {
        key:
          'bankruptcyCaseStatus',
        title: 'Status',

        render: (
          value,
        ) => (
          <StatusBadge
            status={getCaseStatusBadge(
              String(
                value,
              ),
            )}
            text={String(
              value,
            )}
          />
        ),
      },

      {
        key: 'court',
        title: 'Court',
      },

      {
        key: 'filingDate',
        title:
          'Filing Date',
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
        title="Bankruptcy Cases"
        description="Manage bankruptcy cases and monitor status."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
            New Case
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
        columns={
          columns
        }
        data={
          filtered
        }
      />

      <Pagination
        page={page}
        totalPages={10}
        onChange={
          setPage
        }
      />
    </>
  )
}