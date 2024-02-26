import '@testing-library/jest-dom'
import { describe, it, expect } from '@jest/globals'
import {
  getPagesCount,
  getLimitForPage,
  getOffsetForPage,
} from '../../helpers/paging'

describe('Helpers. Paging', () => {
  it('Should correctly gave pages count', () => {
    expect(getPagesCount(150, 20)).toEqual(7)
    expect(getPagesCount(10, 10)).toEqual(1)
    expect(getPagesCount(200, 20)).toEqual(10)
  })
  it('Should correctly gave limits for page', () => {
    expect(getLimitForPage(7, 7, 20, 150)).toEqual(10)
    expect(getLimitForPage(1, 7, 20, 150)).toEqual(20)
    expect(getLimitForPage(1, 7, 30, 150)).toEqual(30)
  })
  it('Should correctly gave offset for page', () => {
    expect(getOffsetForPage(1, 20)).toEqual(0)
    expect(getOffsetForPage(2, 20)).toEqual(20)
    expect(getOffsetForPage(3, 20)).toEqual(40)
    expect(getOffsetForPage(4, 20)).toEqual(60)
  })
})
