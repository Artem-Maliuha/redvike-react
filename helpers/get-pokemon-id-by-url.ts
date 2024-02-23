export const getPokemonIdByUrl = (url: string): string => {
  return url.split('/').slice(6, -1)[0]
}
