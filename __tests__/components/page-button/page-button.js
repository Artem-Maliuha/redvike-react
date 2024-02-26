import renderer from 'react-test-renderer'
import { describe, it, expect } from '@jest/globals'
import { PageButton } from '../../../components/page-button'

describe('<PageButton />', () => {
  it('snapshot', () => {
    const component = renderer.create(<PageButton href="/">1</PageButton>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('snapshot active', () => {
    const component = renderer.create(
      <PageButton href="/" active>
        1
      </PageButton>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
