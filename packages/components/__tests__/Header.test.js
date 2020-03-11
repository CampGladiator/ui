import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from '../lib/Header'

const steps = [
  {
    label: 'Step One/Two',
    value: ['/page1', '/page2'],
  },
  {
    label: 'Step Three',
    value: '/page3',
  },
]

describe('<Header />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Header />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Header className="my-header" />).hasClass('my-header'),
    ).toBe(true)
  })

  it('renders header with modifier class', () => {
    const renderedComponent = mount(<Header bordered />)
    expect(renderedComponent.find('.header.header--bordered').length).toBe(1)
  })

  it('renders header with modifier class', () => {
    const renderedComponent = mount(<Header fixed />)
    expect(renderedComponent.find('.header.header--fixed').length).toBe(1)
  })

  it('renders header with step header class', () => {
    const renderedComponent = mount(
      <Header>
        <Header.Steps steps={steps} />
      </Header>,
    )
    expect(renderedComponent.find('.steps').length).toBe(1)
  })

  it('renders header with step header class with extra classes', () => {
    const renderedComponent = mount(
      <Header>
        <Header.Steps className="my-step-header" steps={steps} />
      </Header>,
    )
    expect(renderedComponent.find('.steps.my-step-header').length).toBe(
      1,
    )
  })

  it('renders header with step header and step progress class', () => {
    const renderedComponent = mount(
      <Header>
        <Header.Steps steps={steps} />
      </Header>,
    )
    expect(renderedComponent.find('.progress-bar').length).toBe(1)
  })
})
