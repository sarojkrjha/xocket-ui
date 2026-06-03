import {
  Eye,
  Pencil,
  Trash2,
} from 'lucide-react'

export function TableActions() {
  return (
    <div className="flex gap-3">
      <button
        title="View"
        className="text-blue-400"
      >
        <Eye size={18} />
      </button>

      <button
        title="Edit"
        className="text-amber-400"
      >
        <Pencil size={18} />
      </button>

      <button
        title="Delete"
        className="text-red-400"
      >
        <Trash2 size={18} />
      </button>
    </div>
  )
}