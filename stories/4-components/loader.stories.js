import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../../packages/components/src/Button'
import Loader from '../../packages/components/src/Loader'

storiesOf('Components|Loader', module)
    .addParameters({ layout: { rows: 5, gap: '10px 0' } })
    .add(
    'Default',
    () => (
        <>
            <Button textContent={'Placeholder'} category={'loader'} red outline size="xlarge">
              <Loader />
            </Button>
            <Button textContent={'Placeholder'} category={'loader'} red outline size="large">
              <Loader />
            </Button>
            <Button textContent={'Placeholder'} category={'loader'} red outline>
              <Loader />
            </Button>
            <Button textContent={'Placeholder'} category={'loader'} red outline size="small">
              <Loader />
            </Button>
            <Button textContent={'Placeholder'} category={'loader'} red outline size="xsmall">
              <Loader />
            </Button>
        </>
    ),
)
