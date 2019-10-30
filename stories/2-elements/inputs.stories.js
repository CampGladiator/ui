import React from 'react'

import Input from '../../packages/components/lib/Input'
import Button from '../../packages/components/lib/Button'

const inputsInfoText = `
  # Input Fields

  ## DEFAULT/SINGLE
  Single input fields can be used for collecting data that is standalone and does not have a logical grouping with other data. Info text can be added below a single input field to give the user instructions or additional information about the field.

  ## LABELED
  The label is used to tell users the value that should be entered in the associated input field. Example uses include user basic info (email/phone)

  ## GROUPED
  Grouped input fields are useful for collecting data that is related to allow the user to see that information in common groupings. Example uses include user basic info (first/last/email/phone) or a credit card form (cc/cvc/exp/zip).
  `

export default {
  title: 'Elements|Inputs',

  parameters: {
    layout: { rows: 2, template: '300px', gap: '50px 0' },
    info: {
      text: inputsInfoText,
    },
  },
}

export const defaultStory = () => (
  <>
    <Input placeholder="Placeholder" />
    <Input value="Filled" />
    <Input centered placeholder="Placeholder" />
    <Input centered value="Filled" />
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { layout: { rows: 4 } },
}

export const roundedStory = () => (
  <>
    <Input rounded placeholder="Placeholder" />
    <Input rounded value="Filled" />
  </>
)

roundedStory.story = {
  name: 'Rounded',
}

export const labeled = () => (
  <>
    <div className="fieldset">
      <label className="label" htmlFor="1">
        label:
      </label>
      <Input id="1" rounded placeholder="Placeholder" />
    </div>
    <div className="fieldset fieldset--inline">
      <label className="label" htmlFor="1">
        label:
      </label>
      <Input id="1" rounded placeholder="Placeholder" />
    </div>
    <div className="fieldset fieldset--inline">
      <label className="label" htmlFor="1">
        label:
      </label>
      <Input id="1" rounded value="Filled" />
    </div>
  </>
)

labeled.story = {
  parameters: {
    layout: { rows: 3, template: 'minmax(auto, 500px)', justify: 'stretch' },
  },
}

export const addon = () => (
  <>
    <div className="fieldset fieldset--inline">
      <Input placeholder="Placeholder" />
      <div className="fieldset fieldset__addon">
        <Button solid secondary size="small">
          action
        </Button>
      </div>
    </div>
    <div className="fieldset fieldset--inline">
      <Input placeholder="Placeholder" />
      <div className="fieldset fieldset__addon">
        <Button size="xsmall" outline gray>
          action
        </Button>
      </div>
    </div>
    <div className="fieldset fieldset--inline">
      <Input placeholder="Placeholder" />
      <div className="fieldset fieldset__addon">
        <i className="icon icon--check" />
      </div>
    </div>
  </>
)

addon.story = {
  parameters: { layout: { rows: 3 } },
}

export const grouped = () => (
  <>
    <div className="fieldset fieldset--inline">
      <Input placeholder="Placeholder" />
      <Input separator placeholder="Placeholder" />
    </div>
    <div className="fieldset fieldset--inline">
      <Input style={{ flex: '0 0 66%' }} placeholder="Placeholder" />
      <Input separator placeholder="Placeholder" />
    </div>
  </>
)

grouped.story = {
  parameters: { layout: { template: '500px', justify: 'stretch' } },
}
