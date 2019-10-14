import React from 'react'
import { storiesOf } from '@storybook/react'
import Growl from '../../packages/components/src/Growl'

let showGrowl = false
const toggleGrowl = () => !showGrowl

storiesOf('Components|Growl Messages', module)
  .add('Info', () => <Growl>Alert message goes here</Growl>, {
    layout: { template: '40vw' },
  })
  .add('Error', () => <Growl isError>Alert message goes here</Growl>, {
    layout: { height: '40vh' },
  })
