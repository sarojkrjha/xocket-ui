import {
  useEffect,
  useState,
} from 'react'

import {
  useParams,
} from 'react-router-dom'

import {
  PageHeader,
} from '@/components/shared/PageHeader'

import {
  AppCard,
} from '@/components/ui/AppCard'

import {
  getAccount,
} from '@/services/accountService'

import type {
  Account,
} from '@/types/account'

export default function AccountDetailsPage() {
  const { id } =
    useParams()

  const [account, setAccount] =
    useState<Account | null>(
      null,
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    loadAccount()
  }, [id])

  async function loadAccount() {
    try {
      setLoading(true)

      const data =
        await getAccount(
          Number(id),
        )

      setAccount(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (!account) {
    return (
      <div>
        Account not found
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={`Account ${account.accountNumber}`}
        description="Account Details"
      />

      <AppCard>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <strong>Id:</strong>{' '}
            {account.id}
          </div>

          <div>
            <strong>
              Client Id:
            </strong>{' '}
            {
              account.clientId
            }
          </div>

          <div>
            <strong>
              Account Number:
            </strong>{' '}
            {
              account.accountNumber
            }
          </div>

          <div>
            <strong>
              Status:
            </strong>{' '}
            {
              account.status
            }
          </div>

          <div>
            <strong>
              Original Balance:
            </strong>{' '}
            {
              account.originalBalance
            }
          </div>

          <div>
            <strong>
              Current Balance:
            </strong>{' '}
            {
              account.currentBalance
            }
          </div>

          <div>
            <strong>
              Bankruptcy:
            </strong>{' '}
            {account.isBankruptcyActive
              ? 'Yes'
              : 'No'}
          </div>
        </div>
      </AppCard>
    </>
  )
}