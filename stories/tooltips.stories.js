import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Tooltips', module)
  .addParameters({ layout: { offsetTop: 64 } })
  .add('Default', () => (
    <figure className="tooltip">
      <span className="tooltip__trigger">Hover me</span>
      <legend className="tooltip__content">Tooltip message</legend>
    </figure>
  ))
  .add('Fixed', () => (
    <figure className="tooltip tooltip--fixed">
      <span className="tooltip__trigger">Fixed</span>
      <legend className="tooltip__content">Tooltip message</legend>
    </figure>
  ))
