import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Pin Input', module).add(
  'Default',
  () => (
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
  ),
  { layout: { rows: 2, gap: '20px' } },
)
