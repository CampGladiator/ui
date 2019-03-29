import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Checkboxes', module)
  .addParameters({ layout: { rows: 2, justify: 'center', gap: '20px' } })
  .add('Default', () => (
    <>
      <div className="checkbox">
        <input className="checkbox__input" type="checkbox" />
        <i className="checkbox__tick" />
      </div>
      <div className="checkbox">
        <input className="checkbox__input" checked type="checkbox" />
        <i className="checkbox__tick" />
      </div>
    </>
  ))
  .add('Labeled', () => (
    <>
      <div className="checkbox">
        <input id="1" className="checkbox__input" type="checkbox" />
        <label className="checkbox__label" htmlFor="1">
          Checkbox label
        </label>
        <i className="checkbox__tick" />
      </div>
      <div className="checkbox">
        <label className="checkbox__label" htmlFor="2">
          Checkbox label
        </label>
        <input id="2" className="checkbox__input" type="checkbox" />
        <i className="checkbox__tick" />
      </div>
    </>
  ))
