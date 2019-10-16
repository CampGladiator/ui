import React from 'react'
import Button from '../../packages/components/src/Button'
import Icon from '../../packages/components/src/Icon'
import { storiesOf } from '@storybook/react'

storiesOf('Components|Flash Messages', module).add(
  'Default',
  () => (
    <div className="flash-message">
      <span className="flash-message__badge">0</span>
      <section className="flash-message__content">
        <span>Link alert message goes here</span>
        <Button white outline>
          action
        </Button>
      </section>
      <Icon name="close" />
    </div>
  ),
  { layout: { template: '80vw' } },
)
