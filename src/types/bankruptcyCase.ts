export interface BankruptcyCase {
  id: number
  bankruptcyCaseNumber: string
  judge?: string
  bankruptcyCaseStatus?: string
  chapter?: string
  courtId?: number
  courtName: string
  trusteeId?: number
  trusteeName?: string
  attorneyId?: number
  attorneyName?: string
  filingDate: string
}