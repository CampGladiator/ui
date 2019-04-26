import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Set Selectors', module).add(
  'Default',
  () => (
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
  ),
  { layout: { rows: 3, gap: '20px' } },
)
