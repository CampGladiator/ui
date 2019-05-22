import React from 'react'
import { shallow } from 'enzyme'

import EllipsisLoader from '../src/EllipsisLoader'

describe('<EllipsisLoader />', () => {
  it('should has render three circle by default', () => {
    expect(
      shallow(<EllipsisLoader />)
        .first()
        .find('div.loader__circle'),
    ).toHaveLength(3)
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
