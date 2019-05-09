import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'

import Dropdown from '../src/Dropdown'

describe('<Button />', () => {
  it('should display a list of <option> for given data', () => {
    expect(
      mount(
        <Dropdown
          options={[
            { label: 'tomato', value: 't' },
            { label: 'onion', value: 'o' },
          ]}
        />,
      )
        .find('option')
        .map(n => n.text()),
    ).toEqual(expect.arrayContaining(['SELECT', 'tomato', 'onion']))
  })

  it('should have a default value by default', () => {
    expect(mount(<Dropdown options={[]} />).find('option')).toExist()
  })

  it('should accept a default value', () => {
    expect(
      mount(<Dropdown default_={{ label: 'default', value: '' }} />)
        .find('option')
        .text(),
    ).toBe('default')
  })

  it('should accept no default value', () => {
    expect(mount(<Dropdown default_={null} />).find('option')).toHaveLength(0)
  })

  it('should accept extra attributes', () => {
    expect(
      shallow(<Dropdown required disabled />).find(
        'select[disabled][required]',
      ),
    ).toExist()
  })
})
