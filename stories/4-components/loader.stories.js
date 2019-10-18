import React from 'react'

import EllipsisLoader from '../../packages/components/src/EllipsisLoader'

export default {
  title: 'Components|Loader',
}

export const ellipsis = () => (
  <>
    <EllipsisLoader />
    <EllipsisLoader white />
  </>
)

ellipsis.story = {
  parameters: { layout: { rows: 2, gap: '50px 0', background: '#231F20' } },
}
