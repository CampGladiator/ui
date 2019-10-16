import React from 'react'
import { storiesOf } from '@storybook/react'
import Growl from '../../packages/components/src/Growl'
import Button from '../../packages/components/src/Button'

const toggleGrowl = () =>
  document.getElementById('growlInfo').classList.toggle('growl-msg--open')

storiesOf('Components|Growl Messages', module)
  .add(
    'Info',
    () => (
      <>
        <Button solid primary onClick={toggleGrowl}>
          Toggle Growl Message
        </Button>
        <Growl className="growl-msg--open" id="growlInfo" onClick={toggleGrowl}>
          <b>Hello:</b> This is an info message.
        </Growl>
      </>
    ),
    {
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
  )
  .add(
    'Error',
    () => (
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
    ),
    {
      layout: { template: '40vw' },
    },
  )
