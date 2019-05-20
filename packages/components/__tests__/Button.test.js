import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Button from '../src/Button'
import bp from '../src/breakpoints'

describe('<Button />', () => {
  it('renders without crashing', () => {
    expect(() => shallow(<Button />)).not.toThrow()
  })

  it('accepts any extra classes', () => {
    expect(
      shallow(<Button className="my-button" />).hasClass('my-button'),
    ).toBe(true)
  })

  it('renders button with modifier class', () => {
    expect(shallow(<Button solid />).hasClass('button--solid')).toBe(true)
  })

  it('should add `disabled` attribute to the element', () => {
    expect(shallow(<Button disabled />).find('button[disabled]')).toExist()
  })

  it('should add size as a modifier class', () => {
    expect(shallow(<Button size="xsmall" />).hasClass('button--xsmall')).toBe(
      true,
    )
  })

  it('should add size class for the given ', () => {
    expect(
      shallow(<Button media={{ [bp.phoneOnly]: 'xsmall' }} />).hasClass(
        'button--xsmall@phone-only',
      ),
    ).toBe(true)
  })

  it('calls `onClick` handler', () => {
    const handler = sinon.spy()

    shallow(<Button onClick={handler} />)
      .find('button')
      .simulate('click')

    expect(handler).toHaveProperty('callCount', 1)
  })
})
