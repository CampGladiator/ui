import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Labels', module)
  .add(
    'Positions',
    () => (
      <>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--tr">Label</legend>
        </figure>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--tl">Label</legend>
        </figure>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--bl">Label</legend>
        </figure>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--br">Label</legend>
        </figure>
      </>
    ),
    { layout: { rows: 2 } },
  )
  .add(
    'Colors',
    () => (
      <>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--tr">Label</legend>
        </figure>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--navy image-label--tr">
            Label
          </legend>
        </figure>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--gladiator image-label--tr">
            Label
          </legend>
        </figure>
      </>
    ),
    { layout: { columns: 3 } },
  )
  .add(
    'Sizes',
    () => (
      <>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--tr">Label</legend>
        </figure>
        <figure style={{ position: 'relative' }}>
          <img
            src="https://cgui.campgladiator.com/images/shirt.jpg"
            width="200"
          />
          <legend className="image-label image-label--tr image-label--small">
            Label
          </legend>
        </figure>
      </>
    ),
    { layout: true },
  )
