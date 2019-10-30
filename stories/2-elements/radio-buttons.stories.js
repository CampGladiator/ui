import React from 'react'

const radioButtonsInfoText = `
  ## RADIO BUTTONS
  Radio Buttons are typically used to allow a user to select a single option from a list of preset options.
  Radio buttons are often arranged in a group of at least two or more options. They take the form of a hollow circle which represents a "Deselected" state and a circle with a dot inside for a "Selected" state.
  A user is allowed to choose only a single option or radio button among the set or group.
  `

export default {
  title: 'Elements|Radio Buttons',
  parameters: {
    info: {
      text: radioButtonsInfoText,
    },
  },
}

export const defaultStory = () => (
  <>
    <form className="radio-list">
      <label id="1" className="radio-list__item">
        <input
          type="radio"
          name="number"
          htmlFor="1"
          className="radio-list__input"
        />
        item 1
      </label>
      <label id="2" className="radio-list__item">
        <input
          type="radio"
          name="number"
          htmlFor="2"
          className="radio-list__input"
        />
        item 2
      </label>
      <label id="3" className="radio-list__item">
        <input
          type="radio"
          name="number"
          htmlFor="3"
          className="radio-list__input"
        />
        item 3
      </label>
    </form>
    <form className="radio-list radio-list--inline">
      <label id="a" className="radio-list__item">
        <input
          type="radio"
          name="letter"
          htmlFor="a"
          className="radio-list__input"
        />
        item 1
      </label>
      <label id="b" className="radio-list__item">
        <input
          type="radio"
          name="letter"
          htmlFor="b"
          className="radio-list__input"
        />
        item 2
      </label>
      <label id="c" className="radio-list__item">
        <input
          type="radio"
          name="letter"
          htmlFor="c"
          className="radio-list__input"
        />
        item 3
      </label>
    </form>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { layout: { rows: 2, justify: 'center' } },
}
