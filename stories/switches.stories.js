import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Switches', module).add('Default', () => (
  <StoryLayout rows={2} gap="50px">
    <span
      className="switch"
      onClick={e => e.target.classList.toggle('switch--on')}
      role="button"
      aria-pressed="false"
    />
    <span className="switch switch--on" role="button" aria-pressed="true" />
  </StoryLayout>
))
