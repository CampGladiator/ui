import React from 'react'
import { mount } from 'enzyme'
import Modal from '../lib/Modal'
import sinon from 'sinon'

describe('<Modal />', () => {
  const props = {
    showModal: true,
    onModalClose: sinon.spy(),
    modalTitle: '',
    modalContent: '',
  }
  const renderedComponent = mount(<Modal {...props} />)
  it('renders node with correct class name', () => {
    expect(renderedComponent.find('.modal').length).toBe(1)
  })

  it('renders <ModalOpen /> with correct class name', () => {
    expect(renderedComponent.find('.modal.modal--open').length).toBe(1)
  })

  it('renders <ModalContainer /> with correct class name', () => {
    expect(renderedComponent.find('.modal__container').length).toBe(1)
  })

  it('renders <ModalClose /> with correct class name', () => {
    expect(renderedComponent.find('.modal__close').length).toBe(1)
  })

  it('renders <ModalHeader /> with correct class name', () => {
    expect(renderedComponent.find('.modal__header').length).toBe(1)
  })

  it('renders <ModalTitle /> with correct class name', () => {
    expect(renderedComponent.find('.font-display').length).toBe(1)
  })

  it('renders <ModalSection /> with correct class name', () => {
    expect(renderedComponent.find('.modal__content').length).toBe(1)
  })

  it('renders <ModalFooter /> with correct class name', () => {
    expect(renderedComponent.find('.modal__footer').length).toBe(1)
  })
})
