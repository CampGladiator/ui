import React from 'react'

export default {
  title: 'Elements|Radio Buttons',
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
