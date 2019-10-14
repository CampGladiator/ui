import React from 'react'
import PropTypes from 'prop-types'
import mods from './internal/mods'

const Growl = ({ isError, children, onClick }) => (
  <div className={mods('growl-msg', isError && 'growl-msg--error')}>
    <div className="growl-msg__text">{children}</div>
    <a className="fa fa-close growl-msg__close-btn" onClick={onClick} />
  </div>
)

Growl.propTypes = {
  isError: PropTypes.bool,
  autoClose: PropTypes.bool,
  children: PropTypes.node,
}

export default Growl
