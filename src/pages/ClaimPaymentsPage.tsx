import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableActions } from '@/components/shared/TableActions'
import type { TableColumn } from '@/types/table'

export default function ClaimPaymentsPage() {
  const data = [
    {
      id: 1,
      paymentDate:
        '2026-06-01',
      amount: '$2,500',
      checkNumber:
        'CHK-1001',
      reference:
        'REF-001',
    },
  ]

interface imelineEvent {
  id: number
  paymentDate: string
  amount: string
  checkNumber: string
  reference:string
}
  const columns: TableColumn<imelineEvent>[] = [
    {
      key: 'paymentDate',
      title: 'Date',
    },
    {
      key: 'amount',
      title: 'Amount',
    },
    {
      key: 'checkNumber',
      title: 'Check',
    },
    {
      key: 'reference',
      title: 'Reference',
    },
    {
      key: 'id',
      title: 'Actions',
      render: () => (
        <TableActions />
      ),
    },
  ]

  return (
    <>
      <PageHeader
        title="Claim Payments"
        description="Manage claim payments."
      />

      <AppTable
        columns={columns}
        data={data}
      />
    </>
  )
}