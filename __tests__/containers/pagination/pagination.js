import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import { Pagination } from '../../../containers/pagination'

describe('<Pagination />', () => {
  it('snapshot', () => {
    const component = renderer.create(
      <Pagination currentPage={1} elementsCount={100} perPageCount={10} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('component length', () => {
    const component = renderer.create(
      <Pagination currentPage={1} elementsCount={100} perPageCount={10} />
    )
    let tree = component.toJSON()
    expect(tree.children.length).toEqual(7)
  })
})
