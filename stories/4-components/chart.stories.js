import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Chart', module)
  .add(
    'Simple Counter/Default',
    () => (
      <>
        <div className="counter-default counter-default--large">12</div>
        <div className="counter-default counter-default--normal">8</div>
        <div className="counter-default counter-default--small">2</div>
      </>
    ),
    { layout: { rows: 1, cols: 3, gap: '50px' } },
  )
  .add(
    'Simple Counter / Condensed',
    () => (
      <>
        <div className="counter-condensed counter-condensed--small">12</div>
      </>
    ),
    { layout: { rows: 1, cols: 3, gap: '50px' } },
  )
