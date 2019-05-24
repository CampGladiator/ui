import React from 'react'

import { storiesOf } from '@storybook/react'

import EllipsisLoader from '../../packages/components/src/EllipsisLoader'

storiesOf('Components|Loader', module).add(
  'Ellipsis',
  () => (
    <>
      <EllipsisLoader />
      <EllipsisLoader white />
    </>
  ),
  { layout: { rows: 2, gap: '50px 0', background: '#231F20' } },
)
