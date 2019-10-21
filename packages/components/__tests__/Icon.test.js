import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../lib/Icon'

describe('<Icon />', () => {
  it('should use the given name as modifier', () => {
    expect(shallow(<Icon name="alert" />).hasClass('icon--alert')).toBe(true)
  })

  it('should use `aria-hidden` by default', () => {
    expect(shallow(<Icon name="alert" />).find('[aria-hidden]')).toExist()
  })

  it('should allow passing a size value', () => {
    expect(
      shallow(<Icon name="alert" size={16} />)
        .first()
        .prop('style'),
    ).toHaveProperty('fontSize', 16)
  })

  it('should render icon as an <i>', () => {
    expect(shallow(<Icon name="alert" />).name()).toBe('i')
  })

  it('should accept a className', () => {
    expect(
      shallow(<Icon className="my-icon" name="alert" />).hasClass('my-icon'),
    ).toBe(true)
  })
})
