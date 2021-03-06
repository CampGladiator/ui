import React from 'react'

export default {
  title: 'Components|Pin Input',
}

export const defaultStory = () => (
  <>
    <div className="pin-input">
      <span className="pin-input-part">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          inputMode="numeric"
        />
      </span>
      <span className="pin-input-part">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          inputMode="numeric"
        />
      </span>
      <span className="pin-input-part">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          inputMode="numeric"
        />
      </span>
      <span className="pin-input-part">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          inputMode="numeric"
        />
      </span>
      <button className="pin-input__toggle-visibility" type="button">
        <i className="icon icon--view" />
      </button>
    </div>
    <div className="pin-input">
      <span className="pin-input-part pin-input-part--filled">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          value="1"
          inputMode="numeric"
        />
      </span>
      <span className="pin-input-part pin-input-part--filled">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          value="1"
          inputMode="numeric"
        />
      </span>
      <span className="pin-input-part pin-input-part--filled">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          value="1"
          inputMode="numeric"
        />
      </span>
      <span className="pin-input-part pin-input-part--filled">
        <input
          name="pin"
          className="pin-input__char form-field"
          placeholder="-"
          type="tel"
          value="1"
          inputMode="numeric"
        />
      </span>
      <button className="pin-input__toggle-visibility" type="button">
        <i className="icon icon--view" />
      </button>
    </div>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { 
    layout: { rows: 2, gap: '20px' },
    info: {
      text: `
        ## Pin Input
        Currently, the masked input field is designed specifically for collecting the user's pin code when creating a pin. 
        Other use-cases may apply in the future. 
        Info text can be added below a single input field to give the user instructions or additional information 
        about the field.
      `
    }
  }
}
