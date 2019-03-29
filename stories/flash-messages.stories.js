import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Flash Messages', module)
  .add(
    'Default',
    () => (
      <div className="flash-message">
        <span className="flash-message__badge">0</span>
        <section className="flash-message__content">
          <p>Link alert message goes here</p>
          <button className="button button--outline button--white">
            action
          </button>
        </section>
        <i className="icon icon--close" />
      </div>
    ),
    { layout: { template: '80vw' } },
  )
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
        <i className="icon icon--close" />
      </div>
    ),
    {
      viewport: { defaultViewport: 'iphone5' },
    },
  )
