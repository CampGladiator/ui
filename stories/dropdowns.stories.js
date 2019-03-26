import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

storiesOf('Dropdowns', module).add(
  'Default',
  () => (
    <>
      <select className="input input--rounded input--dropdown">
        <option value="">SELECT</option>
        <option value="1">item 1</option>
        <option value="2">item 2</option>
        <option value="3">item 3</option>
      </select>
      <select className="input input--rounded input--dropdown" disabled>
        <option value="">SELECT</option>
        <option value="1">item 1</option>
        <option value="2">item 2</option>
        <option value="3">item 3</option>
      </select>
      <div className="fieldset">
        <label className="label">label:</label>
        <select className="input input--rounded input--dropdown">
          <option value="">SELECT</option>
          <option value="1">item 1</option>
          <option value="2">item 2</option>
          <option value="3">item 3</option>
        </select>
      </div>
    </>
  ),
  { layout: { rows: 3, template: '300px' } },
)
