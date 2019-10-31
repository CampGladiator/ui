import React from 'react'
import Growl from '../../packages/components/lib/Growl'
import Button from '../../packages/components/lib/Button'

const toggleGrowl = () =>
  document.getElementById('growlInfo').classList.toggle('growl-msg--open')

export default {
  title: 'Components|Growl Messages',
}

export const infoStory = () => (
  <>
    <Button solid primary onClick={toggleGrowl}>
      Toggle Growl Message
    </Button>
    <Growl className="growl-msg--open" id="growlInfo" onClick={toggleGrowl}>
      <b>Hello:</b> This is an info message.
    </Growl>
  </>
)

infoStory.story = {
  name: 'Info',

  parameters: {
    layout: { template: '40vw' },
    notes: 'This is a note',
    info: {
      text: `
            ## Growl Message
            Growls are semi-disruptive overlays that can tell the user important information without interrupting their current action. These are useful for showing error messages or other important information that might require the user to continue to interact with the interface without much disruption. The user should always be able to dismiss growl messages. 
            
            Growl messages can sometimes block important content if that content sits in the upper right hand corner of the view. Keep this in mind when designing your interface, and when choosing to use growl messages. 
            
            Growls have the highest layer priority z-index of any element in the CGUI and should be designed to overlay any other interactions or overlays in your interface. At this time, Growl messages cannot be stacked without additional coding necessary.
          `,
    },
  },
}

export const error = () => (
  <>
    <Button solid primary onClick={toggleGrowl}>
      Toggle Growl Message
    </Button>
    <Growl
      isError
      className="growl-msg--open"
      id="growlInfo"
      onClick={toggleGrowl}
    >
      <b>Alert:</b> This is an error message!
    </Growl>
  </>
)

error.story = {
  parameters: {
    layout: { template: '40vw' },
    info: {
      text: `
            ### Error Message
            Error growl messages are lightweight notifications designed to mimic the push notifications when we need to hightlight an error.
          `
    }
  }
}
