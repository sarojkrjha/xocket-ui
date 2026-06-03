import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Plus } from 'lucide-react'

import {
  useNavigate,
} from 'react-router-dom'

import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { Pagination } from '@/components/shared/Pagination'
import { TableActions } from '@/components/shared/TableActions'
import { TableToolbar } from '@/components/shared/TableToolbar'

import { PrimaryButton } from '@/components/ui/PrimaryButton'

import { getDebtors } from '@/services/debtorService'

import type { Debtor } from '@/types/debtor'
import type { TableColumn } from '@/types/table'

export default function DebtorsPage() {
  const navigate =
    useNavigate()

  const [debtors, setDebtors] =
    useState<Debtor[]>([])

  const [loading, setLoading] =
    useState(false)

  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const [totalCount, setTotalCount] =
    useState(0)

  const pageSize = 20

  useEffect(() => {
    loadDebtors()
  }, [page])

  async function loadDebtors() {
    try {
      setLoading(true)

      const result =
        await getDebtors(
          page,
          pageSize,
        )

      setDebtors(
        result.items,
      )

      setTotalCount(
        result.totalCount,
      )
    } finally {
      setLoading(false)
    }
  }

  const filtered =
    useMemo(() => {
      if (!search)
        return debtors

      return debtors.filter(
        (x) =>
          x.fullName
            ?.toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      debtors,
      search,
    ])

  const columns: TableColumn<Debtor>[] =
    [
      {
        key: 'bkDebtorID',
        title: 'Id',
      },

      {
        key: 'fullName',
        title: 'Name',
        sortable: true,
      },

      {
        key: 'last4SSN',
        title: 'Last 4 SSN',
      },

      {
        key: 'bkDebtorTypeID',
        title: 'Type',
      },

      {
        key: 'bkID',
        title: 'Case Id',
      },

      {
        key: 'bkDebtorID',
        title: 'Actions',

        render: (
          _,
          row,
        ) => (
          <TableActions
            onView={() =>
              navigate(
                `/debtors/${row.bkDebtorID}`,
              )
            }
          />
        ),
      },
    ]

  return (
    <>
      <PageHeader
        title="Debtors"
        description="Manage bankruptcy debtors."
        actions={
          <PrimaryButton>
            <Plus size={18} />
            New Debtor
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
        loading={loading}
      />

      <Pagination
        page={page}
        totalPages={Math.max(
          1,
          Math.ceil(
            totalCount /
              pageSize,
          ),
        )}
        onChange={setPage}
      />
    </>
  )
}