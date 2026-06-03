export interface Account {
  id: number
  clientId: number
  accountNumber: string
  originalBalance: number
  currentBalance: number
  status: string
  isBankruptcyActive: boolean
}