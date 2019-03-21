import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Checkboxes', module)
  .add('Default', () => (
    <StoryLayout rows={2} justify="center" gap="20px">
      <input className="checkbox" type="checkbox" />
      <input className="checkbox" checked type="checkbox" />
    </StoryLayout>
  ))
  .add('Labeled', () => (
    <StoryLayout rows={2} justify="center" gap="50px">
      <div className="checkbox">
        <input id="1" className="checkbox__input" type="checkbox" />
        <label className="checkbox__label" htmlFor="1">
          Checkbox label
        </label>
      </div>
      <div className="checkbox">
        <label className="checkbox__label" htmlFor="2">
          Checkbox label
        </label>
        <input id="2" className="checkbox__input" type="checkbox" />
      </div>
    </StoryLayout>
  ))
  .add('Disabled', () => (
    <StoryLayout rows={1} justify="center">
      <input className="checkbox" disabled type="checkbox" />
    </StoryLayout>
  ))
