import { HomePageData } from '@/types/home-page-data'
import {
  getLimitForPage,
  getOffsetForPage,
  getPagesCount,
} from '@/helpers/paging'
import { ApiPokemonList } from '@/types/api-pokemon-list'
import { ApiPokemon } from '@/types/api-pokemon'
import { usePokemonApi } from '@/api/pokemon'
import { runtimeConfig } from '@/helpers/runtime-config'

export const usePokemonProvider = () => {
  const pokemonApi = usePokemonApi()
  const { pokemonByPage, pokemonLimit } = runtimeConfig

  const getList = async (pageNumber: number): Promise<HomePageData | null> => {
    const maxPagesCount = getPagesCount(pokemonLimit, pokemonByPage)

    const limit = getLimitForPage(
      pageNumber,
      maxPagesCount,
      pokemonByPage,
      pokemonLimit
    )

    const offset = getOffsetForPage(pageNumber, pokemonByPage)

    try {
      const res = await pokemonApi.list(limit, offset)
      const repo: ApiPokemonList = await res.json()

      return {
        //  If our application should show all Pokemon (more than limited 150) pass repo.count instead of compare logic
        count: repo.count < pokemonLimit ? repo.count : pokemonLimit,
        list: repo.results,
      }
    } catch (e) {
      throw new Error("API Error. Couldn't get list of entities")
    }
    return null
  }

  const getPokemon = async (id: number): Promise<ApiPokemon | null> => {
    try {
      const res = await pokemonApi.one(id)
      const repo: ApiPokemon = await res.json()
      return repo
    } catch (e) {
      throw new Error("API Error. Couldn't get entity")
    }
    return null
  }

  return {
    getList,
    getPokemon,
  }
}
