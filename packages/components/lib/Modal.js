import React, { memo } from 'react'
import Icon from './Icon'
import PropTypes from 'prop-types'

const ModalOpen = memo(({ className, ...props }) => (
  <div className={`modal modal--open ${className}`} {...props} />
))

const ModalContainer = memo(props => (
  <div className="modal__container" {...props} />
))

const ModalClose = memo(props => <a className="modal__close" {...props} />)

const ModalHeader = memo(props => (
  <header className="modal__header" {...props} />
))

const ModalTitle = memo(props => (
  <h4
    className="font-display font-display--h4 --center text-navy space-stack-s"
    {...props}
  />
))

const ModalSection = memo(props => (
  <section className="modal__content" {...props} />
))

const ModalContent = memo(props => <p className="--left" {...props} />)

const ModalFooter = memo(props => (
  <footer className="modal__footer" {...props} />
))

const Modal = ({
  modalTitle,
  modalContent,
  children,
  className,
  showModal = false,
  onModalClose,
}) => {
  const modalCloseHandler = e => {
    if (e) {
      e.preventDefault()
      onModalClose(e)
    }
  }

  if (showModal) {
    return (
      <ModalOpen className={className}>
        <ModalContainer>
          <ModalClose onClick={modalCloseHandler}>
            <Icon name="close" onClick={modalCloseHandler} />
          </ModalClose>
          <ModalHeader>
            <ModalTitle>{modalTitle}</ModalTitle>
          </ModalHeader>
          <ModalSection>
            <ModalContent>{modalContent}</ModalContent>
          </ModalSection>
          <ModalFooter>{children}</ModalFooter>
        </ModalContainer>
      </ModalOpen>
    )
  }
  return null
}

Modal.propTypes = {
  onModalClose: PropTypes.func,
  modalTitle: PropTypes.string,
  modalContent: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  showModal: PropTypes.bool,
}

export default Modal
