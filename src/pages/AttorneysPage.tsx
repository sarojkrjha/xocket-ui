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

import { getAttorneys } from '@/services/attorneyService'

import type { Attorney } from '@/types/attorney'
import type { TableColumn } from '@/types/table'

export default function AttorneysPage() {
  const navigate =
    useNavigate()

  const [attorneys, setAttorneys] =
    useState<Attorney[]>([])

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
    loadAttorneys()
  }, [page])

  async function loadAttorneys() {
    try {
      setLoading(true)

      const result =
        await getAttorneys(
          page,
          pageSize,
        )

      setAttorneys(
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

  const filteredAttorneys =
    useMemo(() => {
      if (!search.trim())
        return attorneys

      return attorneys.filter(
        (x) =>
          x.name
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      attorneys,
      search,
    ])

  const columns: TableColumn<Attorney>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'name',
        title: 'Attorney Name',
        sortable: true,
      },

      {
        key: 'firmName',
        title: 'Firm',
      },

      {
        key: 'phone',
        title: 'Phone',
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
        key: 'id',
        title: 'Actions',

        render: (
          _,
          row,
        ) => (
          <TableActions
            onView={() =>
              navigate(
                `/attorneys/${row.id}`,
              )
            }
          />
        ),
      },
    ]

  return (
    <>
      <PageHeader
        title="Attorneys"
        description="Manage bankruptcy attorneys."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
            New Attorney
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
          filteredAttorneys
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