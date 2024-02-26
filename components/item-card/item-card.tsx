import Image from 'next/image'
import Link from 'next/link'

interface ItemCardProps {
  name: string
  image: string
  link: string
}
export const ItemCard = (props: ItemCardProps) => {
  const { name, image, link } = props
  return (
    <Link
      href={link}
      className="flex w-[272px] flex-col items-center gap-[12px] border-2 border-black p-[16px]"
    >
      <Image width={100} height={100} src={image} alt={name} />
      <span className="rounded-[4px] bg-[#CFCFCF] px-[4px] text-base font-bold capitalize">
        {name}
      </span>
    </Link>
  )
}
