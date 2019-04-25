import React from 'react'

import { storiesOf } from '@storybook/react'

const toggleModal = () =>
  document.getElementById('modal').classList.toggle('modal--open')

storiesOf('Components|Modals', module)
  .addParameters({ layout: { rows: 1 } })
  .add('Default', () => (
    <>
      <button className="button button--primary" onClick={toggleModal}>
        click me
      </button>
      <div id="modal" className="modal">
        <div className="modal__container">
          <button className="modal__close" onClick={toggleModal}>
            <i className="icon icon--close" />
          </button>
          <header className="modal__header">
            <h2>modal title</h2>
          </header>
          <section className="modal__content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </section>
          <footer className="modal__footer">
            <button className="button button--outline button--primary button--large">
              action
            </button>
          </footer>
        </div>
      </div>
    </>
  ))
  .add(
    'Opened',
    () => (
      <>
        <div className="modal modal--open modal--relative">
          <div className="modal__container">
            <button className="modal__close" onClick={toggleModal}>
              <i className="icon icon--close" />
            </button>
            <header className="modal__header">
              <h2>modal title</h2>
            </header>
            <section className="modal__content">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </section>
            <footer className="modal__footer">
              <button className="button button--outline button--primary button--large">
                action
              </button>
            </footer>
          </div>
        </div>
      </>
    ),
    { layout: { height: '80vh' } },
  )
