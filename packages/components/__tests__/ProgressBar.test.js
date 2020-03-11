import React from 'react'
import { shallow, mount } from 'enzyme'
import ProgressBar from '../lib/ProgressBar'

describe('<ProgressBar />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<ProgressBar />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<ProgressBar className="my-progress-bar" />).hasClass(
        'my-progress-bar',
      ),
    ).toBe(true)
  })

  it('renders the content with class', () => {
    const renderedComponent = mount(<ProgressBar />)
    expect(renderedComponent.find('.progress-bar__content').length).toBe(1)
  })
})
