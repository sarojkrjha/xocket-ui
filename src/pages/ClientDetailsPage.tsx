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
  getClient,
} from '@/services/clientService'

import type {
  Client,
} from '@/types/client'

export default function ClientDetailsPage() {
  const navigate =
    useNavigate()

  const { id } =
    useParams()

  const [client, setClient] =
    useState<Client | null>(
      null,
    )

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    if (id) {
      loadClient(
        Number(id),
      )
    }
  }, [id])

  async function loadClient(
    clientId: number,
  ) {
    try {
      setLoading(true)

      const result =
        await getClient(
          clientId,
        )

      setClient(result)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!client) {
    return (
      <div>
        Client not found.
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={
          client.clientName
        }
        description="Client Details"
        actions={
          <PrimaryButton
            onClick={() =>
              navigate(
                '/clients',
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
            {client.id}
          </div>

          <div>
            <strong>Code:</strong>{' '}
            {
              client.clientCode
            }
          </div>

          <div>
            <strong>Client Name:</strong>{' '}
            {
              client.clientName
            }
          </div>

          <div>
            <strong>Status:</strong>{' '}
            {client.isActive
              ? 'Active'
              : 'Inactive'}
          </div>
        </div>
      </AppCard>
    </>
  )
}