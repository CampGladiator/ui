import React from 'react'

export default {
  title: 'Elements|Checkboxes',

  parameters: {
    layout: { rows: 2, justify: 'center', gap: '20px' },
  },
}

export const defaultStory = () => (
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
)

const checkboxInfoText = `
  # CHECKBOXES
  Checkboxes are currently used for user validation such as agreeing to terms of service, opting in to a newsletter, or verifying user elegibility.
`
defaultStory.story = {
  name: 'Default',
  parameters: {
    info: {
      text: checkboxInfoText
    }
  }
}

export const labeled = () => (
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
)

const labeledInfoText = `
  # LABELED CHECKBOX
  The labeled checkbox is used to tell users the value that is associated to the input field. Example uses include user basic info like Gender
`
labeled.story = {
  parameters: {
    info: labeledInfoText
  },
}
