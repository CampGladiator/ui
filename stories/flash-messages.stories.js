import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Flash Messages', module)
  .add('Default', () => (
    <StoryLayout template="80vw">
      <div className="flash-message">
        <span className="flash-message__badge">0</span>
        <section className="flash-message__content">
          <p>Link alert message goes here</p>
          <button className="button button--outline button--white">
            action
          </button>
        </section>
        <span>close</span>
      </div>
    </StoryLayout>
  ))
  .add(
    'Mobile',
    () => (
      <div className="flash-message">
        <span className="flash-message__badge">0</span>
        <section className="flash-message__content">
          <p>Link alert message goes here</p>
          <button className="button button--outline button--white">
            action
          </button>
        </section>
        <span>&times;</span>
      </div>
    ),
    { viewport: { defaultViewport: 'iphone5' } },
  )
