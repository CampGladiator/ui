import React from 'react'

import { storiesOf } from '@storybook/react'

const StoryStyles = () => (
  <style>
    {`
    body {
      font-size: 12px;
      color: white;
    }

    .block {
      padding: 20px;
      max-width: 240px;
      min-height: 150px;
      background: #eee;
      position: relative;
    }

    .block--large {
      min-width: 250px;
    }

    .block__label {
      white-space: nowrap;
      top: 0;
      left: 0;
      position: absolute;
      color: #666;
    }

    .content {
      background: #9fc3e6;
      display: block;
      background: #9fc3e6;
    }

    .item {
      background: #9fc3e6;
      min-width: 50px;
      width: 50px;
      min-height: 50px;
      border: 1px dashed #7a71b9;
    }

    .item--large {
      min-width: 100px;
    }
  `}
  </style>
)

storiesOf('Utility|Alignment', module)
  .addParameters({ a11y: false })
  .add(
    'Flex',
    () => (
      <>
        <div>
          <h3 className="font-gotham">basic</h3>
          <section className="flex flex-wrap space-between-inline-l space-between-l">
            <div className="block flex">
              <code className="block__label">.flex</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex-column">
              <code className="block__label">.flex-column</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex flex-wrap" style={{ maxWidth: 190 }}>
              <code className="block__label">.flex.flex-wrap</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </section>
        </div>
        <div>
          <h3 className="font-gotham">align items</h3>
          <section className="flex flex-wrap space-between-inline-l space-between-l">
            <div className="block flex items-start">
              <code className="block__label">.flex.items-start</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex items-end">
              <code className="block__label">.flex.items-end</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex items-center">
              <code className="block__label">.flex.items-center</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex items-baseline">
              <code className="block__label">.flex.items-baseline</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex items-stretch">
              <code className="block__label">.flex.items-stretch</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex items-start">
              <code className="block__label">.flex.items-start</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </section>
        </div>
        <div>
          <h3 className="font-gotham">justify content</h3>
          <section className="flex flex-wrap space-between-inline-l space-between-l">
            <div className="block block--large flex justify-end">
              <code className="block__label">.flex.justify-end</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block block--large flex justify-center">
              <code className="block__label">.flex.justify-center</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block block--large flex justify-baseline">
              <code className="block__label">.flex.justify-baseline</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block block--large flex justify-stretch">
              <code className="block__label">.flex.justify-stretch</code>
              <div className="item" />
              <div className="item" />
              <div className="item" />
            </div>
          </section>
        </div>
        <div>
          <h3 className="font-gotham">align self</h3>
          <section className="flex flex-wrap space-between-inline-l space-between-l">
            <div className="block flex items-start">
              <code className="block__label">.flex.items-start</code>
              <code className="item item--large self-center">.self-center</code>
              <div className="item" />
              <div className="item" />
            </div>
            <div className="block flex items-start">
              <code className="block__label">.flex.items-start</code>
              <div className="item" />
              <div className="item" />
              <code className="item item--large self-end">.self-end</code>
            </div>
            <div className="block flex items-center">
              <code className="block__label">.flex.items-center</code>
              <div className="item" />
              <code className="item item--large self-start">.self-start</code>
              <div className="item" />
            </div>
          </section>
        </div>

        <StoryStyles />
      </>
    ),
    { layout: { rows: 4 } },
  )
