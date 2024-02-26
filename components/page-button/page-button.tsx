import Link from 'next/link'
import { ReactNode } from 'react'

interface PageButtonProps {
  href: string
  children: string | ReactNode
  active?: boolean
}
export const PageButton = (props: PageButtonProps) => {
  const { href, children, active = false } = props
  const basicClasses =
    'shadow-hard flex size-[32px] items-center justify-center border-2 text-base font-bold border-primary'
  const activeClasses = ' bg-primary text-white'
  return (
    <Link className={`${basicClasses}${active && activeClasses}`} href={href}>
      {children}
    </Link>
  )
}
