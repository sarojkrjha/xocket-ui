import type {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function PrimaryButton({
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2.5
        rounded-xl
        bg-blue-600
        hover:bg-blue-500
        text-white
        font-medium
        transition-all
      "
    >
      {children}
    </button>
  )
}