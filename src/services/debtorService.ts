import { apiClient } from './apiClient'

import type { PagedResponse } from '@/types/api'

import type { Debtor } from '@/types/debtor'
import type { DebtorDetails } from '@/types/debtorDetails'
import type { DebtorAddress } from '@/types/debtorAddress'

export async function getDebtors(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Debtor>
    >('/api/debtors', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getDebtor(
  id: number,
) {
  const response =
    await apiClient.get<
      DebtorDetails
    >(`/api/debtors/${id}`)

  return response.data
}

export async function getDebtorAddresses(
  debtorId: number,
) {
  const response =
    await apiClient.get<
      DebtorAddress[]
    >(
      `/api/debtors/${debtorId}/addresses`,
    )

  return response.data
}