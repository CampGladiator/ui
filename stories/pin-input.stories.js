import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

storiesOf('Pin Input', module).add(
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
            inputmode="numeric"
          />
        </span>
        <span className="pin-input-part">
          <input
            name="pin"
            className="pin-input__char form-field"
            placeholder="-"
            type="tel"
            inputmode="numeric"
          />
        </span>
        <span className="pin-input-part">
          <input
            name="pin"
            className="pin-input__char form-field"
            placeholder="-"
            type="tel"
            inputmode="numeric"
          />
        </span>
        <span className="pin-input-part">
          <input
            name="pin"
            className="pin-input__char form-field"
            placeholder="-"
            type="tel"
            inputmode="numeric"
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
            inputmode="numeric"
          />
        </span>
        <span className="pin-input-part pin-input-part--filled">
          <input
            name="pin"
            className="pin-input__char form-field"
            placeholder="-"
            type="tel"
            value="1"
            inputmode="numeric"
          />
        </span>
        <span className="pin-input-part pin-input-part--filled">
          <input
            name="pin"
            className="pin-input__char form-field"
            placeholder="-"
            type="tel"
            value="1"
            inputmode="numeric"
          />
        </span>
        <span className="pin-input-part pin-input-part--filled">
          <input
            name="pin"
            className="pin-input__char form-field"
            placeholder="-"
            type="tel"
            value="1"
            inputmode="numeric"
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
