import React from 'react'

import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y'
import { withOmission } from 'storybook-react-omit'

import { storybookTheme, infoAddonStyles } from './theming'
import StoryLayout from './StoryLayout'
import '../packages/ui/build/main.css'

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
    propTablesExclude: withOmission([React.Fragment]),
    maxPropObjectKeys: 99,
    maxPropStringLength: 99,
  }),
)

addDecorator((story, { parameters }) =>
  parameters.layout ? (
    <StoryLayout {...parameters.layout}>{story()}</StoryLayout>
  ) : (
    story()
  ),
)

addDecorator(withA11y)

const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
