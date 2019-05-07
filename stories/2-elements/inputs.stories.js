import React from 'react'

import { storiesOf } from '@storybook/react'

import Input from '../../packages/components/src/Input'
import Button from '../../packages/components/src/Button'

storiesOf('Elements|Inputs', module)
  .addParameters({ layout: { rows: 2, template: '300px', gap: '50px 0' } })
  .add(
    'Default',
    () => (
      <>
        <Input placeholder="Placeholder" />
        <Input input value="Filled" />
        <Input centered placeholder="Placeholder" />
        <Input centered value="Filled" />
      </>
    ),
    { layout: { rows: 4 } },
  )
  .add('Rounded', () => (
    <>
      <Input rounded placeholder="Placeholder" />
      <Input rounded value="Filled" />
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
          <Input id="1" rounded placeholder="Placeholder" />
        </div>
        <div className="fieldset fieldset--inline">
          <label className="label" htmlFor="1">
            label:
          </label>
          <Input id="1" rounded placeholder="Placeholder" />
        </div>
        <div className="fieldset fieldset--inline">
          <label className="label" htmlFor="1">
            label:
          </label>
          <Input id="1" rounded value="Filled" />
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
          <Input placeholder="Placeholder" />
          <div className="fieldset fieldset__addon">
            <Button solid secondary size="small">
              action
            </Button>
          </div>
        </div>
        <div className="fieldset fieldset--inline">
          <Input placeholder="Placeholder" />
          <div className="fieldset fieldset__addon">
            <Button size="xsmall" outline gray>
              action
            </Button>
          </div>
        </div>
        <div className="fieldset fieldset--inline">
          <Input placeholder="Placeholder" />
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
          <Input placeholder="Placeholder" />
          <Input separator placeholder="Placeholder" />
        </div>
        <div className="fieldset fieldset--inline">
          <Input style={{ flex: '0 0 66%' }} placeholder="Placeholder" />
          <Input separator placeholder="Placeholder" />
        </div>
      </>
    ),
    { layout: { template: '500px', justify: 'stretch' } },
  )
