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
}

export const fixed = () => (
  <figure className="tooltip tooltip--fixed">
    <span className="tooltip__trigger">Fixed</span>
    <legend className="tooltip__content">Tooltip message</legend>
  </figure>
)
