import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Elements|Inputs', module)
  .addParameters({ layout: { rows: 2, template: '300px', gap: '50px 0' } })
  .add(
    'Default',
    () => (
      <>
        <input className="input" placeholder="Placeholder" />
        <input className="input" value="Filled" />
        <input className="input input--centered" placeholder="Placeholder" />
        <input className="input input--centered" value="Filled" />
      </>
    ),
    { layout: { rows: 4 } },
  )
  .add('Rounded', () => (
    <>
      <input className="input input--rounded" placeholder="Placeholder" />
      <input className="input input--rounded" value="Filled" />
    </>
  ))
  .add(
    'Labeled',
    () => (
      <>
        <div className="fieldset">
          <label className="label" htmlFor="1">
            label:
          </label>
          <input
            id="1"
            className="input input--rounded"
            placeholder="Placeholder"
          />
        </div>
        <div className="fieldset fieldset--inline">
          <label className="label" htmlFor="1">
            label:
          </label>
          <input
            id="1"
            className="input input--rounded"
            placeholder="Placeholder"
          />
        </div>
        <div className="fieldset fieldset--inline">
          <label className="label" htmlFor="1">
            label:
          </label>
          <input id="1" className="input input--rounded" value="Filled" />
        </div>
      </>
    ),
    {
      layout: { rows: 3, template: 'minmax(auto, 500px)', justify: 'stretch' },
    },
  )
  .add(
    'Addon',
    () => (
      <>
        <div className="fieldset fieldset--inline">
          <input className="input" placeholder="Placeholder" />
          <div className="fieldset fieldset__addon">
            <button className="button button--small button--solid button--secondary">
              action
            </button>
          </div>
        </div>
        <div className="fieldset fieldset--inline">
          <input className="input" placeholder="Placeholder" />
          <div className="fieldset fieldset__addon">
            <button className="button button--xsmall button--outline button--gray">
              action
            </button>
          </div>
        </div>
        <div className="fieldset fieldset--inline">
          <input className="input" placeholder="Placeholder" />
          <div className="fieldset fieldset__addon">
            <i className="icon icon--check" />
          </div>
        </div>
      </>
    ),
    { layout: { rows: 3 } },
  )
  .add(
    'Grouped',
    () => (
      <>
        <div className="fieldset fieldset--inline">
          <input className="input" placeholder="Placeholder" />
          <input className="input input--separator" placeholder="Placeholder" />
        </div>
        <div className="fieldset fieldset--inline">
          <input
            className="input"
            style={{ flex: '0 0 66%' }}
            placeholder="Placeholder"
          />
          <input className="input input--separator" placeholder="Placeholder" />
        </div>
      </>
    ),
    { layout: { template: '500px', justify: 'stretch' } },
  )