import { apiClient } from './apiClient'

import type { Attorney } from '@/types/attorney'
import type { PagedResponse } from '@/types/api'

export async function getAttorneys(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Attorney>
    >('/api/attorneys', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getAttorney(
  id: number,
) {
  const response =
    await apiClient.get<Attorney>(
      `/api/attorney/${id}`,
    )

  return response.data
}