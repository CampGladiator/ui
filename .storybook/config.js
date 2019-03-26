import React from 'react'

import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { StoryLayout } from '../stories/util'

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

const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
