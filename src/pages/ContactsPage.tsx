 
import { useState } from 'react'

import { Plus } from 'lucide-react'

import { PageHeader } from '@/components/shared/PageHeader'
import { TableToolbar } from '@/components/shared/TableToolbar'
import { Pagination } from '@/components/shared/Pagination'
import { AppTable } from '@/components/shared/AppTable'

import { PrimaryButton } from '@/components/ui/PrimaryButton'
import { StatusBadge } from '@/components/ui/StatusBadge'

import { TableActions } from '@/components/shared/TableActions'

import type { Contact } from '@/types/contact'
import type { TableColumn } from '@/types/table'

export default function ContactsPage() {
  const [search, setSearch] =
    useState('')

  const [page, setPage] =
    useState(1)

  const contacts: Contact[] = [
    {
      id: 1,
      accountName:
        'Capital One',
      firstName: 'John',
      lastName: 'Smith',
      email:
        'john.smith@capitalone.com',
      phoneNumber:
        '(555) 123-4567',
      isPrimary: true,
    },

    {
      id: 2,
      accountName:
        'Chase Bank',
      firstName: 'Mary',
      lastName: 'Johnson',
      email:
        'mary.johnson@chase.com',
      phoneNumber:
        '(555) 987-6543',
      isPrimary: false,
    },

    {
      id: 3,
      accountName:
        'Bank Of America',
      firstName: 'Robert',
      lastName: 'Brown',
      email:
        'robert.brown@boa.com',
      phoneNumber:
        '(555) 456-7890',
      isPrimary: true,
    },
  ]

  const filtered =
    contacts.filter(
      (c) =>
        c.firstName
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        c.lastName
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ) ||
        c.email
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    )

  const columns: TableColumn<Contact>[] =
    [
      {
        key: 'accountName',
        title: 'Account',
        sortable: true,
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
        key: 'email',
        title: 'Email',
      },

      {
        key: 'phoneNumber',
        title: 'Phone',
      },

      {
        key: 'isPrimary',
        title: 'Primary',

        render: (
          value,
        ) => (
          <StatusBadge
            status={
              value
                ? 'success'
                : 'default'
            }
            text={
              value
                ? 'Yes'
                : 'No'
            }
          />
        ),
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
        title="Contacts"
        description="Manage account contacts."
        actions={
          <PrimaryButton>
            <Plus size={18} />
            New Contact
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
      />

      <Pagination
        page={page}
        totalPages={5}
        onChange={setPage}
      />
    </>
  )
}