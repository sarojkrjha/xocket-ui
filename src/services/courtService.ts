import { apiClient } from './apiClient'

import type { Court } from '@/types/court'
import type { PagedResponse } from '@/types/api'

export async function getCourts(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Court>
    >('/api/courts', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getCourt(
  id: number,
) 


{
  const response =
    await apiClient.get<Court>(
      `/api/courts/${id}`,
    )

  return response.data
}