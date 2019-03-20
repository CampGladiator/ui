import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import '../build/main.css'
import { StoryLayout } from './util'

storiesOf('Button groups', module)
  .add('Primary', () => (
    <StoryLayout rows={4} gap="50px 0">
      <div className="button-group">
        <button className="button button--solid button--primary button--large button-group__left">left large</button>
        <button className="button button--primary button--outline button--large button-group__right">right large</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--primary button-group__left">left default</button>
        <button className="button button--primary button--outline button-group__right">right default</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--primary button--small button-group__left">left small</button>
        <button className="button button--primary button--outline button--small button-group__right">right small</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--primary button--xsmall button-group__left">left extra small</button>
        <button className="button button--primary button--outline button--xsmall button-group__right">right extra small</button>
      </div>
    </StoryLayout>
  ))
  .add('Secondary', () => (
    <StoryLayout rows={4} gap="50px 0">
      <div className="button-group">
        <button className="button button--solid button--secondary button--large button-group__left">left large</button>
        <button className="button button--secondary button--outline button--large button-group__right">right large</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--secondary button-group__left">left default</button>
        <button className="button button--secondary button--outline button-group__right">right default</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--secondary button--small button-group__left">left small</button>
        <button className="button button--secondary button--outline button--small button-group__right">right small</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--secondary button--xsmall button-group__left">left extra small</button>
        <button className="button button--secondary button--outline button--xsmall button-group__right">right extra small</button>
      </div>
    </StoryLayout>
  ))
  .add('Dark', () => (
    <StoryLayout rows={4} gap="50px 0">
      <div className="button-group">
        <button className="button button--solid button--dark button--large button-group__left">left large</button>
        <button className="button button--dark button--outline button--large button-group__right">right large</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--dark button-group__left">left default</button>
        <button className="button button--dark button--outline button-group__right">right default</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--dark button--small button-group__left">left small</button>
        <button className="button button--dark button--outline button--small button-group__right">right small</button>
      </div>
      <div className="button-group">
        <button className="button button--solid button--dark button--xsmall button-group__left">left extra small</button>
        <button className="button button--dark button--outline button--xsmall button-group__right">right extra small</button>
      </div>
    </StoryLayout>
  ))
