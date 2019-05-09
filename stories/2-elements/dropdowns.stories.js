import React from 'react'

import { storiesOf } from '@storybook/react'

import Dropdown from '../../packages/components/src/Dropdown'

const options = [
  { label: 'item 1', value: '1' },
  { label: 'item 2', value: '2' },
  { label: 'item 3', value: '3' },
]

storiesOf('Elements|Dropdowns', module).add(
  'Default',
  () => (
    <>
      <Dropdown options={options} />
      <Dropdown disabled options={options} />
      <div className="fieldset">
        <label className="label">label:</label>
        <Dropdown options={options} />
      </div>
    </>
  ),
  { layout: { rows: 3, template: '300px' } },
)
