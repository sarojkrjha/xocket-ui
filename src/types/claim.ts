export interface Claim {
  id: number
  accountId: number
  bankruptcyCaseId: number
  claimAmount: number
  barDate: string | null
  filedOnUtc: string | null
  status: string
  courtClaimNumber: string | null
}