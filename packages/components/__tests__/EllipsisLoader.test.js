import React from 'react'
import { shallow } from 'enzyme'
import EllipsisLoader from '../lib/EllipsisLoader'

describe('<EllipsisLoader />', () => {
  it('should has render three circle by default', () => {
    expect(
      shallow(<EllipsisLoader />)
        .first()
        .children(),
    ).toHaveLength(3)
  })

  it('should add `white` modifier', () => {
    expect(
      shallow(<EllipsisLoader white />).find('.ellipsis-loader--white'),
    ).toExist()
  })

  it('should have the `aria-live` attribute set to "assertive"', () => {
    expect(
      shallow(<EllipsisLoader />).find('[aria-live="assertive"]'),
    ).toExist()
  })

  it('should have the `role` attribute set to "alert"', () => {
    expect(
      shallow(<EllipsisLoader />).find('[aria-live="assertive"]'),
    ).toExist()
  })

  it('should have the `aria-label` attribute', () => {
    expect(
      shallow(<EllipsisLoader />).find('[aria-live="assertive"]'),
    ).toExist()
  })
})
