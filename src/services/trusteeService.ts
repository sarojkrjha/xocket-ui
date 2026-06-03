import { apiClient } from './apiClient'

import type { Trustee } from '@/types/trustee'
import type { PagedResponse } from '@/types/api'

export async function getTrustees(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Trustee>
    >('/api/trustees', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getTrustee(
  id: number,
) {
  const response =
    await apiClient.get<Trustee>(
      `/api/trustees/${id}`,
    )

  return response.data
}