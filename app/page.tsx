import getConfig from 'next/config'
import { ItemCard } from '@/components/item-card'
import { CardList } from '@/containers/card-list'
import { Pagination } from '@/containers/pagination'
import { getPokemonIdByUrl } from '@/helpers/get-pokemon-id-by-url'
import { usePokemonApi } from '@/api/pokemon'
import { Navigation } from '@/containers/navigation'
import React from 'react'

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string }
}) {
  const { publicRuntimeConfig } = getConfig()
  const pageNumber = parseInt(searchParams?.page || '1') || 1
  const pokemonRepository = usePokemonApi()

  const data = await pokemonRepository.getList(pageNumber - 1)
  if (!data) {
    return null
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
          perPageCount={publicRuntimeConfig.pokemonByPage}
        />
      </article>
    </>
  )
}
