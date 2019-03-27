import React from 'react'

import { storiesOf } from '@storybook/react'

const toggleSwitch = e => e.target.classList.toggle('switch--on')

storiesOf('Switches', module).add(
  'Default',
  () => (
    <>
      <span
        className="switch"
        onClick={toggleSwitch}
        role="button"
        aria-pressed="false"
      />
      <span className="switch switch--on" role="button" aria-pressed="true" />
    </>
  ),
  { layout: { rows: 2, gap: '50px' } },
)
