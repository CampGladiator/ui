import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import centered from '@storybook/addon-centered/react'

import '../build/main.css'

addDecorator(centered)

storiesOf('Buttons|Primary', module)
  .add('Solid', () => (
    <>
      <button className="button button--solid button--primary button--xlarge">extra large</button>
      <button className="button button--solid button--primary button--large">large</button>
      <button className="button button--solid button--primary">default</button>
      <button className="button button--solid button--primary button--small">small</button>
      <button className="button button--solid button--primary button--xsmall">extra small</button>
    </>
  ), { info: { inline: true, header: false }})
  .add('Outline', () => (
    <>
      <button className="button button--primary button--outline button--xlarge">extra large</button>
      <button className="button button--primary button--outline button--large">large</button>
      <button className="button button--primary button--outline">default</button>
      <button className="button button--primary button--outline button--small">small</button>
      <button className="button button--primary button--outline button--xsmall">extra small</button>
    </>
  ))
  .add('Default', () => (
    <>
      <button className="button button--primary button--xlarge">extra large</button>
      <button className="button button--primary button--large">large</button>
      <button className="button button--primary">default</button>
      <button className="button button--primary button--small">small</button>
      <button className="button button--primary button--xsmall">extra small</button>
    </>
  ))

storiesOf('Buttons|Secondary', module)
  .add('Solid', () => (
    <>
      <button className="button button--solid button--secondary button--xlarge">extra large</button>
      <button className="button button--solid button--secondary button--large">large</button>
      <button className="button button--solid button--secondary">default</button>
      <button className="button button--solid button--secondary button--small">small</button>
      <button className="button button--solid button--secondary button--xsmall">extra small</button>
    </>
  ))
  .add('Outline', () => (
    <>
      <button className="button button--secondary button--outline button--xlarge">extra large</button>
      <button className="button button--secondary button--outline button--large">large</button>
      <button className="button button--secondary button--outline">default</button>
      <button className="button button--secondary button--outline button--small">small</button>
      <button className="button button--secondary button--outline button--xsmall">extra small</button>
    </>
  ))
  .add('Default', () => (
    <>
      <button className="button button--secondary button--xlarge">extra large</button>
      <button className="button button--secondary button--large">large</button>
      <button className="button button--secondary">default</button>
      <button className="button button--secondary button--small">small</button>
      <button className="button button--secondary button--xsmall">extra small</button>
    </>
  ))

storiesOf('Buttons|Dark', module)
  .add('Default', () => (
    <>
      <button className="button button--solid button--dark button--xlarge">extra large</button>
      <button className="button button--solid button--dark button--large">large</button>
      <button className="button button--solid button--dark">default</button>
      <button className="button button--solid button--dark button--small">small</button>
      <button className="button button--solid button--dark button--xsmall">extra small</button>
    </>
  ))

storiesOf('Buttons|White', module)
  .add('Default', () => (
    <div style={{
      background: 'rgb(51, 51, 51)',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <button className="button button--outline button--white button--xlarge">extra large</button>
      <button className="button button--outline button--white button--large">large</button>
      <button className="button button--outline button--white">default</button>
      <button className="button button--outline button--white button--small">small</button>
      <button className="button button--outline button--white button--xsmall">extra small</button>
    </div>
  ))

storiesOf('Buttons|Disabled', module)
  .add('Solid', () => (
    <>
      <button disabled className="button button--solid button--xlarge">extra large</button>
      <button disabled className="button button--solid button--large">large</button>
      <button disabled className="button button--solid">default</button>
      <button disabled className="button button--solid button--small">small</button>
      <button disabled className="button button--solid button--xsmall">extra small</button>
    </>
  ))
  .add('Outline', () => (
    <>
      <button disabled className="button button--outline button--xlarge">extra large</button>
      <button disabled className="button button--outline button--large">large</button>
      <button disabled className="button button--outline">default</button>
      <button disabled className="button button--outline button--small">small</button>
      <button disabled className="button button--outline button--xsmall">extra small</button>
    </>
  ))
  .add('Default', () => (
    <>
      <button disabled className="button button--xlarge">extra large</button>
      <button disabled className="button button--large">large</button>
      <button disabled className="button">default</button>
      <button disabled className="button button--small">small</button>
      <button disabled className="button button--xsmall">extra small</button>
    </>
  ))
