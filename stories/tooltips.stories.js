import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Tooltips', module)
  .add('Default', () => (
    <StoryLayout>
      <figure className="tooltip">
        <span className="tooltip__trigger">Hover me</span>
        <legend className="tooltip__content">Tooltip message</legend>
      </figure>
    </StoryLayout>
  ))
  .add('Fixed', () => (
    <StoryLayout>
      <figure className="tooltip tooltip--fixed">
        <span className="tooltip__trigger">Hover me</span>
        <legend className="tooltip__content">Tooltip message</legend>
      </figure>
    </StoryLayout>
  ))
