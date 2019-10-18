import React from 'react'

export default {
  title: 'Components|Card',
}

export const defaultStory = () => (
  <>
    <div className="card card--contained">
      <h2>Title goes here</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { layout: { template: '500px' } },
}

export const multipleContainers = () => (
  <>
    <div className="card">
      <section className="card__container">
        <h2>Title goes here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <hr className="card__separator" />
      <section className="card__container">
        <div className="space-stack-l">
          <header className="flex justify-between">
            <h6 className="space-stack-m text-medium-gray">shipping address</h6>
            <button className="button button--gray button--xsmall">edit</button>
          </header>
          <span className="text-xs text-navy">
            9185 Research Blvd
            <br />
            Austin, TX 78758
          </span>
        </div>
        <div>
          <header className="flex justify-between">
            <h6 className="space-stack-m text-medium-gray">shirt size</h6>
            <button className="button button--gray button--xsmall">edit</button>
          </header>
          <span className="text-xs text-navy">L</span>
        </div>
      </section>
      <hr className="card__separator" />
      <section className="card__container">
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
)

multipleContainers.story = {
  parameters: { layout: { template: '500px' } },
}

export const media = () => (
  <>
    <div className="card">
      <img
        className="card__media"
        src="https://ttenroll.campgladiator.com/assets/images/tt/san-antonio.jpg"
        height="200"
      />
      <section className="card__container">
        <h2>SAN ANTONIO</h2>
        <p className="space-stack-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <footer className="card__container space-between-inline-m">
        <button className="button button--solid">action 1</button>
        <button className="button">action 2</button>
      </footer>
    </div>
  </>
)

media.story = {
  parameters: { layout: { template: '500px' } },
}
