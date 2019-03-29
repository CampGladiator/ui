import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Elements|Buttons', module)
  .addParameters({ layout: { rows: 5, columns: 3, gap: '24px 0' } })
  .add('Primary', () => (
    <>
      <button className="button button--solid button--primary button--xlarge">
        extra large
      </button>
      <button className="button button--solid button--primary button--large">
        large
      </button>
      <button className="button button--solid button--primary">default</button>
      <button className="button button--solid button--primary button--small">
        small
      </button>
      <button className="button button--solid button--primary button--xsmall">
        extra small
      </button>
      <button className="button button--primary button--outline button--xlarge">
        extra large
      </button>
      <button className="button button--primary button--outline button--large">
        large
      </button>
      <button className="button button--primary button--outline">
        default
      </button>
      <button className="button button--primary button--outline button--small">
        small
      </button>
      <button className="button button--primary button--outline button--xsmall">
        extra small
      </button>
      <button className="button button--primary button--xlarge">
        extra large
      </button>
      <button className="button button--primary button--large">large</button>
      <button className="button button--primary">default</button>
      <button className="button button--primary button--small">small</button>
      <button className="button button--primary button--xsmall">
        extra small
      </button>
      <button className="button button--solid button--xlarge">
        <i className="button__icon icon icon--check" />
        extra large
      </button>
      <button className="button button--solid button--large">
        <i className="button__icon icon icon--check" /> large
      </button>
      <button className="button button--solid">
        <i className="button__icon icon icon--check" /> default
      </button>
      <button className="button button--solid button--small">
        <i className="button__icon icon icon--check" /> small
      </button>
      <button className="button button--solid button--xsmall">
        <i className="button__icon icon icon--check" />
        extra small
      </button>
    </>
  ))
  .add('Secondary', () => (
    <>
      <button className="button button--solid button--secondary button--xlarge">
        extra large
      </button>
      <button className="button button--solid button--secondary button--large">
        large
      </button>
      <button className="button button--solid button--secondary">
        default
      </button>
      <button className="button button--solid button--secondary button--small">
        small
      </button>
      <button className="button button--solid button--secondary button--xsmall">
        extra small
      </button>
      <button className="button button--secondary button--outline button--xlarge">
        extra large
      </button>
      <button className="button button--secondary button--outline button--large">
        large
      </button>
      <button className="button button--secondary button--outline">
        default
      </button>
      <button className="button button--secondary button--outline button--small">
        small
      </button>
      <button className="button button--secondary button--outline button--xsmall">
        extra small
      </button>
      <button className="button button--secondary button--xlarge">
        extra large
      </button>
      <button className="button button--secondary button--large">large</button>
      <button className="button button--secondary">default</button>
      <button className="button button--secondary button--small">small</button>
      <button className="button button--secondary button--xsmall">
        extra small
      </button>
    </>
  ))
  .add('Disabled', () => (
    <>
      <button disabled className="button button--solid button--xlarge">
        extra large
      </button>
      <button disabled className="button button--solid button--large">
        large
      </button>
      <button disabled className="button button--solid">
        default
      </button>
      <button disabled className="button button--solid button--small">
        small
      </button>
      <button disabled className="button button--solid button--xsmall">
        extra small
      </button>
      <button disabled className="button button--outline button--xlarge">
        extra large
      </button>
      <button disabled className="button button--outline button--large">
        large
      </button>
      <button disabled className="button button--outline">
        default
      </button>
      <button disabled className="button button--outline button--small">
        small
      </button>
      <button disabled className="button button--outline button--xsmall">
        extra small
      </button>
      <button disabled className="button button--xlarge">
        extra large
      </button>
      <button disabled className="button button--large">
        large
      </button>
      <button disabled className="button">
        default
      </button>
      <button disabled className="button button--small">
        small
      </button>
      <button disabled className="button button--xsmall">
        extra small
      </button>
    </>
  ))
  .addParameters({ layout: { rows: 5, gap: '24px 100px' } })
  .add('Dark', () => (
    <>
      <button className="button button--solid button--dark button--xlarge">
        extra large
      </button>
      <button className="button button--solid button--dark button--large">
        large
      </button>
      <button className="button button--solid button--dark">default</button>
      <button className="button button--solid button--dark button--small">
        small
      </button>
      <button className="button button--solid button--dark button--xsmall">
        extra small
      </button>
    </>
  ))
  .add('Gray', () => (
    <>
      <button className="button button--gray button--outline button--xlarge">
        extra large
      </button>
      <button className="button button--gray button--outline button--large">
        large
      </button>
      <button className="button button--gray button--outline">default</button>
      <button className="button button--gray button--outline button--small">
        small
      </button>
      <button className="button button--gray button--outline button--xsmall">
        extra small
      </button>
    </>
  ))
  .add(
    'White',
    () => (
      <>
        <button className="button button--outline button--white button--xlarge">
          extra large
        </button>
        <button className="button button--outline button--white button--large">
          large
        </button>
        <button className="button button--outline button--white">
          default
        </button>
        <button className="button button--outline button--white button--small">
          small
        </button>
        <button className="button button--outline button--white button--xsmall">
          extra small
        </button>
      </>
    ),
    { layout: { background: '#231F20' } },
  )
