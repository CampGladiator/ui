import React from 'react'
import ProgressBar from '../../packages/components/lib/ProgressBar'

export default {
  title: 'Components|ProgressBar',
}

export const defaultProgressBar = () => (
  <>
    <ProgressBar />

    <ProgressBar percentCompleted={75} />

    <ProgressBar percentCompleted={50} />

    <ProgressBar percentCompleted={25} progressColor="#263746" />

    <ProgressBar percentCompleted={80} progressColor="#263746" />

    <ProgressBar percentCompleted={100} progressColor="#263746" />
  </>
)

defaultProgressBar.story = {
  name: 'Default',
  parameters: {
    layout: {
      template: '100%',
      rows: 6,
      gap: '80px',
      justify: 'initial',
    },
    info: {
      text: `
        ## ProgressBar
        ProgressBar component is used to show the progress of the flow.
      `,
    },
  },
}
