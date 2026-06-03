import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  Plus,
} from 'lucide-react'

import {
  useNavigate,
} from 'react-router-dom'

import {
  PageHeader,
} from '@/components/shared/PageHeader'

import {
  AppTable,
} from '@/components/shared/AppTable'

import {
  Pagination,
} from '@/components/shared/Pagination'

import {
  TableActions,
} from '@/components/shared/TableActions'

import {
  TableToolbar,
} from '@/components/shared/TableToolbar'

import {
  PrimaryButton,
} from '@/components/ui/PrimaryButton'

import {
  getBankruptcyCases,
} from '@/services/bankruptcyCaseService'

import type {
  BankruptcyCase,
} from '@/types/bankruptcyCase'

import type {
  TableColumn,
} from '@/types/table'

export default function BankruptcyCasesPage() {
  const navigate =
    useNavigate()

  const [cases, setCases] =
    useState<
      BankruptcyCase[]
    >([])

  const [loading, setLoading] =
    useState(false)

  const [page, setPage] =
    useState(1)

  const [search, setSearch] =
    useState('')

  const [totalCount, setTotalCount] =
    useState(0)

  const pageSize = 20

  useEffect(() => {
    loadCases()
  }, [page])

  async function loadCases() {
    try {
      setLoading(true)

      const result =
        await getBankruptcyCases(
          page,
          pageSize,
        )

      setCases(
        result.items,
      )

      setTotalCount(
        result.totalCount,
      )
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const filteredCases =
    useMemo(() => {
      if (!search.trim())
        return cases

      return cases.filter(
        (x) =>
          x.bankruptcyCaseNumber
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      cases,
      search,
    ])

  const columns: TableColumn<BankruptcyCase>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key:
          'bankruptcyCaseNumber',
        title:
          'Case Number',
        sortable: true,
      },

      {
        key: 'chapter',
        title: 'Chapter',
      },

      {
        key: 'courtName',
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

        render: (
          _,
          row,
        ) => (
          <TableActions
            onView={() =>
              navigate(
                `/bankruptcy-cases/${row.id}`,
              )
            }
          />
        ),
      },
    ]

  return (
    <>
      <PageHeader
        title="Bankruptcy Cases"
        description="Manage bankruptcy cases."
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
          filteredCases
        }
        loading={
          loading
        }
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
        onChange={
          setPage
        }
      />
    </>
  )
}