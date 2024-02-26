'use client'
import { ItemCard } from '@/components/item-card'
import { CardList } from '@/containers/card-list'
import { Pagination } from '@/containers/pagination'
import { getPokemonIdByUrl } from '@/helpers/get-pokemon-id-by-url'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { usePokemonProvider } from '@/provider/pokemon-provider'
import { Navigation } from '@/containers/navigation'
import { runtimeConfig } from '@/helpers/runtime-config'

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string }
}) {
  const pageNumber = parseInt(searchParams?.page || '1') || 1
  const { pokemonByPage } = runtimeConfig

  const pokemonProvider = usePokemonProvider()

  const { isLoading, error, data } = useQuery({
    queryKey: ['pokemonList', pageNumber],
    queryFn: () => pokemonProvider.getList(pageNumber).then((res) => res),
  })

  if (isLoading) {
    return 'Loading ...'
  }

  if (error) {
    return `Error: ${error.message}`
  }

  if (!data) {
    return
  }

  const { count, list } = data

  return (
    <>
      <div className="container mx-auto">
        <Navigation />
      </div>
      <article className="container mx-auto flex flex-col items-center gap-[16px]">
        <CardList>
          {list.map((pokemon) => (
            <ItemCard
              key={pokemon.url}
              link={`/pokemon/${getPokemonIdByUrl(pokemon.url)}`}
              name={pokemon.name}
              image={`/assets/images/${getPokemonIdByUrl(pokemon.url)}.png`}
            />
          ))}
        </CardList>
        <Pagination
          currentPage={pageNumber}
          elementsCount={count}
          perPageCount={pokemonByPage}
        />
      </article>
    </>
  )
}
