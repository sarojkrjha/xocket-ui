import { apiClient } from './apiClient'

import type { Contact } from '@/types/contact'
import type { PagedResponse } from '@/types/api'

export async function getContacts(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get<
      PagedResponse<Contact>
    >('/api/contacts', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}

export async function getContact(
  id: number,
) {
  const response =
    await apiClient.get<Contact>(
      `/api/contacts/${id}`,
    )

  return response.data
}