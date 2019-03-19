import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import centered from '@storybook/addon-centered/react'

import '../build/main.css'

addDecorator(centered)

storiesOf('Button', module)
  .add('Primary', () => (
    <>
      <button className="btn btn--primary btn--xlarge">extra large</button>
      <button className="btn btn--primary btn--large">large</button>
      <button className="btn btn--primary">default</button>
      <button className="btn btn--primary btn--small">small</button>
      <button className="btn btn--primary btn--xsmall">extra small</button>
    </>
  ))
