import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Labels', module)
  .add('Positions', () => (
    <StoryLayout rows={2} columns={2} gap="50px">
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
    </StoryLayout>
  ))
  .add('Colors', () => (
    <StoryLayout columns={3}>
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
    </StoryLayout>
  ))
  .add('Small', () => (
    <StoryLayout>
      <figure style={{ position: 'relative' }}>
        <img
          src="https://cgui.campgladiator.com/images/shirt.jpg"
          width="200"
        />
        <legend className="image-label image-label--tr image-label--small">
          Label
        </legend>
      </figure>
    </StoryLayout>
  ))
