import { apiClient } from './apiClient'

import type { Client } from '@/types/client'
import type { PagedResponse } from '@/types/api'

export async function getClients(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Client>
    >('/api/clients', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getClient(
  id: number,
) {
  const response =
    await apiClient.get<Client>(
      `/api/clients/${id}`,
    )

  return response.data
}