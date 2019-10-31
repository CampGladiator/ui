import React from 'react'

export default {
  title: 'Components|Set Selectors',
}

export const defaultStory = () => (
  <>
    <menu className="set-selector">
      <button className="set-selector-item">xs</button>
      <button className="set-selector-item">s</button>
      <button className="set-selector-item">m</button>
      <button className="set-selector-item">l</button>
      <button className="set-selector-item">xl</button>
    </menu>
    <menu className="set-selector">
      <button className="set-selector-item">xs</button>
      <button className="set-selector-item">s</button>
      <button className="set-selector-item set-selector-item--selected">
        m
      </button>
      <button className="set-selector-item">l</button>
      <button className="set-selector-item">xl</button>
    </menu>
    <menu className="set-selector">
      <button disabled className="set-selector-item">
        xs
      </button>
      <button disabled className="set-selector-item">
        s
      </button>
      <button disabled className="set-selector-item">
        m
      </button>
      <button disabled className="set-selector-item">
        l
      </button>
      <button disabled className="set-selector-item">
        xl
      </button>
    </menu>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { 
    layout: { rows: 3, gap: '20px' },
    info: {
      text: `
        ## Set Selector
        The component provides multiple size options to choose from. 
        Add a class 'set-selector-item--selected' to display selected item.
        This can also be displayed disabled by applying HTML disabled attribute.
      `
    }
  }
}
