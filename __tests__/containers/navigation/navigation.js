import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import { Navigation } from '../../../containers/navigation'

describe('<Navigation />', () => {
  it('snapshot', () => {
    const component = renderer.create(<Navigation />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('snapshot with title', () => {
    const component = renderer.create(<Navigation title="Pokemon" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
