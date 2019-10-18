import React from 'react'

import Button from '../../packages/components/src/Button'

export default {
  title: 'Components|Button groups',

  parameters: {
    layout: { rows: 4, gap: '20px 0' },
  },
}

export const primaryStory = () => (
  <>
    <div className="button-group">
      <Button solid primary large className="button-group__left">
        left large
      </Button>
      <Button primary outline large className="button-group__right">
        right large
      </Button>
    </div>
    <div className="button-group">
      <Button solid primary className="button-group__left">
        left default
      </Button>
      <Button primary outline className="button-group__right">
        right default
      </Button>
    </div>
    <div className="button-group">
      <Button solid primary small className="button-group__left">
        left small
      </Button>
      <Button primary outline small className="button-group__right">
        right small
      </Button>
    </div>
    <div className="button-group">
      <Button solid primary xsmall className="button-group__left">
        left extra small
      </Button>
      <Button primary outline xsmall className="button-group__right">
        right extra small
      </Button>
    </div>
  </>
)

primaryStory.story = {
  name: 'Primary',
}

export const secondaryStory = () => (
  <>
    <div className="button-group">
      <Button solid secondary large className="button-group__left">
        left large
      </Button>
      <Button secondary outline large className="button-group__right">
        right large
      </Button>
    </div>
    <div className="button-group">
      <Button solid secondary className="button-group__left">
        left default
      </Button>
      <Button secondary outline className="button-group__right">
        right default
      </Button>
    </div>
    <div className="button-group">
      <Button solid secondary small className="button-group__left">
        left small
      </Button>
      <Button secondary outline small className="button-group__right">
        right small
      </Button>
    </div>
    <div className="button-group">
      <Button solid secondary xsmall className="button-group__left">
        left extra small
      </Button>
      <Button secondary outline xsmall className="button-group__right">
        right extra small
      </Button>
    </div>
  </>
)

secondaryStory.story = {
  name: 'Secondary',
}

export const darkStory = () => (
  <>
    <div className="button-group">
      <Button solid dark large className="button-group__left">
        left large
      </Button>
      <Button dark outline large className="button-group__right">
        right large
      </Button>
    </div>
    <div className="button-group">
      <Button solid dark className="button-group__left">
        left default
      </Button>
      <Button dark outline className="button-group__right">
        right default
      </Button>
    </div>
    <div className="button-group">
      <Button solid dark small className="button-group__left">
        left small
      </Button>
      <Button dark outline small className="button-group__right">
        right small
      </Button>
    </div>
    <div className="button-group">
      <Button solid dark xsmall className="button-group__left">
        left extra small
      </Button>
      <Button dark outline xsmall className="button-group__right">
        right extra small
      </Button>
    </div>
  </>
)

darkStory.story = {
  name: 'Dark',
}
