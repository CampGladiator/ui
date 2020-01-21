import React from 'react'
import Dropdown from '../../packages/components/lib/Dropdown'

const options = [
  { label: 'item 1', value: '1' },
  { label: 'item 2', value: '2' },
  { label: 'item 3', value: '3' },
]

const dropdownsInfoText = `
  ## DROPDOWNS
  Dropdowns are typically used to allow a user to select a single option from a list of preset options. These can be expanded in functionality to improve the user-experience. For example, dropdowns with a lot of options could include an embedded type-to-search form. Currently this type of custom functionality is not built in to the component. Info text can be added below a single input field to give the user instructions or additional information about the field.
  `

export default {
  title: 'Elements|Dropdowns',
  parameters: {
    info: {
      text: dropdownsInfoText,
    },
  },
}

export const defaultStory = () => (
  <>
    <Dropdown options={options} />
    <Dropdown disabled options={options} />
    <div className="fieldset">
      <label className="label">label:</label>
      <Dropdown options={options} />
    </div>
    <div className="fieldset fieldset--inline">
      <label className="label">label:</label>
      <Dropdown options={options} />
    </div>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: {
    layout: { rows: 4, template: 'minmax(270px, 500px)', gap: '50px', justify: 'stretch' },
    info: { maxPropArrayLength: 0 },
  },
}
