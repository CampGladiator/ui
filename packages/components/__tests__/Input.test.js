import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Input from '../src/Input'

describe('<Input />', () => {
  it('should be set various attributes', () => {
    const inputAttributes = {
      autofocus: true,
      name: 'Attributes Test',
      value: 'Attributes Test',
    }

    expect(
      shallow(<Input {...inputAttributes} />).find(
        'input[autofocus][value][name]',
      ),
    ).toExist()
  })

  it('should blend more than one class', () => {
    expect(
      shallow(<Input centered rounded />)
        .find('.input--centered')
        .hasClass('input--rounded'),
    ).toBe(true)
  })
})
