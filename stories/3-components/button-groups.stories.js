import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Button groups', module)
  .addParameters({
    layout: { rows: 4, gap: '20px 0' },
  })
  .add('Primary', () => (
    <>
      <div className="button-group">
        <button className="button button--solid button--primary button--large button-group__left">
          left large
        </button>
        <button className="button button--primary button--outline button--large button-group__right">
          right large
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--primary button-group__left">
          left default
        </button>
        <button className="button button--primary button--outline button-group__right">
          right default
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--primary button--small button-group__left">
          left small
        </button>
        <button className="button button--primary button--outline button--small button-group__right">
          right small
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--primary button--xsmall button-group__left">
          left extra small
        </button>
        <button className="button button--primary button--outline button--xsmall button-group__right">
          right extra small
        </button>
      </div>
    </>
  ))
  .add('Secondary', () => (
    <>
      <div className="button-group">
        <button className="button button--solid button--secondary button--large button-group__left">
          left large
        </button>
        <button className="button button--secondary button--outline button--large button-group__right">
          right large
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--secondary button-group__left">
          left default
        </button>
        <button className="button button--secondary button--outline button-group__right">
          right default
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--secondary button--small button-group__left">
          left small
        </button>
        <button className="button button--secondary button--outline button--small button-group__right">
          right small
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--secondary button--xsmall button-group__left">
          left extra small
        </button>
        <button className="button button--secondary button--outline button--xsmall button-group__right">
          right extra small
        </button>
      </div>
    </>
  ))
  .add('Dark', () => (
    <>
      <div className="button-group">
        <button className="button button--solid button--dark button--large button-group__left">
          left large
        </button>
        <button className="button button--dark button--outline button--large button-group__right">
          right large
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--dark button-group__left">
          left default
        </button>
        <button className="button button--dark button--outline button-group__right">
          right default
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--dark button--small button-group__left">
          left small
        </button>
        <button className="button button--dark button--outline button--small button-group__right">
          right small
        </button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--dark button--xsmall button-group__left">
          left extra small
        </button>
        <button className="button button--dark button--outline button--xsmall button-group__right">
          right extra small
        </button>
      </div>
    </>
  ))
