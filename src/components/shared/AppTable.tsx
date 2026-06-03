import {
  ArrowUpDown,
} from 'lucide-react'

import { AppCard } from '@/components/ui/AppCard'

import { TableEmpty } from './TableEmpty'

import type {
  TableColumn,
} from '@/types/table'

interface AppTableProps<T> {
  columns: TableColumn<T>[]

  data: T[]

  loading?: boolean
}

export function AppTable<T>({
  columns,
  data,
  loading = false,
}: AppTableProps<T>) {
  return (
    <AppCard>
      <div
        className="
          overflow-x-auto
        "
      >
        <table
          className="
            w-full
          "
        >
          <thead>
            <tr
              style={{
                borderBottom:
                  '1px solid var(--border)',
              }}
            >
              {columns.map(
                (column) => (
                  <th
                    key={String(
                      column.key,
                    )}
                    className="
                      px-4
                      py-4
                      text-left
                    "
                    style={{
                      color:
                        'var(--text-muted)',
                    }}
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      {
                        column.title
                      }

                      {column.sortable && (
                        <ArrowUpDown
                          size={
                            14
                          }
                        />
                      )}
                    </div>
                  </th>
                ),
              )}
            </tr>
          </thead>

          <tbody>
            {!loading &&
              data.length ===
                0 && (
                <TableEmpty />
              )}

            {data.map(
              (
                row,
                rowIndex,
              ) => (
                <tr
                  key={
                    rowIndex
                  }
                  className="
                    hover:bg-white/5
                    transition-all
                  "
                  style={{
                    borderBottom:
                      '1px solid var(--border)',
                  }}
                >
                  {columns.map(
                    (
                      column,
                    ) => (
                      <td
                        key={String(
                          column.key,
                        )}
                        className="
                          px-4
                          py-4
                        "
                        style={{
                          color:
                            'var(--text)',
                        }}
                      >
                        {column.render
                          ? column.render(
                              row[
                                column.key
                              ],
                              row,
                            )
                          : String(
                              row[
                                column.key
                              ] ??
                                '',
                            )}
                      </td>
                    ),
                  )}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </AppCard>
  )
}