import React from 'react'

const toggleSwitch = e => e.target.classList.toggle('switch--on')

export default {
  title: 'Components|Switches',
}

export const defaultStory = () => (
  <>
    <span
      className="switch"
      onClick={toggleSwitch}
      role="button"
      aria-pressed="false"
    />
    <span className="switch switch--on" role="button" aria-pressed="true" />
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { 
    layout: { rows: 2, gap: '50px' },
    info: {
      text: `
      ## Switch
      Switch is a custom checkbox which uses the 'switch' and  'switch--on' class to render a toggle switch.
      A switch can mimic the HTML checkbox behavior to toggle between boolean values.
      `
    }
  }
}
