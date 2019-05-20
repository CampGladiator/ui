import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../../packages/components/src/Button'

storiesOf('Components|EllipsisLoader', module)
  .addParameters({ layout: { rows: 5, gap: '10px 0' } })
  .add('Default', () => (
    <>
      <Button loading={true} outline size="xlarge" />
      <Button outline size="large" />
      <Button loading={true} outline />
      <Button outline size="small" />
      <Button loading={true} outline size="xsmall" />
    </>
  ))
