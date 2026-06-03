import {
  useEffect,
  useState,
} from 'react'

import {
  ArrowLeft,
} from 'lucide-react'

import {
  useNavigate,
  useParams,
} from 'react-router-dom'

import { PageHeader } from '@/components/shared/PageHeader'

import { AppCard } from '@/components/ui/AppCard'
import { PrimaryButton } from '@/components/ui/PrimaryButton'

import {
  getDebtor,
  getDebtorAddresses,
} from '@/services/debtorService'

import type {
  DebtorDetails,
} from '@/types/debtorDetails'

import type {
  DebtorAddress,
} from '@/types/debtorAddress'

export default function DebtorDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [debtor, setDebtor] =
    useState<DebtorDetails | null>(
      null,
    )

  const [addresses, setAddresses] =
    useState<DebtorAddress[]>(
      [],
    )

  useEffect(() => {
    if (!id) return

    loadData(
      Number(id),
    )
  }, [id])

  async function loadData(
    debtorId: number,
  ) {
    const debtorResult =
      await getDebtor(
        debtorId,
      )

    const addressResult =
      await getDebtorAddresses(
        debtorId,
      )

    setDebtor(
      debtorResult,
    )

    setAddresses(
      addressResult,
    )
  }

  if (!debtor)
    return <div>Loading...</div>

  return (
    <>
      <PageHeader
        title={
          debtor.fullName ??
          'Debtor'
        }
        description="Debtor Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/debtors',
              )
            }
          >
            <ArrowLeft size={18} />
            Back
          </PrimaryButton>
        }
      />

      <div className="grid gap-6">
        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            General Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>Id:</strong>{' '}
              {debtor.bkDebtorID}
            </div>

            <div>
              <strong>Case Id:</strong>{' '}
              {debtor.bkID}
            </div>

            <div>
              <strong>Name:</strong>{' '}
              {debtor.fullName}
            </div>

            <div>
              <strong>Last4 SSN:</strong>{' '}
              {debtor.last4SSN}
            </div>

            <div>
              <strong>Type:</strong>{' '}
              {
                debtor.bkDebtorTypeID
              }
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Addresses
          </div>

          {addresses.map(
            (
              address,
            ) => (
              <div
                key={
                  address.bkDebtorAddressID
                }
                className="mb-4"
              >
                <div>
                  {
                    address.street1
                  }
                </div>

                <div>
                  {
                    address.city
                  }
                  ,{' '}
                  {
                    address.state
                  }{' '}
                  {
                    address.zip
                  }
                </div>
              </div>
            ),
          )}
        </AppCard>
      </div>
    </>
  )
}