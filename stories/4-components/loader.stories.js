import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../../packages/components/src/Button'

storiesOf('Components|EllipsisLoader', module)
  .addParameters({ layout: { rows: 5, gap: '10px 0' } })
  .add('Default', () => (
    <>
      <Button loading={true} outline size="xlarge">
        {' '}
        Placeholder{' '}
      </Button>
      <Button outline size="large">
        {' '}
        Placeholder{' '}
      </Button>
      <Button loading={true} outline>
        {' '}
        Placeholder{' '}
      </Button>
      <Button outline size="small">
        {' '}
        Placeholder{' '}
      </Button>
      <Button loading={true} outline size="xsmall">
        {' '}
        Placeholder{' '}
      </Button>
    </>
  ))
