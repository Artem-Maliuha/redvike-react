import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import { CardList } from '../../../containers/card-list'

describe('<CardList />', () => {
  it('snapshot', () => {
    const component = renderer.create(
      <CardList>
        {[...Array(10).keys()].map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </CardList>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
