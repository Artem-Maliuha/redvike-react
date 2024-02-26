import Image from 'next/image'
import { PageButton } from '@/components/page-button'
interface PaginationProps {
  baseUrl?: string
  currentPage: number
  perPageCount: number
  elementsCount: number
}
export const Pagination = (props: PaginationProps) => {
  const { baseUrl = '', currentPage, perPageCount, elementsCount } = props
  const pagesCount = Math.floor(elementsCount / perPageCount)

  const prevLink =
    currentPage < 3 ? `${baseUrl}/` : `${baseUrl}/?page=${currentPage - 1}`

  const nextLink =
    currentPage === pagesCount
      ? `${baseUrl}/?page=${pagesCount}`
      : `${baseUrl}/?page=${currentPage + 1}`

  return (
    <div className="flex flex-row items-end gap-[12px]">
      <PageButton href={prevLink}>
        <Image
          src="/assets/images/chevron.svg"
          alt="<"
          width={20}
          height={20}
        />
      </PageButton>
      <PageButton href={`${baseUrl}/`}>1</PageButton>
      <span className="flex items-end font-bold">...</span>
      <PageButton
        active
        href={
          currentPage !== 1 ? `${baseUrl}/?page=${currentPage}` : `${baseUrl}/`
        }
      >
        {currentPage}
      </PageButton>
      <span className="flex items-end font-bold">...</span>
      <PageButton href={`${baseUrl}/?page=${pagesCount}`}>
        {pagesCount}
      </PageButton>
      <PageButton href={nextLink}>
        <Image
          src="/assets/images/chevron.svg"
          alt=">"
          width={20}
          height={20}
          className="rotate-180"
        />
      </PageButton>
    </div>
  )
}
