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

import {
  PageHeader,
} from '@/components/shared/PageHeader'

import {
  AppCard,
} from '@/components/ui/AppCard'

import {
  PrimaryButton,
} from '@/components/ui/PrimaryButton'

import {
  getCourt,
} from '@/services/courtService'

import type {
  Court,
} from '@/types/court'

export default function CourtDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [court, setCourt] =
    useState<Court | null>(
      null,
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (id) {
      loadCourt(
        Number(id),
      )
    }
  }, [id])

  async function loadCourt(
    courtId: number,
  ) {
    try {
      setLoading(true)

      const result =
        await getCourt(
          courtId,
        )

      setCourt(result)
    } catch (error) {
      console.error(
        'Failed to load court',
        error,
      )
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

  if (!court) {
    return (
      <div>
        Court not found.
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={
          court.courtName
        }
        description="Court Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/courts',
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
              {court.id}
            </div>

            <div>
              <strong>
                Court Name:
              </strong>{' '}
              {
                court.courtName
              }
            </div>

            <div>
              <strong>
                Court Code:
              </strong>{' '}
              {
                court.courtCode
              }
            </div>

            <div>
              <strong>
                District:
              </strong>{' '}
              {
                court.district
              }
            </div>

            <div>
              <strong>
                Short Name:
              </strong>{' '}
              {
                court.shortName
              }
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Address Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>
                Street 1:
              </strong>{' '}
              {
                court.street1
              }
            </div>

            <div>
              <strong>
                Street 2:
              </strong>{' '}
              {
                court.street2
              }
            </div>

            <div>
              <strong>
                City:
              </strong>{' '}
              {court.city}
            </div>

            <div>
              <strong>
                State:
              </strong>{' '}
              {
                court.state
              }
            </div>

            <div>
              <strong>
                Zip:
              </strong>{' '}
              {court.zip}
            </div>

            <div>
              <strong>
                Zip 4:
              </strong>{' '}
              {
                court.ziP4
              }
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Contact Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>
                Phone:
              </strong>{' '}
              {
                court.phone
              }
            </div>
          </div>
        </AppCard>
      </div>
    </>
  )
}