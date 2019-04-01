import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Base|Typography', module)
  .add(
    'Headings',
    () => (
      <>
        <div>
          <h1>heading 1</h1>
          <h2>heading 2</h2>
          <h3>heading 3</h3>
          <h4 className="font-united">heading 4</h4>
          <h5 className="font-united">heading 5</h5>
          <h6 className="font-united">heading 6</h6>
        </div>
        <div className="text-right">
          <h1 className="font-gotham">heading 1</h1>
          <h2 className="font-gotham">heading 2</h2>
          <h3 className="font-gotham">heading 3</h3>
          <h4>heading 4</h4>
          <h5>heading 5</h5>
          <h6>heading 6</h6>
        </div>
      </>
    ),
    { layout: { rows: 1, gap: '0 100px' } },
  )
  .add('Sizes', () => (
    <>
      <p className="text-xxl">The quick brown fox jumps over the lazy dog</p>
      <p className="text-xl">The quick brown fox jumps over the lazy dog</p>
      <p className="text-l">The quick brown fox jumps over the lazy dog</p>
      <p className="text-m">The quick brown fox jumps over the lazy dog</p>
      <p className="text-s">The quick brown fox jumps over the lazy dog</p>
      <p className="text-xs">The quick brown fox jumps over the lazy dog</p>
    </>
  ))
