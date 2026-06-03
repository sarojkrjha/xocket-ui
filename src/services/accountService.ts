import { apiClient } from './apiClient'
 
 
export async function getAccounts(
  page: number,
  pageSize: number,
) {
  const response =
    await apiClient.get('/api/accounts', {
      params: {
        page,
        pageSize,
      },
    })

  return response.data
}