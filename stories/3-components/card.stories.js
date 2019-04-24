import React from 'react'

import { storiesOf } from '@storybook/react'

storiesOf('Components|Card', module)
  .add(
    'Default',
    () => (
      <>
        <div class="card card--contained">
          <h2>Title goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </>
    ),
    { layout: { template: '500px' } },
  )
  .add(
    'Multiple Containers',
    () => (
      <>
        <div class="card">
          <section class="card__container">
            <h2>Title goes here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>
          <hr class="card__separator" />
          <section class="card__container">
            <div class="space-stack-l">
              <header class="flex justify-between">
                <h6 class="space-stack-m text-medium-gray">shipping address</h6>
                <button class="button button--gray button--xsmall">edit</button>
              </header>
              <span class="text-xs text-navy">
                9185 Research Blvd
                <br />
                Austin, TX 78758
              </span>
            </div>
            <div>
              <header class="flex justify-between">
                <h6 class="space-stack-m text-medium-gray">shirt size</h6>
                <button class="button button--gray button--xsmall">edit</button>
              </header>
              <span class="text-xs text-navy">L</span>
            </div>
          </section>
          <hr class="card__separator" />
          <section class="card__container">
            <div className="checkbox">
              <input id="1" className="checkbox__input" type="checkbox" />
              <label className="checkbox__label" htmlFor="1">
                I have read and agree to the <strong>Terms & Conditions</strong>
              </label>
              <i className="checkbox__tick" />
            </div>
          </section>
        </div>
      </>
    ),
    { layout: { template: '500px' } },
  )
  .add(
    'Media',
    () => (
      <>
        <div class="card">
          <img
            class="card__media"
            src="https://ttenroll.campgladiator.com/assets/images/tt/san-antonio.jpg"
            height="200"
          />
          <section class="card__container">
            <h2>SAN ANTONIO</h2>
            <p class="space-stack-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
          <footer class="card__container space-between-inline-m">
            <button class="button button--solid">action 1</button>
            <button class="button">action 2</button>
          </footer>
        </div>
      </>
    ),
    { layout: { template: '500px' } },
  )
