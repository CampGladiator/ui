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
  parameters: { layout: { rows: 2, gap: '50px' } },
}
