import React from 'react'

import Dropdown from '../../packages/components/lib/Dropdown'

const options = [
  { label: 'item 1', value: '1' },
  { label: 'item 2', value: '2' },
  { label: 'item 3', value: '3' },
]

export default {
  title: 'Elements|Dropdowns',
}

export const defaultStory = () => (
  <>
    <Dropdown options={options} />
    <Dropdown disabled options={options} />
    <div className="fieldset">
      <label className="label">label:</label>
      <Dropdown options={options} />
    </div>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: {
    layout: { rows: 3, template: '300px' },
    info: { maxPropArrayLength: 0 },
  },
}
