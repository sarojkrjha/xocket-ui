import { useState } from 'react'

import { Plus } from 'lucide-react'

import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableToolbar } from '@/components/shared/TableToolbar'
import { Pagination } from '@/components/shared/Pagination'

import { StatusBadge } from '@/components/ui/StatusBadge'
import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { TableActions } from '@/components/shared/TableActions'
import type { Account } from '@/types/account'
import type { TableColumn } from '@/types/table'

export default function AccountsPage() {
  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const accounts: Account[] = [
    {
      id: 1,
      accountName:
        'Capital One',
      accountNumber:
        'ACC-1001',
      status: 'Active',
      createdOn:
        '2026-05-01',
    },

    {
      id: 2,
      accountName:
        'Chase Bank',
      accountNumber:
        'ACC-1002',
      status: 'Pending',
      createdOn:
        '2026-05-03',
    },

    {
      id: 3,
      accountName:
        'Bank of America',
      accountNumber:
        'ACC-1003',
      status: 'Inactive',
      createdOn:
        '2026-05-04',
    },
  ]

  const filtered =
    accounts.filter(
      (x) =>
        x.accountName
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    )

  const columns: TableColumn<Account>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'accountName',
        title:
          'Account Name',
          sortable: true,
      },

      {
        key: 'accountNumber',
        title:
          'Account Number',
          sortable: true,
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
                : value ===
                  'Pending'
                ? 'warning'
                : 'danger'
            }
            text={
              String(
                value,
              )
            }
          />
        ),
      },

      {
        key: 'createdOn',
        title:
          'Created On',
          sortable: true,
      },
      {
        key: 'id',
        title: 'Actions',

        render: () => (
          <TableActions />
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
          filtered
        }
      />

      <Pagination
        page={page}
        totalPages={5}
        onChange={
          setPage
        }
      />
    </>
  )
}