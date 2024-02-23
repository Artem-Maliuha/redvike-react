import { ApiPokemonListItem } from '@/types/api-pokemon-list-item'

export type ApiPokemonList = {
  count: number
  next: string
  previous: string
  results: ApiPokemonListItem[]
}
