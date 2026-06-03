import { apiClient } from './apiClient'

import type { BankruptcyCase } from '@/types/bankruptcyCase'
import type { PagedResponse } from '@/types/api'

export async function getBankruptcyCases(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<BankruptcyCase>
    >('/api/bankruptcy-cases', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getBankruptcyCase(
  id: number,
) {
  const response =
    await apiClient.get<BankruptcyCase>(
      `/api/bankruptcy-cases/${id}`,
    )

  return response.data
}