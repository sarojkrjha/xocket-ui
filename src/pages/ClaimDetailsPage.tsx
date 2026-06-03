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
  getClaim,
} from '@/services/claimService'

import type {
  Claim,
} from '@/types/claim'

export default function ClaimDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [claim, setClaim] =
    useState<Claim | null>(
      null,
    )

  useEffect(() => {
    if (!id) return

    loadClaim(
      Number(id),
    )
  }, [id])

  async function loadClaim(
    claimId: number,
  ) {
    const result =
      await getClaim(
        claimId,
      )

    setClaim(result)
  }

  if (!claim) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={`Claim #${claim.id}`}
        description="Claim Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/claims',
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

      <AppCard>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <strong>Id:</strong>{' '}
            {claim.id}
          </div>

          <div>
            <strong>Status:</strong>{' '}
            {claim.status}
          </div>

          <div>
            <strong>Account Id:</strong>{' '}
            {claim.accountId}
          </div>

          <div>
            <strong>Case Id:</strong>{' '}
            {
              claim.bankruptcyCaseId
            }
          </div>

          <div>
            <strong>Claim Amount:</strong>{' '}
            $
            {claim.claimAmount.toLocaleString()}
          </div>

          <div>
            <strong>Bar Date:</strong>{' '}
            {claim.barDate}
          </div>

          <div>
            <strong>Filed On:</strong>{' '}
            {claim.filedOnUtc ??
              '-'}
          </div>

          <div>
            <strong>Court Claim Number:</strong>{' '}
            {claim.courtClaimNumber ??
              '-'}
          </div>
        </div>
      </AppCard>
    </>
  )
}