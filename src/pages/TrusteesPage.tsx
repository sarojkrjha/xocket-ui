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

import { getTrustees } from '@/services/trusteeService'

import type { Trustee } from '@/types/trustee'
import type { TableColumn } from '@/types/table'

export default function TrusteesPage() {
  const navigate =
    useNavigate()

  const [trustees, setTrustees] =
    useState<Trustee[]>([])

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
    loadTrustees()
  }, [page])

  async function loadTrustees() {
    try {
      setLoading(true)

      const result =
        await getTrustees(
          page,
          pageSize,
        )

      setTrustees(
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

  const filteredTrustees =
    useMemo(() => {
      if (!search.trim())
        return trustees

      return trustees.filter(
        (x) =>
          x.name
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      trustees,
      search,
    ])

  const columns: TableColumn<Trustee>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'name',
        title: 'Trustee Name',
        sortable: true,
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
                `/trustees/${row.id}`,
              )
            }
          />
        ),
      },
    ]

  return (
    <>
      <PageHeader
        title="Trustees"
        description="Manage bankruptcy trustees."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
            New Trustee
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
          filteredTrustees
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