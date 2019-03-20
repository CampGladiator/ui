import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Inputs', module)
  .add('Primary', () => (
    <StoryLayout rows={5} template="300px" gap="50px 0">
      <input className="input" placeholder="Placeholder" />
      <input className="input" value="Filled" />
      <input className="input input--centered" placeholder="Placeholder" />
      <input className="input input--centered" value="Filled" />
      <div className="field">
        <input className="input" placeholder="Placeholder" />
        <div className="field__addon">
          <button className="button button--small button--solid button--secondary">
            action
          </button>
        </div>
      </div>
    </StoryLayout>
  ))
  .add('Rounded', () => (
    <StoryLayout rows={5} template="300px" gap="50px 0">
      <input className="input input--rounded" placeholder="Placeholder" />
      <input className="input input--rounded" value="Filled" />
    </StoryLayout>
  ))
