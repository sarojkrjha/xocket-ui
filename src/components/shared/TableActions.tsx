import {
  Eye,
  Pencil,
  Trash2,
} from 'lucide-react'

interface TableActionsProps {
  onView?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export function TableActions({
  onView,
  onEdit,
  onDelete,
}: TableActionsProps) {
  return (
    <div className="flex gap-3">
      <button
        title="View"
        className="text-blue-400"
        onClick={onView}
      >
        <Eye size={18} />
      </button>

      <button
        title="Edit"
        className="text-amber-400"
        onClick={onEdit}
      >
        <Pencil size={18} />
      </button>

      <button
        title="Delete"
        className="text-red-400"
        onClick={onDelete}
      >
        <Trash2 size={18} />
      </button>
    </div>
  )
}