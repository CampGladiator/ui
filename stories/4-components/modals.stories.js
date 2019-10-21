import React from 'react'
import Icon from '../../packages/components/lib/Icon'
import Button from '../../packages/components/lib/Button'

const toggleModal = () =>
  document.getElementById('modal').classList.toggle('modal--open')

export default {
  title: 'Components|Modals',
}

export const defaultStory = () => (
  <>
    <Button solid primary onClick={toggleModal}>
      Open Modal
    </Button>
    <div id="modal" className="modal">
      <div className="modal__container">
        <a className="modal__close" onClick={toggleModal}>
          <Icon name="close" onClick={toggleModal} />
        </a>
        <header className="modal__header">
          <h2>modal title</h2>
        </header>
        <section className="modal__content">
          <p>Lorem ipsum dolor sit amet.</p>
        </section>
        <footer className="modal__footer">
          <Button solid primary outline size="large" onClick={toggleModal}>
            Action
          </Button>
        </footer>
      </div>
    </div>
  </>
)

defaultStory.story = {
  name: 'Default',
  parameters: { layout: { height: '80vw' } },
}

export const opened = () => (
  <>
    <div className="modal modal--open modal--relative">
      <div className="modal__container">
        <a className="modal__close" onClick={toggleModal}>
          <Icon name="close" onClick={toggleModal} />
        </a>
        <header className="modal__header">
          <h2>modal title</h2>
        </header>
        <section className="modal__content">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </section>
        <footer className="modal__footer">
          <Button solid primary outline size="large" onClick={toggleModal}>
            Action
          </Button>
        </footer>
      </div>
    </div>
  </>
)

opened.story = {
  parameters: { layout: { height: '80vh' } },
}
