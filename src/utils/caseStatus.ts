export function getCaseStatusBadge(
  status: string,
):
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default' {
  switch (
    status.toLowerCase()
  ) {
    case 'open':
      return 'success'

    case 'pending':
      return 'warning'

    case 'dismissed':
      return 'danger'

    case 'closed':
      return 'info'

    default:
      return 'default'
  }
}