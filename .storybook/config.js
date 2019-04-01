import React from 'react'

import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import StoryLayout from './StoryLayout'
import { storybookTheme, infoAddonStyles } from './theming'
import '../build/main.css'

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: storybookTheme,
  },
  info: {
    styles: infoAddonStyles,
  },
})

addDecorator(
  withInfo({
    header: false,
    inline: true,
    propTablesExclude: [StoryLayout],
  }),
)

addDecorator((story, { parameters }) => {
  return parameters.layout ? (
    <StoryLayout {...parameters.layout}>{story()}</StoryLayout>
  ) : (
    story()
  )
})

addDecorator(withA11y)

const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
