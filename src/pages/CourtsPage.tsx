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
  getCourts,
} from '@/services/courtService'

import type {
  Court,
} from '@/types/court'

import type {
  TableColumn,
} from '@/types/table'

export default function CourtsPage() {
  const navigate =
    useNavigate()

  const [courts, setCourts] =
    useState<Court[]>([])

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
    loadCourts()
  }, [page])

  async function loadCourts() {
    try {
      setLoading(true)

      const result =
        await getCourts(
          page,
          pageSize,
        )

      setCourts(
        result.items,
      )

      setTotalCount(
        result.totalCount,
      )
    } catch (error) {
      console.error(
        'Failed to load courts',
        error,
      )
    } finally {
      setLoading(false)
    }
  }

  const filteredCourts =
    useMemo(() => {
      if (!search.trim())
        return courts

      return courts.filter(
        (court) =>
          court.courtName
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      courts,
      search,
    ])

  const columns: TableColumn<Court>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'courtName',
        title: 'Court Name',
        sortable: true,
      },

      {
        key: 'courtCode',
        title: 'Code',
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
        key: 'district',
        title: 'District',
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
                `/courts/${row.id}`,
              )
            }
          />
        ),
      },
    ]

  return (
    <>
      <PageHeader
        title="Courts"
        description="Manage bankruptcy courts."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
            New Court
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
          filteredCourts
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