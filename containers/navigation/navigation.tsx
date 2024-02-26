import Link from 'next/link'

interface NavigationProps {
  title?: string
}

export const Navigation = (props: NavigationProps) => {
  const { title } = props

  if (!title) {
    return <h1 className="text-xl font-bold">Pokedex</h1>
  }

  return (
    <nav className="text-xl font-bold">
      <Link href="/">Home</Link>
      {' / '}
      <span className="capitalize">{title}</span>
    </nav>
  )
}
