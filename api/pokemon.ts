import getConfig from 'next/config'

export const usePokemonApi = () => {
  const { publicRuntimeConfig } = getConfig()
  const apiUrl = publicRuntimeConfig.pokemonApiUrl

  const list = (
    limit: number = publicRuntimeConfig.pokemonLimit,
    offset: number = 0
  ) => {
    const parameters = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    })

    return fetch(apiUrl + '?' + parameters.toString())
  }

  const one = (id: number) => {
    return fetch(apiUrl + '/' + id)
  }

  return {
    list,
    one,
  }
}
