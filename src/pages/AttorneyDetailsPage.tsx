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
  getAttorney,
} from '@/services/attorneyService'

import type {
  Attorney,
} from '@/types/attorney'

export default function AttorneyDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [attorney, setAttorney] =
    useState<Attorney | null>(
      null,
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (id) {
      loadAttorney(
        Number(id),
      )
    }
  }, [id])

  async function loadAttorney(
    attorneyId: number,
  ) {
    try {
      setLoading(true)

      const result =
        await getAttorney(
          attorneyId,
        )

      setAttorney(result)
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

  if (!attorney) {
    return (
      <div>
        Attorney not found.
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={
          attorney.name
        }
        description="Attorney Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/attorneys',
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
              {attorney.id}
            </div>

            <div>
              <strong>Name:</strong>{' '}
              {attorney.name}
            </div>

            <div>
              <strong>Firm:</strong>{' '}
              {attorney.firmName || '-'}
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
              {attorney.phone}
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
              {attorney.street1}
            </div>

            <div>
              <strong>Street 2:</strong>{' '}
              {attorney.street2 || '-'}
            </div>

            <div>
              <strong>City:</strong>{' '}
              {attorney.city}
            </div>

            <div>
              <strong>State:</strong>{' '}
              {attorney.state}
            </div>

            <div>
              <strong>Zip:</strong>{' '}
              {attorney.zip}
            </div>

            <div>
              <strong>Zip4:</strong>{' '}
              {attorney.ziP4 || '-'}
            </div>
          </div>
        </AppCard>
      </div>
    </>
  )
}