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
})
