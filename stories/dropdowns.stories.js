import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Dropdowns', module)
  .add('Default', () => (
    <StoryLayout rows={1} template="300px">
      <select className="input input--rounded input--dropdown">
        <option value="">SELECT</option>
        <option value="1">item 1</option>
        <option value="2">item 2</option>
        <option value="3">item 3</option>
      </select>
    </StoryLayout>
  ))
  .add('Disabled', () => (
    <StoryLayout rows={1} template="300px" justify="stretch">
      <select className="input input--rounded input--dropdown" disabled>
        <option value="">SELECT</option>
        <option value="1">item 1</option>
        <option value="2">item 2</option>
        <option value="3">item 3</option>
      </select>
    </StoryLayout>
  ))
  .add('Labeled', () => (
    <StoryLayout rows={1} template="500px" justify="stretch">
      <div className="field">
        <label className="label">label:</label>
        <select className="input input--rounded input--dropdown">
          <option value="">SELECT</option>
          <option value="1">item 1</option>
          <option value="2">item 2</option>
          <option value="3">item 3</option>
        </select>
      </div>
    </StoryLayout>
  ))
