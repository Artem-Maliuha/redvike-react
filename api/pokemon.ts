import getConfig from 'next/config'
import { ApiPokemonList } from '@/types/api-pokemon-list'
import { ApiPokemon } from '@/types/api-pokemon'
import { HomePageData } from '@/types/home-page-data'
import { getLimitForPage, getPagesCount } from '@/helpers/paging'

export const usePokemonApi = () => {
  const { publicRuntimeConfig } = getConfig()

  const getList = async (pageNumber: number): Promise<HomePageData | null> => {
    const maxPagesCount = getPagesCount(
      publicRuntimeConfig.pokemonLimit,
      publicRuntimeConfig.pokemonByPage
    )

    const limit = getLimitForPage(
      pageNumber,
      maxPagesCount,
      publicRuntimeConfig.pokemonByPage,
      publicRuntimeConfig.pokemonLimit
    )

    const parameters = new URLSearchParams({
      limit: limit.toString(),
      offset: (pageNumber * publicRuntimeConfig.pokemonByPage).toString(),
    })

    try {
      const res = await fetch(
        publicRuntimeConfig.pokemonApiUrl + '?' + parameters.toString(),
        { keepalive: true }
      )
      const repo: ApiPokemonList = await res.json()

      return {
        //  If our application should show all Pokemon (more than limited 150) pass repo.count instead of compare logic
        count:
          repo.count < publicRuntimeConfig.pokemonLimit
            ? repo.count
            : publicRuntimeConfig.pokemonLimit,
        list: repo.results,
      }
    } catch (e) {
      console.warn(e)
    }
    return null
  }

  const getPokemon = async (id: number): Promise<ApiPokemon | null> => {
    try {
      const res = await fetch(publicRuntimeConfig.pokemonApiUrl + '/' + id)
      const repo: ApiPokemon = await res.json()
      return repo
    } catch (e) {
      console.warn(e)
    }
    return null
  }

  return {
    getList,
    getPokemon,
  }
}
