import '@testing-library/jest-dom'
import { describe, it, expect } from '@jest/globals'
import { getPokemonIdByUrl } from '../../helpers/get-pokemon-id-by-url'

describe('Helpers. getPokemonIdByUrl', () => {
  it('Should correctly extract id from url', () => {
    expect(getPokemonIdByUrl('https://pokeapi.co/api/v2/pokemon/123/')).toEqual(
      '123'
    )
  })
  it('Should return null if mistake', () => {
    expect(getPokemonIdByUrl('https://pokeapi.co/api/')).toEqual(undefined)
  })
})
