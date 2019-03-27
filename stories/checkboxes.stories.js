import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Checkboxes', module)
  .addParameters({ layout: { rows: 2, justify: 'center', gap: '20px' } })
  .add('Default', () => (
    <>
      <input className="checkbox" type="checkbox" />
      <input className="checkbox" checked type="checkbox" />
    </>
  ))
  .add('Labeled', () => (
    <>
      <div className="checkbox">
        <input id="1" className="checkbox__input" type="checkbox" />
        <label className="checkbox__label" htmlFor="1">
          Checkbox label
        </label>
      </div>
      <div className="checkbox">
        <label className="checkbox__label" htmlFor="2">
          Checkbox label
        </label>
        <input id="2" className="checkbox__input" type="checkbox" />
      </div>
    </>
  ))
