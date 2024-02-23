import { ReactNode } from 'react'

interface CardListProps {
  children: ReactNode[]
}
export const CardList = (props: CardListProps) => {
  const { children } = props

  return (
    <ul
      className="flex flex-col flex-wrap justify-between gap-y-[8px] sm:flex-row sm:gap-x-[16px] sm:gap-y-[16px]"
      style={{ flexWrap: 'wrap', rowGap: 12, columnGap: 16 }} // Workaround because flex options (like wrap and gap) don't work from tailwind here
    >
      {children.map((item, index) => (
        <li key={index} className="flex">
          {item}
        </li>
      ))}
    </ul>
  )
}
