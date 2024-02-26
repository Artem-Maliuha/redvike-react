import getConfig from 'next/config'
import { runtimeConfig } from '@/helpers/runtime-config'

export const usePokemonApi = () => {
  const { pokemonApiUrl } = runtimeConfig

  const list = (limit: number = 0, offset: number = 0) => {
    const parameters = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    })

    return fetch(pokemonApiUrl + '?' + parameters.toString())
  }

  const one = (id: number) => {
    return fetch(pokemonApiUrl + id)
  }

  return {
    list,
    one,
  }
}
