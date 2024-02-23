import Image from 'next/image'
import { usePokemonApi } from '@/api/pokemon'
import { Navigation } from '@/containers/navigation'
import React from 'react'

export default async function Pokemon({ params }: { params: { id: number } }) {
  const pokemonId = params.id
  const repository = usePokemonApi()

  const pokemon = await repository.getPokemon(params.id)
  if (!pokemon) {
    return
  }

  const showData: { name: string; value: string }[] = [
    {
      name: 'Types',
      value: pokemon.types.map((item) => item.type.name).join(', '),
    },
    {
      name: 'Height',
      value: pokemon.height.toString(),
    },
    {
      name: 'Weight',
      value: pokemon.weight.toString(),
    },
    {
      name: 'HP',
      value: pokemon.stats[5].base_stat.toString(),
    },
    {
      name: 'Attack',
      value: pokemon.stats[4].base_stat.toString(),
    },
    {
      name: 'Defence',
      value: pokemon.stats[3].base_stat.toString(),
    },
  ]

  return (
    <>
      <div className="container mx-auto">
        <Navigation title={pokemon.name} />
      </div>

      <article className="container mx-auto flex flex-col sm:flex-row">
        <div>
          <Image
            width={256}
            height={256}
            src={`/assets/images/${pokemonId}.png`}
            alt={pokemon.name}
          />
        </div>
        <div className="flex flex-grow-0 flex-col gap-[16px] p-[16px] sm:grow">
          <h1 className="font-bold capitalize">{pokemon.name}</h1>
          <div className="w-full max-w-[232px] text-sm">
            {showData.map((item) => (
              <div key={item.name} className="flex justify-between">
                <div>{item.name}</div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
