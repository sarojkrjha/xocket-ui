import { PageHeader } from '@/components/shared/PageHeader'
import { AppTable } from '@/components/shared/AppTable'
import { TableActions } from '@/components/shared/TableActions'
import type { TableColumn } from '@/types/table'

export default function ClaimDocumentsPage() {
  const data = [
    {
      id: 1,
      documentName:
        'Proof Of Claim.pdf',
      documentType: 'PDF',
      uploadedDate:
        '2026-06-01',
    },
  ]
  
interface ClaimDocument {
  id: number
  documentName: string
  documentType: string
  uploadedDate: string
}
  const columns: TableColumn<ClaimDocument>[] =  [
    {
      key: 'documentName',
      title: 'Document',
    },
    {
      key: 'documentType',
      title: 'Type',
    },
    {
      key: 'uploadedDate',
      title: 'Uploaded',
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
        title="Claim Documents"
        description="Manage claim attachments."
      />

      <AppTable
        columns={columns}
        data={data}
      />
    </>
  )
}