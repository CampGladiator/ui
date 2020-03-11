import React from 'react'
import { shallow, mount } from 'enzyme'
import Steps from '../lib/Steps'

const steps = ['Step One', 'Step Two', 'Step Three', 'Step Four']

describe('<Steps />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Steps />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Steps steps={steps} className="my-steps" />).hasClass(
        'my-steps',
      ),
    ).toBe(true)
  })

  it('renders the step item with class', () => {
    const renderedComponent = mount(<Steps steps={steps} />)
    expect(renderedComponent.find('.step').length).toBe(steps.length)
  })
})
