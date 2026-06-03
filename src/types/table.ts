import type { ReactNode } from 'react'

export interface TableColumn<T> {
  key: keyof T

  title: string

  sortable?: boolean

  width?: string

  render?: (
    value: unknown,
    row: T,
  ) => ReactNode
}