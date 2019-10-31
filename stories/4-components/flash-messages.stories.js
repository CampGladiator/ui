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
  parameters: { 
    layout: { template: '80vw' },
    info: {
      text: `
      ## Flash Message
      The flash message is a full-width banner that typically sits at the top of a view or interface area. 
      It is helpful for displaying important information to the user that might need their attention. 
      Flash messages are more disruptive than growl messages but less so than a modal overlay.
      The badge on the left side of the banner can be used to show a number of notifications that apply, for example, 
      if there are multiple messages that require the user's attention - without needing to show multiple messages for each notification.
      `
    }
  }
}
