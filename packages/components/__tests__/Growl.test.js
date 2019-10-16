import React from 'react'
import { shallow } from 'enzyme'
import Growl from '../src/Growl'

describe('<Growl />', () => {
  it('should render the element with the correct classes', () => {
    expect(shallow(<Growl />).hasClass('growl-msg')).toBe(true)
    expect(shallow(<Growl />).hasClass('growl-msg--error')).toBe(false)
  })

  it('should render error variant in isError prop is passed', () => {
    expect(shallow(<Growl isError />).hasClass('growl-msg--error')).toBe(true)
  })

  it('renders the text passed from the component', () => {
    expect(
      shallow(<Growl>This is a test</Growl>)
        .find('.growl-msg__text')
        .text(),
    ).toBe('This is a test')
  })
})
