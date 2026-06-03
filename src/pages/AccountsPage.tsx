import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  useNavigate,
} from 'react-router-dom'
import {
  Plus,
} from 'lucide-react'

import {
  PageHeader,
} from '@/components/shared/PageHeader'

import {
  AppTable,
} from '@/components/shared/AppTable'

import {
  TableToolbar,
} from '@/components/shared/TableToolbar'

import {
  Pagination,
} from '@/components/shared/Pagination'

import {
  StatusBadge,
} from '@/components/ui/StatusBadge'

import {
  PrimaryButton,
} from '@/components/ui/PrimaryButton'

import {
  TableActions,
} from '@/components/shared/TableActions'

import {
  getAccounts,
} from '@/services/accountService'

import type {
  Account,
} from '@/types/account'

import type {
  TableColumn,
} from '@/types/table'

export default function AccountsPage() {
  const [accounts, setAccounts] =
    useState<Account[]>([])
  const navigate =
    useNavigate()
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
    loadAccounts()
  }, [page])

  async function loadAccounts() {
    try {
      setLoading(true)

      const response =
        await getAccounts(
          page,
          pageSize,
        )

      setAccounts(
        response.items,
      )

      setTotalCount(
        response.totalCount,
      )
    } catch (error) {
      console.error(
        'Failed to load accounts',
        error,
      )
    } finally {
      setLoading(false)
    }
  }

  const filteredAccounts =
    useMemo(() => {
      if (!search.trim())
        return accounts

      return accounts.filter(
        (account) =>
          account.accountNumber
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      accounts,
      search,
    ])

  const columns: TableColumn<Account>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'accountNumber',
        title:
          'Account Number',
        sortable: true,
      },

      {
        key: 'clientId',
        title:
          'Client Id',
        sortable: true,
      },

      {
        key:
          'originalBalance',
        title:
          'Original Balance',
        sortable: true,

        render: (
          value,
        ) =>
          Number(
            value,
          ).toLocaleString(),
      },

      {
        key:
          'currentBalance',
        title:
          'Current Balance',
        sortable: true,

        render: (
          value,
        ) =>
          Number(
            value,
          ).toLocaleString(),
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
              'Active'
                ? 'success'
                : 'danger'
            }
            text={String(
              value,
            )}
          />
        ),
      },

      {
        key:
          'isBankruptcyActive',
        title:
          'Bankruptcy',

        render: (
          value,
        ) => (
          <StatusBadge
            status={
              value
                ? 'warning'
                : 'success'
            }
            text={
              value
                ? 'Active'
                : 'None'
            }
          />
        ),
      },

      {
        key: 'id',
        title: 'Actions',

        render: (_, row) => (
          <TableActions
            onView={() =>
              navigate(
                `/accounts/${row.id}`,
              )
            }
          />
        ),
      }
    ]

  return (
    <>
      <PageHeader
        title="Accounts"
        description="Manage creditor and client accounts."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
            New Account
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
          filteredAccounts
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