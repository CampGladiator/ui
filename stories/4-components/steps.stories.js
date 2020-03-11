import React from 'react'
import Steps from '../../packages/components/lib/Steps'

export default {
  title: 'Components|Steps',
}

export const defaultSteps = () => {
  const fourStep = ['Step One', 'Step Two', 'Step Three', 'Step Four']

  const fiveStep = [
    'Step One',
    'Step Two',
    'Step Three',
    'Step Four',
    'Step Five',
  ]
  return (
    <>
      <Steps steps={fourStep} />

      <Steps steps={fourStep} currentSelectedStep={2} />

      <Steps steps={fourStep} currentSelectedStep={3} />

      <Steps steps={fiveStep} currentSelectedStep={2} />
    </>
  )
}

defaultSteps.story = {
  name: 'Default',
  parameters: {
    layout: {
      template: '100%',
      rows: 4,
      gap: '80px',
      justify: 'initial',
    },
    info: {
      text: `
        ## Steps
        Steps is used to show the step items. 
      `,
    },
  },
}
