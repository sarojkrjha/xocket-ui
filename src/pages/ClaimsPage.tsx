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
import { StatusBadge } from '@/components/ui/StatusBadge'

import { getClaims } from '@/services/claimService'

import type { Claim } from '@/types/claim'
import type { TableColumn } from '@/types/table'

export default function ClaimsPage() {
  const navigate =
    useNavigate()

  const [claims, setClaims] =
    useState<Claim[]>([])

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
    loadClaims()
  }, [page])

  async function loadClaims() {
    try {
      setLoading(true)

      const result =
        await getClaims(
          page,
          pageSize,
        )

      setClaims(
        result.items,
      )

      setTotalCount(
        result.totalCount,
      )
    } finally {
      setLoading(false)
    }
  }

  const filteredClaims =
    useMemo(() => {
      if (!search.trim())
        return claims

      return claims.filter(
        (x) =>
          String(x.id)
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      claims,
      search,
    ])

  const columns: TableColumn<Claim>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'accountId',
        title: 'Account',
      },

      {
        key: 'bankruptcyCaseId',
        title: 'Case',
      },

      {
        key: 'claimAmount',
        title: 'Amount',
        render: (
          value,
        ) =>
          `$${Number(
            value,
          ).toLocaleString()}`,
      },

      {
        key: 'status',
        title: 'Status',

        render: (
          value,
        ) => (
          <StatusBadge
            status="warning"
            text={String(
              value,
            )}
          />
        ),
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
                `/claims/${row.id}`,
              )
            }
          />
        ),
      },
    ]

  return (
    <>
      <PageHeader
        title="Claims"
        description="Manage proof of claims."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
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
        columns={
          columns
        }
        data={
          filteredClaims
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