import React from 'react'

export default {
  title: 'Components|Tooltips',

  parameters: {
    layout: { offsetTop: 64 },
  },
}

export const defaultStory = () => (
  <figure className="tooltip">
    <span className="tooltip__trigger">Hover me</span>
    <legend className="tooltip__content">Tooltip message</legend>
  </figure>
)

defaultStory.story = {
  name: 'Default',
  parameters: { 
    layout: { template: '80vw' },
    info: {
      text: `
          ## Tooltip
          Tooltip provides advisory information for a component.

          ### Default
          By default it opens up on a mouseenter event.
      `
    }
  }
}

export const fixed = () => (
  <figure className="tooltip tooltip--fixed">
    <span className="tooltip__trigger">Fixed</span>
    <legend className="tooltip__content">Tooltip message</legend>
  </figure>
)

fixed.story = {
  name: 'Fixed',
  parameters: { 
    layout: { template: '80vw' },
    info: {
      text: `
          ### Fixed
          Tooltip will remain in a fixed position and does not depend on mouseevent.
      `
    }
  }
}
