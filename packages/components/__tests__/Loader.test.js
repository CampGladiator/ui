import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../src/Loader'


describe('<Loader />', () => {

  it('should has render three circle by default', () => {
    expect(shallow(<Loader />).first().find('div.loader__circle')).toHaveLength(3)
  })

  it('should add more circle to the loader Ex.: 6 circles', () => {
    expect(shallow(<Loader localSize={6}/>).first().find('div.loader__circle')).toHaveLength(6)
  })
})
