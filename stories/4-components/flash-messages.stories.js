import React from 'react'
import Button from '../../packages/components/lib/Button'
import Icon from '../../packages/components/lib/Icon'

export default {
  title: 'Components|Flash Messages',
}

export const defaultStory = () => (
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
)

defaultStory.story = {
  name: 'Default',
  parameters: { layout: { template: '80vw' } },
}
