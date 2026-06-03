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
  getBankruptcyCase,
} from '@/services/bankruptcyCaseService'

import type {
  BankruptcyCase,
} from '@/types/bankruptcyCase'

export default function BankruptcyCaseDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [caseItem, setCaseItem] =
    useState<BankruptcyCase | null>(
      null,
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (id) {
      loadCase(
        Number(id),
      )
    }
  }, [id])

  async function loadCase(
    caseId: number,
  ) {
    try {
      setLoading(true)

      const result =
        await getBankruptcyCase(
          caseId,
        )

      setCaseItem(result)
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

  if (!caseItem) {
    return (
      <div>
        Bankruptcy case not found.
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={
          caseItem.bankruptcyCaseNumber
        }
        description="Bankruptcy Case Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/bankruptcy-cases',
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
            Case Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>Id:</strong>{' '}
              {caseItem.id}
            </div>

            <div>
              <strong>
                Case Number:
              </strong>{' '}
              {
                caseItem.bankruptcyCaseNumber
              }
            </div>

            <div>
              <strong>
                Status:
              </strong>{' '}
              {
                caseItem.bankruptcyCaseStatus
              }
            </div>

            <div>
              <strong>
                Filing Date:
              </strong>{' '}
              {
                caseItem.filingDate
              }
            </div>

            <div>
              <strong>
                Judge:
              </strong>{' '}
              {caseItem.judge}
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Court Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>
                Court Id:
              </strong>{' '}
              {
                caseItem.courtId
              }
            </div>

            <div>
              <strong>
                Court:
              </strong>{' '}
              {
                caseItem.courtName
              }
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Trustee Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>
                Trustee Id:
              </strong>{' '}
              {
                caseItem.trusteeId
              }
            </div>

            <div>
              <strong>
                Trustee:
              </strong>{' '}
              {
                caseItem.trusteeName
              }
            </div>
          </div>
        </AppCard>

        <AppCard>
          <div className="mb-4 text-lg font-semibold">
            Attorney Information
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <strong>
                Attorney Id:
              </strong>{' '}
              {
                caseItem.attorneyId
              }
            </div>

            <div>
              <strong>
                Attorney:
              </strong>{' '}
              {
                caseItem.attorneyName
              }
            </div>
          </div>
        </AppCard>
      </div>
    </>
  )
}