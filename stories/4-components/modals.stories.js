import React, { useState } from 'react'
import Icon from '../../packages/components/lib/Icon'
import Button from '../../packages/components/lib/Button'
import Modal from '../../packages/components/lib/Modal'

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
    <div id="modal" className="modal modal--relative">
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
  parameters: {
    layout: { height: '80vw' },
    info: {
      text: `
        ## Modal
        Modals are highly disruptive overlays helpful for forcing the user's attention to a certain context. 
        Modals can allow manual closing by the user, or this feature can be removed to prevent the user from interacting 
        with other parts of the interface without first completing the action(s) provided by the modal. 
        While modals are powerful, they can be quite disruptive to the user and should therefore be used sparingly 
        and with the user-experience in mind. Examples of common modal content include: showing a video, 
        requesting the user confirm their address, and requiring the user to accept terms and conditions before continuing. 
        Only one modal should be active at a time.

        ### Default
        Default modal is a container to display content in an overlay window on request.
      `,
    },
  },
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
  parameters: {
    layout: { height: '80vh' },
    info: {
      text: `
        ### Opened
        Opened modal is a container to display content in an overlay window.
      `,
    },
  },
}

export const componentDefaultStory = () => {
  const [show, setShow] = useState(false)

  const toggleModal = () => {
    setShow(!show)
  }
  return (
    <>
      <Button solid primary onClick={toggleModal}>
        Open Modal
      </Button>
      <Modal
        showModal={show}
        modalTitle="modal title"
        modalContent="Lorem ipsum dolor sit amet."
        onModalClose={toggleModal}
        className="modal--relative"
      >
        <Button solid primary outline size="large" onClick={toggleModal}>
          Action
        </Button>
      </Modal>
    </>
  )
}

componentDefaultStory.story = {
  name: 'Component Default',
  parameters: {
    layout: { height: '80vw' },
    info: {
      text: `
        ## Modal
        Modals are highly disruptive overlays helpful for forcing the user's attention to a certain context. 
        Modals can allow manual closing by the user, or this feature can be removed to prevent the user from interacting 
        with other parts of the interface without first completing the action(s) provided by the modal. 
        While modals are powerful, they can be quite disruptive to the user and should therefore be used sparingly 
        and with the user-experience in mind. Examples of common modal content include: showing a video, 
        requesting the user confirm their address, and requiring the user to accept terms and conditions before continuing. 
        Only one modal should be active at a time.

        ### Default
        Default modal is a container to display content in an overlay window on request.
      `,
    },
  },
}

export const componentOpened = () => {
  const show = true
  return (
    <>
      <Modal
        showModal={show}
        modalTitle="modal title"
        modalContent="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim."
        className="modal--relative"
      >
        <Button solid primary outline size="large">
          Action
        </Button>
      </Modal>
    </>
  )
}
componentOpened.story = {
  parameters: {
    layout: { height: '80vh' },
    info: {
      text: `
        ### Opened
        Opened modal is a container to display content in an overlay window.
      `,
    },
  },
}
