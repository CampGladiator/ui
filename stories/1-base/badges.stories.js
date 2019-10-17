import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Base|Badge', module)
  .add(
    'Badges',
    () => (
      <>
        <div className="badge badge--default" />
        <div className="badge badge--bold" />
        <div className="badge badge--bronze" />
        <div className="badge badge--silver" />
        <div className="badge badge--gold" />
        <div className="badge badge--elite" />
      </>
    ),
    { layout: { rows: 1, cols: 6 } },
  )
  .add(
    'Badge Plates',
    () => (
      <>
        <div className="badge-plate badge-plate--default" />
        <div className="badge-plate badge-plate--bold" />
        <div className="badge-plate badge-plate--bronze" />
        <div className="badge-plate badge-plate--silver" />
        <div className="badge-plate badge-plate--gold" />
        <div className="badge-plate badge-plate--elite" />
      </>
    ),
    { layout: { rows: 1, cols: 6 } },
  )
  .add(
    'Badge Tags',
    () => (
      <>
        <div className="badge-tag badge-tag--default" />
        <div className="badge-tag badge-tag--bold" />
        <div className="badge-tag badge-tag--bronze" />
        <div className="badge-tag badge-tag--silver" />
        <div className="badge-tag badge-tag--gold" />
        <div className="badge-tag badge-tag--elite" />
      </>
    ),
    { layout: { rows: 1, cols: 6 } },
  )
