import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Plus,
} from 'lucide-react'

import {
  PageHeader,
} from '@/components/shared/PageHeader'

import {
  TableToolbar,
} from '@/components/shared/TableToolbar'

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
  PrimaryButton,
} from '@/components/ui/PrimaryButton'

import {
  StatusBadge,
} from '@/components/ui/StatusBadge'

import {
  getContacts,
} from '@/services/contactService'

import type {
  Contact,
} from '@/types/contact'

import type {
  TableColumn,
} from '@/types/table'

export default function ContactsPage() {
  const [contacts, setContacts] =
    useState<Contact[]>([])

  const [loading, setLoading] =
    useState(false)
  const navigate =
    useNavigate()
  const [page, setPage] =
    useState(1)

  const [search, setSearch] =
    useState('')

  const [totalCount, setTotalCount] =
    useState(0)

  const pageSize = 20

  useEffect(() => {
    loadContacts()
  }, [page])

  async function loadContacts() {
    try {
      setLoading(true)

      const result =
        await getContacts(
          page,
          pageSize,
        )

      setContacts(
        result.items,
      )

      setTotalCount(
        result.totalCount,
      )
    } finally {
      setLoading(false)
    }
  }

  const filteredContacts =
    useMemo(() => {
      if (!search.trim())
        return contacts

      return contacts.filter(
        (x) =>
          `${x.firstName} ${x.lastName}`
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      )
    }, [
      contacts,
      search,
    ])

  const columns: TableColumn<Contact>[] =
    [
      {
        key: 'id',
        title: 'Id',
      },

      {
        key: 'firstName',
        title: 'First Name',
        sortable: true,
      },

      {
        key: 'lastName',
        title: 'Last Name',
        sortable: true,
      },

      {
        key: 'companyName',
        title: 'Company',
      },

      {
        key: 'email',
        title: 'Email',
      },

      {
        key: 'phone',
        title: 'Phone',
      },

      {
        key: 'isActive',
        title: 'Status',

        render: (
          value,
        ) => (
          <StatusBadge
            status={
              value
                ? 'success'
                : 'danger'
            }
            text={
              value
                ? 'Active'
                : 'Inactive'
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
                `/contacts/${row.id}`,
              )
            }
          />
        ),
      }
    ]

  return (
    <>
      <PageHeader
        title="Contacts"
        description="Manage account contacts."
        actions={
          <PrimaryButton>
            <Plus
              size={18}
            />
            New Contact
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
          filteredContacts
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