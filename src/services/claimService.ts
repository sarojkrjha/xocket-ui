import { apiClient } from './apiClient'

import type { Claim } from '@/types/claim'
import type { PagedResponse } from '@/types/api'

export async function getClaims(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Claim>
    >('/api/claims', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getClaim(
  id: number,
) {
  const response =
    await apiClient.get<Claim>(
      `/api/claims/${id}`,
    )

  return response.data
}