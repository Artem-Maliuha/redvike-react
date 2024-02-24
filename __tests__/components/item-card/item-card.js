import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import { ItemCard } from '../../../components/item-card'

describe('<ItemCard />', () => {
  it('snapshot', () => {
    const component = renderer.create(
      <ItemCard name="Name" image="/some.jpg" link="/" />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
