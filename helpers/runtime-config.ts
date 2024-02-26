type RuntimeConfig = {
  pokemonApiUrl: string
  pokemonLimit: number
  pokemonByPage: number
}
export const runtimeConfig: RuntimeConfig = {
  pokemonApiUrl: process.env.NEXT_PUBLIC_POKEMON_API_URL || '',
  pokemonLimit: parseInt(process.env.NEXT_PUBLIC_POKEMON_LIMIT || '20') || 20,
  pokemonByPage:
    parseInt(process.env.NEXT_PUBLIC_POKEMON_BY_PAGE || '150') || 150,
}
