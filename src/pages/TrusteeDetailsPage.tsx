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
  getTrustee,
} from '@/services/trusteeService'

import type {
  Trustee,
} from '@/types/trustee'

export default function TrusteeDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [trustee, setTrustee] =
    useState<Trustee | null>(
      null,
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (id) {
      loadTrustee(
        Number(id),
      )
    }
  }, [id])

  async function loadTrustee(
    trusteeId: number,
  ) {
    try {
      setLoading(true)

      const result =
        await getTrustee(
          trusteeId,
        )

      setTrustee(result)
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

  if (!trustee) {
    return (
      <div>
        Trustee not found.
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={
          trustee.name
        }
        description="Trustee Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/trustees',
              )
            }
          >
            <ArrowLeft
              size={18}
            />
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
              {trustee.id}
            </div>

            <div>
              <strong>Name:</strong>{' '}
              {trustee.name}
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Contact Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>Phone:</strong>{' '}
              {trustee.phone}
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Address Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>Street 1:</strong>{' '}
              {trustee.street1}
            </div>

            <div>
              <strong>Street 2:</strong>{' '}
              {trustee.street2}
            </div>

            <div>
              <strong>City:</strong>{' '}
              {trustee.city}
            </div>

            <div>
              <strong>State:</strong>{' '}
              {trustee.state}
            </div>

            <div>
              <strong>Zip:</strong>{' '}
              {trustee.zip}
            </div>

            <div>
              <strong>Zip4:</strong>{' '}
              {trustee.ziP4}
            </div>
          </div>
        </AppCard>
      </div>
    </>
  )
}