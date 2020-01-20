import React from 'react'
import PropTypes from 'prop-types'
import mods from './internal/mods'
import Icon from './Icon'

const Growl = ({ className, id, isError, children, onClick }) => (
  <div
    id={id}
    className={mods('growl-msg', {}, isError && 'growl-msg--error', className)}
  >
    <div className="growl-msg__text">{children}</div>
    <a className="growl-msg__close-btn" onClick={onClick}>
      <Icon className="growl-msg__close-btn" name="close" />
    </a>
  </div>
)

Growl.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isError: PropTypes.bool,
  children: PropTypes.node,
}

export default Growl
