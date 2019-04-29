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
  .add(
    'Sizes',
    () => (
      <>
        <span>
          <code class="text-navy">.text-xxl</code> <small>(48px)</small>
        </span>
        <span>
          <code class="text-navy">.text-xl</code> <small>(32px)</small>
        </span>
        <span>
          <code class="text-navy">.text-l</code> <small>(24px)</small>
        </span>
        <span>
          <code class="text-navy">.text-m</code> <small>(18px)</small>
        </span>
        <span>
          <code class="text-navy">.text-s</code> <small>(16px)</small>
        </span>
        <span>
          <code class="text-navy">.text-xs</code> <small>(14px)</small>
        </span>
        <span className="text-truncate text-xxl">
          The quick brown fox jumps over the lazy dog
        </span>
        <span className="text-truncate text-xl">
          The quick brown fox jumps over the lazy dog
        </span>
        <span className="text-truncate text-l">
          The quick brown fox jumps over the lazy dog
        </span>
        <span className="text-truncate text-m">
          The quick brown fox jumps over the lazy dog
        </span>
        <span className="text-truncate text-s">
          The quick brown fox jumps over the lazy dog
        </span>
        <span className="text-truncate text-xs">
          The quick brown fox jumps over the lazy dog
        </span>
      </>
    ),
    { layout: { template: '200px 700px', rows: 6, gap: '20px' } },
  )
  .add(
    'Sizes',
    () => (
      <>
        <span className="weight-3 text-xxl">Aa</span>
        <span className="weight-4 text-xxl">Aa</span>
        <span className="weight-bold text-xxl">Aa</span>
      </>
    ),
    { layout: { cols: 3, gap: '20px' } },
  )
